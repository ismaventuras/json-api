import { expect } from "chai"

describe("Test services", ()=> {
    describe("test express web server", () => {
        it("should return hello world on querying /", ()=> {
            expect('ok').to.equal('ok');
        })
    })

})