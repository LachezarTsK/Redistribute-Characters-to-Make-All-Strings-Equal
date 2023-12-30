
using System;

public class Solution
{
    private static readonly int ALPHABET_SIZE = 26;

    public bool MakeEqual(string[] words)
    {
        if (words.Length < 2)
        {
            return true;
        }

        int[] frequency = new int[ALPHABET_SIZE];
        foreach (string word in words)
        {
            foreach (char letter in word)
            {
                ++frequency[letter - 'a'];
            }
        }

        foreach (int current in frequency)
        {
            if (current % words.Length != 0)
            {
                return false;
            }
        }
        return true;
    }
}
