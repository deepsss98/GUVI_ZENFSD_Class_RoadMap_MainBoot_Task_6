class Calculate_Uber_Price{
    constructor(name,km_travelled,price_per_km,discount){
       this.name=name;
       this.km_travelled=km_travelled;
       this.price_per_km=price_per_km;
       this.discount=discount;
    }

    get_Price_with_discount(){
      var total_price=this.km_travelled*this.price_per_km;
        var discount_price=(this.discount/100)*total_price;
        return total_price-discount_price;
    }
}

var x=new Calculate_Uber_Price("Deepika",127.5,16.50,25);
console.log("Calculation of Uber Price for discount 25%: "+x.get_Price_with_discount());
