const should = require("should");
const sinon = require("sinon");
const dataController = require("../controllers/dataController");

describe("Data controller test package:", () => {
  describe("Post (register patient):", () => {
    it("should fail if patient form is not complete", () => {
      const req = {
        body: {
          name: "Damon",
        },
      };
      const res = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy(),
      };

      const controller = dataController.registerPatientV1(req, res);

      res.status.calledWith(400).should.equal(true);
      res.send.calledWith("All fields are required").should.equal(true);
    });
  });
});
