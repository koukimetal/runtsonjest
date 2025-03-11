export class Solver {
    static maxOperations(nums: number[], k: number): number {
        nums.sort((a, b) => a - b);
        // console.log(nums);
        let h = 0, t = nums.length - 1, ans = 0;
        while (h < t) {
            if (nums[h] + nums[t] < k) {
                h++;
            } else if (nums[h] + nums[t] > k) {
                t--;
            } else {
                h++;
                t--;
                ans++;
            }
        }
        return ans;
    };
}