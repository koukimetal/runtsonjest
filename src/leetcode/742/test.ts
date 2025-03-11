import {Solver} from './solve';
describe('742', () => {
   it('1', () => {
       expect(Solver.pivotIndex([1,7,3,6,5,6]))
           .toBe(3)
   });
    it('2', () => {
        expect(Solver.pivotIndex([1,2,3]))
            .toBe(-1)
    });
    it('3', () => {
        expect(Solver.pivotIndex( [2,1,-1]))
            .toBe(0)
    });
    it('4', () => {
        expect(Solver.pivotIndex( [1,-1,2]))
            .toBe(2)
    });
    it('5', () => {
        expect(Solver.pivotIndex([1]))
            .toBe(0)
    });
    it('6', () => {
        expect(Solver.pivotIndex([1,0,-1]))
            .toBe(-1)
    });
    it('7', () => {
        expect(Solver.pivotIndex([1,1]))
            .toBe(-1)
    });
    it('1', () => {
        expect(Solver.pivotIndex([1,1,1]))
            .toBe(1)
    });

});