import {Solver} from './solve';
describe('392', () => {
   it('1', () => {
       expect(Solver.maxOperations([1,2,3,4], 5))
           .toBe(2)
   });
    it('2', () => {
        expect(Solver.maxOperations([3,1,3,4,3], 6))
            .toBe(1)
    });
    it('3', () => {
        expect(Solver.maxOperations([7,6,5,4,3,2,1], 8))
            .toBe(3)
    });
    it('4', () => {
        expect(Solver.maxOperations([1,1,1,1], 2))
            .toBe(2)
    });
    it('5', () => {
        expect(Solver.maxOperations([1,1,1], 2))
            .toBe(1)
    });
    it('5', () => {
        expect(Solver.maxOperations([13,2,111,112], 113))
            .toBe(1)
    });
});