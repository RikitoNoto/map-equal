import { mapEqual } from "..";

describe('Test: mapEqual', ()=>{

  describe('Map<int, int>', ()=>{
    it('should be return true, if the func called with the same empty maps', () => {
      expect(mapEqual(new Map<number, number>(), new Map<number, number>())).toBe(true);
    });
  
    it('should be return false, if the func called with the different size maps', () => {
      expect(mapEqual(new Map<number, number>(), new Map<number, number>([[1,1]]))).toBe(false);
    });
  
    it('should be return false, if the func called with the same size but different content maps', () => {
      expect(mapEqual(new Map<number, number>([[2,2]]), new Map<number, number>([[1,1]]))).toBe(false);
    });
  });
});
