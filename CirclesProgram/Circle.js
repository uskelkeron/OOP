const prompt = require("prompt-sync")();
const CircleObject = require("./CircleClass/CircleClass.js");

const main = (()=>{
   
    const printCircleDetail = ()=>{

    console.log(` The Area of Cicle| Radius(${radius}): ${circle.AreaOfCircle().toFixed(2)} `);
    console.log(` The Circumference of Cicle| Radius(${radius}): ${circle.CircumferenceOfCircle().toFixed(2)} `)

    }

    const radius = parseFloat(prompt(" Please enter Radius: "));

    const circle = new CircleObject(radius);

    printCircleDetail();



    

    
})();