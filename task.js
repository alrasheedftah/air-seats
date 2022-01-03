class AirSeatAlgorith {
    constructor(seats,no_passenger) {
    //   this.seats = seats;
    //   this.no_passenger=no_passenger;
    }

    static display(seats,colSize,rowSize){
        var output=""
        for(var i=0;i<colSize;i++){
              for(var j=0;j<rowSize;j++){
                  if(seats[j]==null||seats[j][i]==null){
                    
                      output+="- "
                      continue;
                  }
                  for(var swapIndex=0;swapIndex<seats[j][i].length;swapIndex++){
                      output+=(seats[j][i][swapIndex]+" ");
                  }
                  output+=",";
              }
              output+="\n"
          }
        console.log(output)
        return output;
    }	
    
    static CreateTemplateSeats(array){
        let seats=[];
        for(var i=0;i<array.length;i++)
              seats.push(Array(array[i][0]).fill().map(()=>Array(array[i][1]).fill("Middle")));
        
        for(var i=0;i<seats.length;i++){
            for(var j=0;j<seats[i].length;j++){  
                  seats[i][j][0]="Aisle";
                seats[i][j][seats[i][j].length-1]="Aisle";
            }
          }
    
          for(var i=0;i<seats[0].length;i++)
              seats[0][i][0]="Windows";
          for(var i=0;i<seats[seats.length-1].length;i++)
            seats[seats.length-1][i][(seats[seats.length-1][i].length)-1]="Windows";
          
        return seats;
    }
    

    static justCount(val,counter,seats,colSize,rowSize,no_passenger){
        for(var i=0;i<colSize;i++){
            for(var j=0;j<rowSize;j++){
                if(seats[j]==null||seats[j][i]==null)
                    continue;
                for(var swapIndex=0;swapIndex<seats[j][i].length;swapIndex++){
                    if(counter > no_passenger)
                        return {seats:seats,counter:counter};
                        if(seats[j]!=null&& seats[j][i]!=null && seats[j][i][swapIndex]===val){
                       seats[j][i][swapIndex]=counter;
                      counter++;
                    }
                }
            }
    
        }
        return {seats:seats,counter:counter};
    }

  }


module.exports = AirSeatAlgorith;

const prompt = require('prompt')


// const rl = readline.createInterface({
// 	  input: process.stdin,
// 	  output: process.stdout
// });

prompt.start();

prompt.get(['seats','no_passenger'], function (err, result) {
    if (err) {
      return onErr(err);
    }
    console.log(' This  input For Seats Array [ Rows And Columns ]:');


	console.log('  Rows : ' + result.seats);

	console.log('  no Passenger : ' + result.no_passenger);
	
      var rowSize=Math.max.apply(Math, JSON.parse(result.seats).map(e=>e[0]));
	  var colSize=Math.max.apply(Math, JSON.parse(result.seats).map(e=>e[1]));
	  


	  //Create Template For Seats Viewin 
	  var seats=AirSeatAlgorith.CreateTemplateSeats(JSON.parse(result.seats));

	  /// Print Template Befor Cont 
	  AirSeatAlgorith.display(seats,colSize,rowSize)
	  

	  //TODO Change Template With Number Passener
	  var airSeats={};
	  airSeats=AirSeatAlgorith.justCount("Aisle",1,seats,colSize,rowSize,result.no_passenger);  // TODO Futur Performance By Recurtion Method Or Do while
	  airSeats=AirSeatAlgorith.justCount("Windows",airSeats.counter,airSeats.seats,colSize,rowSize,result.no_passenger);
	  airSeats=AirSeatAlgorith.justCount("Middle",airSeats.counter,airSeats.seats,colSize,rowSize,result.no_passenger);
	  seats=airSeats.seats;
	  
	  //print the seats
	  AirSeatAlgorith.display(seats,colSize,rowSize)
	  
	//   rl.close();
	});

    
//   module.exports = UserService;