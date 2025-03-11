import {Solver} from './solve';
describe('1456', () => {
   it('1', () => {
       expect(Solver.maxVowels('abciiidef', 3))
           .toBe(3)
   });
    it('1', () => {
        expect(Solver.maxVowels('aeiou', 2))
            .toBe(2)
    });
    it('1', () => {
        expect(Solver.maxVowels('leetcode', 3))
            .toBe(2)
    });
    it('1', () => {
        expect(Solver.maxVowels('a', 1))
            .toBe(1)
    });
    it('1', () => {
        expect(Solver.maxVowels('aa', 2))
            .toBe(2)
    });
    it('1', () => {
        expect(Solver.maxVowels('ababb', 4))
            .toBe(2)
    });
    it('1', () => {
        expect(Solver.maxVowels('cbaaba', 4))
            .toBe(3)
    });

});