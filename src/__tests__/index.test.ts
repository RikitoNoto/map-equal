import { mapEqual } from "..";

describe('Test: mapEqual', ()=>{

  describe('Map<int, int>', ()=>{
    it.each([
      {map1: new Map<number, number>(), map2: new Map<number, number>(), result: true},
      {map1: new Map<number, number>(), map2: new Map<number, number>([[1,1]]), result: false},
      {map1: new Map<number, number>([[2,2]]), map2: new Map<number, number>([[1,1]]), result: false},
      {map1: new Map<number, number>([[2,2]]), map2: new Map<number, number>([[2,2]]), result: true},
      {map1: new Map<number, number>([[2,2]]), map2: new Map<number, number>([[2,2]]), result: true},
      {map1: new Map<number, number>([[2,1]]), map2: new Map<number, number>([[2,2]]), result: false},
      {map1: new Map<number, number>([[3,2], [6,9]]), map2: new Map<number, number>([[3,2], [4,5]]), result: false},
      {map1: new Map<number, number>([[3,2], [6,9]]), map2: new Map<number, number>([[3,2], [6,9]]), result: true},
    ])("should be return $result when contents are ($map1Content) ($map2Content).",
    ({map1, map2, result})=>{
      expect(mapEqual(map1, map2)).toBe(result);
    });

  });
});
