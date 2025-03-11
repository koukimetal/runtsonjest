import {Solver} from './solve';
describe('151', () => {
   it('1', () => {
       expect(Solver.reverseWords('the sky is blue'))
           .toBe('blue is sky the')
   });
    it('2', () => {
        expect(Solver.reverseWords('  hello world  '))
            .toBe('world hello')
    });
    it('3', () => {
        expect(Solver.reverseWords('a good   example'))
            .toBe('example good a')
    });
    it('4', () => {
        expect(Solver.reverseWords('      '))
            .toBe('')
    });
    it('5', () => {
        expect(Solver.reverseWords(' a  b  c '))
            .toBe('c b a')
    });
});