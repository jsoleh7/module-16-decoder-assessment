// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe("caesar", () => {
    it("return false if shift value is equal to 0", () => {
        const input = "message";
        const expected = false;
        const actual = caesar(input, 0, encode = true);
        expect(actual).to.eql(expected)
    })

    it("return false if shift value is less than -25", () => {
        const input = "Zebra Magazine";
        const expected = false;
        const actual = caesar(input, -26, encode = true);
        expect(actual).to.eql(expected)
    })

    it("return false if shift value is greater than 25", () => {
        const input = "Zebra Magazine";
        const expected = false;
        const actual = caesar(input, 28, encode = true);
        expect(actual).to.eql(expected)
    })

    it("should ignore capital letters", () => {
        //test
        const input = "Zebra Magazine";
        const expected = "cheud pdjdclqh";
        const actual = caesar(input, 3, encode = true);
        expect(actual).to.eql(expected)
    })

    it("should handle shifts that go past the end of the alphabet", () => {
        //test
        const input = "Zebra Magazine";
        const expected = "cheud pdjdclqh";
        const actual = caesar(input, 3, encode = true);
        expect(actual).to.eql(expected)
    })

    it("should maintain spaces and other nonalphabetic symbols in the message", () => {
        //test
        const input = "Zebra Magazine";
        const expected = "cheud pdjdclqh";
        const actual = caesar(input, 3, encode = true);
        expect(actual).to.eql(expected)
    })


    it("should encode a message by shifting the letters", () => {
        const input = "thinkful";
        const expected = 'wklqnixo';
        const actual = caesar(input, 3, encode = true);
        expect(actual).to.eql(expected)
    })
    
    it("should decode a message by shifting the letters", () => {
        const input = "wklqnixo";
        const expected = 'thinkful';
        const actual = caesar(input, 3, encode = false);
        expect(actual).to.eql(expected)
    })
})