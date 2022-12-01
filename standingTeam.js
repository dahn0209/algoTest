function footballScoreTally (pointsTeam){

    let objTeam={};
    ////split the string into array to separate each match///
    let splitPointsTeam=pointsTeam.split(";").filter((eachGame)=>{return eachGame.length!==0});
  //////for loop to access each match///////
  for(let i=0;i<splitPointsTeam.length;i++){
    ///acess each match with eachMatch variable
    let eachMatch=(splitPointsTeam[i]);
  ///create homeTeam-left team variable 
let teamHome=eachMatch.slice(0,eachMatch.indexOf('-')).trim();
  ////create awayTeam varaible -right team;
let teamAway=eachMatch.slice(eachMatch.indexOf('-')+2,eachMatch.indexOf(":"));
////create homeTeam score result///
     //////create the objTeam and fill it up
    if(!(objTeam[teamHome])){
       objTeam[teamHome]=0;
    }

    if(!(objTeam[teamAway])){
       objTeam[teamAway]=0;
    }
let teamHomeScore=eachMatch.slice(eachMatch.indexOf(':')+1,eachMatch.lastIndexOf('-')).trim();
///create awayTeam score reuslt///
let awayTeamScore=eachMatch.slice(eachMatch.lastIndexOf('-')+1).trim();
////parse str to integers
let parseIntTeamHome=parseInt(teamHomeScore);
let parseIntTeamAway=parseInt(awayTeamScore);
////update objTeam to tally score//
if(parseIntTeamHome>parseIntTeamAway){
  objTeam[teamHome]+=3;
}

if(parseIntTeamAway>parseIntTeamHome){
  objTeam[teamAway]+=3;
}

if(parseIntTeamHome===parseIntTeamAway){
  objTeam[teamHome]+=1;
  objTeam[teamAway]+=1;
}
  
}
//sort the object and convert to array
let sortedArr=[];
for(let key in objTeam){
sortedArr.push
sortedArr.push([key,objTeam[key]])
}   
sortedArr.sort((a,b)=>{return b[1]-a[1]});
////convert to array to string and return string
let strResult=''
for(let i=0;i<sortedArr.length;i++){
let eachTeam=sortedArr[i];
let eachTeamStr=`${eachTeam[0]} ${eachTeam[1]}; `;
strResult+=eachTeamStr
}
return strResult     
}

const input = 'England - Iran: 6-2; USA - Wales: 1-1; Wales - Iran: 0-2; England - USA: 1-1; Iran - USA: 2-1; Wales - England: 3-3;'

console.log(footballScoreTally(input));
