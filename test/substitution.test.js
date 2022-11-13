// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("substitution", () => {
    it("return false if there is no alphabet", () => {
        //test
        const input = "thinkful"
        const alphabet = "" 
        const expected = false
        const actual = substitution(input, encode = true);
        expect(actual).to.eql(expected)

    })

    it("return false if alphabet is not 26 characters", () => {
        //test
        const input = "thinkful"
        const alphabet = "abcd" 
        const expected = false
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(expected)

    })

    it("return false if alphabet is not a string", () => {
        //test
        const input = "thinkful"
        const alphabet = 4532 
        const expected = false
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(expected)

    })

    it("should return false if there are duplicate letters in alphabet", () => {
        //test
        let input = "thinkful"
        const alphabet = "qwertyuioplkjhgfdsazxcvbmm"
        const expected = false
        const actual = substitution(input, alphabet, encode = true)
        expect(actual).to.eql(expected)

    })
    it("should correctly translate given phrase based on alphabet given", () => {
          //test
        let input = "thinkful"
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"
        const expected = "jrufscpw"
        const actual = substitution(input, alphabet, encode = true)
        expect(actual).to.eql(expected)

})

    it("should maintain spaces in message", () => {
        //test
        let input = "thinkful blah"
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"
        const expected = "jrufscpw owxr"
        const actual = substitution(input, alphabet, encode = true)
        expect(actual).to.eql(expected)

    })
    it("should ignore capital letters", () => {
          //test
        let input = "THINKFUL"
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"
        const expected = "jrufscpw"
        const actual = substitution(input, alphabet, encode = true)
        expect(actual).to.eql(expected)
    })
})