class Scale {

    weight;

    constructor(w)
    {
        this.weight = w;
    }

        CalculateWeight (){
          

        if(this.weight > 0 && this.weight < 2.5)
        {
            return this.weight * 3.50;
        }
        else if (this.weight>= 2.5 && this.weight < 5)
        {
            return this.weight * 2.85;
        }
        else if(this.weight >=5 && this.weight <7)
        {
            return this.weight * 2.45;
        }
        else
        {
            return this.weight * 3.25;
        }
        
    }
}

module.exports = Scale;