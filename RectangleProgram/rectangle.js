const RectangleObjet = require("./rectangleClass/rectangleclass.js");

const prompt = require("prompt-sync")();


const main = (()=>{

    const Rectangle = require("./rectangleClass/rectangleclass.js");


    const height = parseInt(prompt(" Please enter the Length of Rectangle: "));
    const width = parseInt(prompt(" Please enter the Width of Rectangle: "));
    const rectangle1 = new RectangleObjet(height,width);

    
    console.log(` Area of a rectangle with: (H)${height} (W)${width} : ${rectangle1.area()}`);
    console.log(` Perimeter of a rectangle with: (H)${height} (W)${width} : ${rectangle1.perimeter()}`);


    /*
    const RectangleObject = {
        height: 0, 
        width: 0,

        area(){

            return this.height * this.width;
        },

        perimeter(){
            return ( 2 * (this.height + this.width));
        }
    }

    const height = parseInt(prompt(" Please enter the Length of Rectangle: "));
    const width = parseInt(prompt(" Please enter the Width of Rectangle: "));

    RectangleObject.height = height;
    RectangleObject.width = width;


    console.log(` Area of a rectangle with: (H)${height} (W)${width} : ${RectangleObject.area()}`);
    console.log(` Perimeter of a rectangle with: (H)${height} (W)${width} : ${RectangleObject.perimeter()}`);
    */
})();
