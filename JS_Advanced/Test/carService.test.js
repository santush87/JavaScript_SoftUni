let carService = require("./03.CarService");
let { assert } = require("chai");

describe("Tests carService", function () {
  describe("Tests isItExpensive", function () {
    it("Test issue is Engine and Transmission", function () {
      let ext = `The issue with the car is more severe and it will cost more money`;
      assert.equal(carService.isItExpensive("Engine"), ext, "Engine");
      assert.equal(
        carService.isItExpensive("Transmission"),
        ext,
        "Transmission"
      );
    });
    it("Test issue is not Eng or Transm", function () {
      let ext = `The overall price will be a bit cheaper`;
      assert.equal(carService.isItExpensive("some"), ext, "some");
    });
  });

  describe("Test discount", function () {
    describe("Test with invalid input", function () {
      it("Test if some input !== number", function () {
        let exp = "Invalid input";
        assert.throws(() => {
          carService.discount(15, "asd");
        }, exp);
        assert.throws(() => {
          carService.discount("asd", 45);
        }, exp);
        assert.throws(() => {
          carService.discount("fgs", "asd");
        }, exp);
        assert.throws(() => {
          carService.discount(15, {});
        }, exp);
        assert.throws(() => {
          carService.discount(15, []);
        }, exp);
        assert.throws(() => {
          carService.discount({}, 84);
        }, exp);
        assert.throws(() => {
          carService.discount([], 47);
        }, exp);
      });
    });
    describe("Test with invalid input", function () {
      it("Test when numberOfParts <= 2", function () {
        assert.equal(carService.discount(1, 15), "You cannot apply a discount");
        assert.equal(carService.discount(2, 15), "You cannot apply a discount");
      });

      it("Test when numberOfParts > 2 <=7", function () {
        let perc = 15 / 100;
        assert.equal(
          carService.discount(3, 100),
          `Discount applied! You saved ${100 * perc}$`
        );
        assert.equal(
          carService.discount(7, 100),
          `Discount applied! You saved ${100 * perc}$`
        );
      });
      it("Test when numberOfParts > 7", function () {
        let perc = 30 / 100;
        assert.equal(
          carService.discount(8, 100),
          `Discount applied! You saved ${100 * perc}$`
        );
        assert.equal(
          carService.discount(15, 100),
          `Discount applied! You saved ${100 * perc}$`
        );
      });
    });
  });
  describe("Test partsToBuy", function () {
    describe("Test invalid inputs", function () {
      it("Test invalid first input", function () {
        assert.throws(() => {
          carService.partsToBuy("sa", ["sas"]), "Invalid input";
        });
        assert.throws(() => {
          carService.partsToBuy({}, ["sas"]), "Invalid input";
        });
        assert.throws(() => {
          carService.partsToBuy(15, ["sas"]), "Invalid input";
        });
        assert.throws(() => {
          carService.partsToBuy(undefined, ["sas"]), "Invalid input";
        });
      });
      it("Test invalid second input", function () {
        assert.throws(() => {
          carService.partsToBuy(["sas"], 16), "Invalid input";
        });
        assert.throws(() => {
          carService.partsToBuy(["sas"], {}), "Invalid input";
        });
        assert.throws(() => {
          carService.partsToBuy(["sas"], 187), "Invalid input";
        });
        assert.throws(() => {
          carService.partsToBuy(["sas"], undefined), "Invalid input";
        });
      });
      it("Test invalid both input", function () {
        assert.throws(() => {
          carService.partsToBuy(15, "fasf"), "Invalid input";
        });
        assert.throws(() => {
          carService.partsToBuy(15, 20), "Invalid input";
        });
        assert.throws(() => {
          carService.partsToBuy({}, {}), "Invalid input";
        });
        assert.throws(() => {
          carService.partsToBuy("15", "fasf"), "Invalid input";
        });
      });
    });
    describe("Test Valid inputs", function () {
      let catParts = [
        { part: "blowoff valve", price: 145 },
        { part: "coil springs", price: 230 },
      ];
      let needParts = ["blowoff valve"];
      it("Test total sum", function () {
        assert.equal(carService.partsToBuy(catParts, needParts), 145);
      });
    });
  });
});
