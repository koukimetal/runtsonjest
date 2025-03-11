import {Solver} from './solve';
describe('392', () => {
   it('1', () => {
       expect(Solver.isSubsequence('abc', 'ahbgdc'))
           .toBe(true)
   });
    it('2', () => {
        expect(Solver.isSubsequence('axc', 'ahbgdc'))
            .toBe(false)
    });
    it('3', () => {
        expect(Solver.isSubsequence('abc', 'ab'))
            .toBe(false)
    });
    it('4', () => {
        expect(Solver.isSubsequence('abc', 'abc'))
            .toBe(true)
    });
    it('5', () => {
        expect(Solver.isSubsequence('aabbb', 'asasasbabsbsb'))
            .toBe(true)
    });
    it('6', () => {
        expect(Solver.isSubsequence('abc', 'cba'))
            .toBe(false)
    });
});