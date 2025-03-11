import {Solver} from './solve';
describe('605', () => {
   it('1', () => {
       expect(Solver.canPlaceFlowers([1,0,0,0,1], 1))
           .toBe(true)
   });
    it('2', () => {
        expect(Solver.canPlaceFlowers([1,0,0,0,1], 2))
            .toBe(false)
    });
    it('3', () => {
        expect(Solver.canPlaceFlowers([0,0,0,0,0], 3))
            .toBe(true)
    });
    it('4', () => {
        expect(Solver.canPlaceFlowers([0,0,0,0,0], 4))
            .toBe(false)
    });

});