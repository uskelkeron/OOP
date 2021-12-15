class mortgage {
    loan; 

    constructor(loan)
    {
        this.loan = loan;
    }

    CalculateDeposit()
    {
        
        switch(true)
        {
            case this.loan >= 1 && this.loan < 25000:
                {
                    return (this.loan*.05);
                }

            case this.loan >= 25000 && this.loan <= 49999:
                {
                    return (1250 + (this.loan*.10));
                }
            
            case this.loan >= 50000 && this.loan <= 100000:
                {
                    return (5000 + (this.loan*.25));
                }

                default:
                    {
                        return "Error No Case Was Meet";
                    }

        }
    }
}

module.exports = mortgage;