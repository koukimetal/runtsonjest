export class Solver {
    static increasingTriplet(nums: number[]): boolean {
        if (nums.length < 3) {
            return false;
        }
        // mins[i + 1] represents the min head of i length sequence
        let mins = [nums[0]];
        for (let i = 1; i < nums.length; i++) {
            if (mins.length === 1) {
                if (nums[i] <= mins[0]) {
                    mins[0] = nums[i];
                } else {
                    mins.push(nums[i]);
                }
            } else if (mins.length === 2) {
                // mins[0] < mins[1]
                if (mins[1] < nums[i]) {
                    return true;
                } else if (nums[i] < mins[0]) {
                    mins[0] = nums[i]; // max 1 length seq head is nums[i]
                } else if (mins[0] < nums[i] && nums[i] < mins[1]) {
                    mins[1] = nums[i]; // max 2 length seq head is nums[i]
                }
            }
        }
        return false;
    };
}