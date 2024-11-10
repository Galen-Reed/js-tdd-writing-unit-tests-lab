// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
    it("returns true when thje word is the same forwards and backwards", () => {
        const word = "racecar";
        const result = isPalindrome(word);
        expect(result).toBe(true);
    });
    it("returns false when the word isn't the same forwards and backwards", () => {
        const word= "car";
        const result = isPalindrome(word);
        expect(result).toBe(false);
    });
})
