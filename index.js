class Breakfast {
    constructor(food, drink) {
    this.food = food;
    this.drink = drink;
    }
}
class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}
class Dinner {
    #dinner;
    constructor(salad, soup, entree, dinner) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dinner = dinner;
    }
}