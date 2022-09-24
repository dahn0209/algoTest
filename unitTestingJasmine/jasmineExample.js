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
  