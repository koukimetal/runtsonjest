import {Solver} from './solve';
describe('334', () => {
   it('1', () => {
       expect(Solver.increasingTriplet([1,2,3,4,5]))
           .toBe(true)
   });
    it('2', () => {
        expect(Solver.increasingTriplet([5,4,3,2,1]))
            .toBe(false)
    });
    it('3', () => {
        expect(Solver.increasingTriplet([2,1,5,0,4,6]))
            .toBe(true)
    });
    it('4', () => {
        expect(Solver.increasingTriplet([2,2,3,3,3,2,2,3]))
            .toBe(false)
    });
    it('5', () => {
        expect(Solver.increasingTriplet([]))
            .toBe(false)
    });
    it('6', () => {
        expect(Solver.increasingTriplet([2,3,0,1,2]))
            .toBe(true)
    });
});