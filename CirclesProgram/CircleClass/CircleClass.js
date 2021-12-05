class CircleObject{
    //Properties
    radius;

    //Constructor

    constructor (r)
    {
    this.radius = r;
    }




    //Methods

    AreaOfCircle()
    {
        return (Math.PI*(this.radius*this.radius));
    }

    CircumferenceOfCircle()
    {
        return (Math.PI*(this.radius * 2));
    }



}
module.exports = CircleObject;