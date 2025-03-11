export class Solver {
    static canPlaceFlowers(flowerbed: number[], n: number): boolean {
        const isPrevFlower = (i: number) => {
            if (i === 0) {
                return false;
            }
            return flowerbed[i - 1] === 1;
        }
        const isNextFlower = (i: number) => {
            if (i === flowerbed.length - 1) {
                return false;
            }
            return flowerbed[i + 1] === 1;
        }

        let max = 0;
        for (let i = 0; i < flowerbed.length; i++) {
            if (!isPrevFlower(i) && !isNextFlower(i) && flowerbed[i] === 0) {
                max++;
                flowerbed[i] = 1;
            }
        }
        return max >= n;
    };
}