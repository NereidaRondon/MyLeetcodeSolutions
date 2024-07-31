class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int low = 1;

        int high = piles[0];
        for(int x = 0; x < piles.length; x++){
            if(high < piles[x]){
                high = piles[x];
            }
        }

        while (low < high) {

            int k = (low + high) / 2;
            int hours = 0;
            for (int pile : piles) {
                hours += Math.ceil((double) pile / k);
            }
            if(hours <= h){
                high = k;
            } else {
                low = k + 1;
            }
        }

        return low;
    }
}