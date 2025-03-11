export class Solver {
    static reverseWords(s: string): string {
        const words = s.split(/\s+/g)
            .filter(a => a.length > 0).reverse();
        return words.join(' ');
    };
}