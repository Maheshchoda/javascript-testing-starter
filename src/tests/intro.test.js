import { describe, it, expect } from "vitest";

import { max } from "../intro";

describe('max', () => {
   it('should return first argument if it is greater', () => {
//    AAA:- Arrange Act Assert
    //Arrange 
    const a = 2;
    const b = 1;
    //Act
    const result = max(a, b);
    //Assert
    expect(result).toBe(a);
   });

   it('should return second argument if it is greater', () => {
    expect(max(1, 2)).toBe(2);
   });

   it('should return first argument if they are equal', () => {
    expect(max(1,1)).toBe(1);
   });
});