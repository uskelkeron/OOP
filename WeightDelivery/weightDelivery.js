const main = (()=>{

    const prompt = require("prompt-sync")();
    const Scale  = require("./ScaleObject/Scale.js");

    const printPrice = (weight,price)=>{
        console.log(` The cost of ${weight}kg is equal: ${price}`);
    }

    const printInfo = (id,fname,lname)=>{
        console.log(`\n\n\n ID: ${id} \n First Name: ${fname} \n Last Name: ${lname}`);
    }

    const clerkID = prompt(" Enter Clerk ID: ");
    const fname = prompt(" Enter Clerk's first name: ");
    const lname = prompt (" Enter Clerk's last name: ");
    let    parcelWeight = parseFloat(prompt(" Please enter the weight "));

     
    
    while(isNaN(parcelWeight))
    {
        parcelWeight = parseFloat(prompt(" Please enter valid weight: "));
        console.log(typeof (parcelWeight));
    } 

   
    let Scale1 = new Scale(parcelWeight);
    const price = Scale1.CalculateWeight().toFixed(2);

    
    printInfo(clerkID,fname,lname);
    printPrice(parcelWeight,price);


})();