var rearrangeCharacters = function(s, target) {
    const map = new Map();
for (const char of s) {

if (map.has(char)) map.set(char, map.get(char) + 1);
else map.set(char, 1);
}
const targetMap = new Map();
for (const char of target) {

if (targetMap.has(char)) targetMap.set(char, targetMap.get(char) + 1);
else targetMap.set(char, 1);
}
let min = Infinity;
for (const [key, val] of targetMap) {

if (!map.has(key)) return 0;
min = Math.min(min, Math.floor(map.get(key) / val));
}
return min;

};
