
public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public boolean makeEqual(String[] words) {
        if (words.length < 2) {
            return true;
        }

        int[] frequency = new int[ALPHABET_SIZE];
        for (String word : words) {
            for (char letter : word.toCharArray()) {
                ++frequency[letter - 'a'];
            }
        }

        for (int current : frequency) {
            if (current % words.length != 0) {
                return false;
            }
        }
        return true;
    }
}
