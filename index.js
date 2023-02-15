
var arr= [
  
    {
      color: "purple",
      type: "minivan",
      registration: new Date('2017-01-03'),
      capacity: 7
    },
    {
      color: "black",
      type: "station wagon",
      registration: new Date('2018-03-03'),
      capacity: 5,
      cars:[]
    },
     
    { 
      color: "black",
      type: "station wagon",
      registration: new Date('2018-03-03'),
      capacity: 5,
      cars:[]
      
      
    }];
    const result = arr.filter(checkColor);
    function checkColor(arr) 
{
return arr.color =="black"
} 
result.forEach(function(item) {
  item.price = 1000;
  delete item.type;
  
}); 

    result.forEach(function(item) {
        item.price = 1000;
        delete item.type;
        
    }); 
   
    var sample=[  
    {
     name:"BMW",
     models:"320"
    },
    {
     name:"Fiat",
     models:"500"
    }
    ];
    
   
    result.forEach(function(array) {
     array.cars.push(sample);
    
       
    }); 
    // sample.pop();
    // color="black";
    // sample.unshift(color);
    sample.forEach(function(item) {
      item.color="black";
      
      
  }); 
    
   
    


  console.log(result);
    

   

 
 
          
    