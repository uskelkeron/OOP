
class RectangleObjet {

    width;
    height;


    constructor(l,w)
    {
        this.height = l;
        this.width = w;
    }

    area(){

        return this.height * this.width;
    }

    perimeter(){
        return ( 2 * (this.height + this.width));
    }
}

module.exports = RectangleObjet;