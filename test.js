var assert = require('assert');
const expect = require("chai").expect;
// const sinon = require("sinon");

const AirSeatAlgorith = require('./task');


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);

	  var seats=AirSeatAlgorith.CreateTemplateSeats([[4,3],[2,3],[3,4]]);
      AirSeatAlgorith.display(seats,4,4)
	  obj=AirSeatAlgorith.justCount("Aisle",1,seats,4,4,30);  // TODO Futur Performance By Recurtion Method Or Do while
	  obj=AirSeatAlgorith.justCount("Aisle",obj.counter,obj.seats,4,4,30);  // TODO Futur Performance By Recurtion Method Or Do while
	  obj=AirSeatAlgorith.justCount("Aisle",1,obj.counter,obj.seats,4,4,30);  // TODO Futur Performance By Recurtion Method Or Do while
      
      let seatsTest=[
          [
            [19,25,1],
            [21,29,7]
          ],
          [
              [2,26,27,3],
              [8,30,"Middle",9],
              [13,"Middle","Middle",14],

          ],
          [
              [4,5],
              [10,11],
              [15,16],

          ],
          [
              [6,28,30],
              [12,"Middle",22],
              [17,"Middle",23],
              [18,"Middle",24]
          ]
      ]

      stringseats=AirSeatAlgorith.display(obj.seats,4,4)
      seatsTest=AirSeatAlgorith.display(seatsTest,4,4)


      expect(stringseats).equal(seatsTest);

    });
  });
});
