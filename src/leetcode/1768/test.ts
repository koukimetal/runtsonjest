import {Solver} from './solve';
describe('1768', () => {
   it('first', () => {
       expect(Solver.mergeAlternately('abc', 'pqr'))
           .toBe('apbqcr')
   });
    it('2', () => {
        expect(Solver.mergeAlternately('ab', 'pqrs'))
            .toBe('apbqrs')
    });
    it('3', () => {
        expect(Solver.mergeAlternately('abcd', 'pq'))
            .toBe('apbqcd')
    });
    it('4', () => {
        expect(Solver.mergeAlternately('', ''))
            .toBe('')
    });
});