export class Solver {
    static isSubsequence(s: string, t: string): boolean {
        if (t.length < s.length) {
            return false;
        }
        let si = 0;
        let ti = 0;
        while (si < s.length && ti < t.length) {
            if (s[si] === t[ti]) {
                si++;
                ti++;
            } else {
                ti++;
            }
        }
        return si === s.length;
    };
}