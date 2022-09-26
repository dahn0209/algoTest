/* Code to Test */

const add = (x, y) => {
    return x + y;
  };
  
  describe("add function", function() {
    it("is a function", function() {
      expect(add).toBeDefined();
      expect(typeof add).toBe("function");
    });
  
    it("returns a number", function() {
      expect(typeof add(4, 5)).toBe("number");
      expect(typeof add(10, 20)).toBe("number");
    });
  
    it("returns the sum of two numbers", function() {
      expect(add(20, 40)).toBe(60);
      expect(add(50, 50)).toBe(100);
    });
  });

//   we expecet homeCriteria to be a function-PASSSING;
//   we expect homeCriteria to return string-PASSING;
//   we expetct homeCriteria to acccept string arguments-PASSING;
//   we expect homeCriteria to follow the string pattern:`I am looking for a ${size} bedroon ${type} in ${city}`-PASSING

const isFunction=typeof homeCriteria==='function';
const returnTpyeIsAstring=typeof homeCriteria()==='string';

const size='3';
const type='apartment';
const city='Jersey City';

const typesOfArguments=(typeof size ==='string')&&(typeof type ==='string')&&(typeof city ==='string')

  