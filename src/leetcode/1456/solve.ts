export class Solver {
    static maxVowels(s: string, k: number): number {
        let sum = new Array<number>(s.length + 1).fill(0);
        for (let i = 1; i <= s.length; i++) {
            let value = 'aeiou'.includes(s[i - 1]) ? 1 : 0;
            sum[i] = sum[i - 1] + value;
        }
        let max = 0;
        for (let i = k; i <= s.length; i++) {
            max = Math.max(max, sum[i] - sum[i - k]);
        }
        return max;
    };
}