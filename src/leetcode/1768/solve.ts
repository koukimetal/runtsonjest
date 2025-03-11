export class Solver {
    static mergeAlternately(word1: string, word2: string): string {
        // fact
        // even number from word1
        // odd number from word2
        // in the end the length should be |w1| + |w2|

        let i1 = 0;
        let i2 = 0;
        const result = new Array<string>;
        while (i1 + i2 < word1.length + word2.length) {
            if (i1 < word1.length) {
                result.push(word1[i1]);
                i1++;
            }
            if (i2 < word2.length) {
                result.push(word2[i2]);
                i2++;
            }
        }
        return result.join('');
    };
}