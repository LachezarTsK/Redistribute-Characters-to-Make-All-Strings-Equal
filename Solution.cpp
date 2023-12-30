
#include <vector>
#include <string>
#include <ranges>
using namespace std;

class Solution {
    
    inline static const int ALPHABET_SIZE = 26;

public:
    bool makeEqual(const vector<string>& words) const {
        if (words.size() < 2) {
            return true;
        }
        
        array<int, ALPHABET_SIZE> frequency{};
        for (const auto& word : words) {
            for (const auto& letter : word) {
                ++frequency[letter - 'a'];
            }
        }

        return ranges::all_of(frequency, [&words](int value) {return value % words.size() == 0; });
    }
};
