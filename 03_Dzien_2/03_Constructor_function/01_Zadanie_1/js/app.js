function Basket() {
    this.products = [];
    this.sum = 0;

}

Basket.prototype.addProduct = function (name, price) {
    this.products.push({name, price})
    this.sumBasket();
}
Basket.prototype.sumBasket=function (){
    this.products.forEach(function (product){
        this.sum +=product.price
    }, this)
}
Basket.prototype.showBasket = function () {
    console.table(this.products, this.sum)
}

const aliceBasket = new Basket();
aliceBasket.addProduct("pomidor", 10);
aliceBasket.addProduct("arbuz", 40);
aliceBasket.showBasket();

const bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun", 50);
bruceBasket.addProduct("tofu", 20);
bruceBasket.showBasket();
