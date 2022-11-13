// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius");

describe("polybius", () => {
    it("should translate the letters 'i' and 'j' to 42 when encoding", () => {
        //test
        const input = "thinkful";
        const expected = "4432423352125413";
        const actual = polybius(input, encode = true);
        expect(actual).to.eql(expected)
    })
    it("should translate 42 to letters 'i' and 'j' when decoding", () => {
        //test
        const input = "4432423352125413";
        const expected = "th(i/j)nkful";
        const actual = polybius(input, encode = false);
        expect(actual).to.eql(expected)
    })
    it("should ignore capital letters", () => {
        //test
        const input = "Hello World";
        const expected = "3251131343 2543241341";
        const actual = polybius(input, encode = true);
        expect(actual).to.eql(expected)    
    })

    it("should maintain spaces in message", () => {
        //test
        const input = "Hello World";
        const expected = "3251131343 2543241341";
        const actual = polybius(input, encode = true);
        expect(actual).to.eql(expected) 
    })
})