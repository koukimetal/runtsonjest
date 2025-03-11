export class Solver {
    static pivotIndex(nums: number[]): number {
        let sum = nums.reduce((a, v) => a + v, 0);
        let left = 0;
        for (let i = 0; i < nums.length; i++) {
            const right = sum - nums[i];
            if (left === right) {
                return i;
            }
            sum -= nums[i];
            left += nums[i];
        }
        return -1;
    };
}