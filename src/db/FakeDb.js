import { Burger } from "../models/Burgers.js";

class FakeDb {
    burgers = [
        new Burger({ id: 1, name: 'burger', isMeal: true, MealSize: 'Medium', calories: 600, popularity: 7, paddyQuantity: 1, sides: '', condiments: 'ketchup' })

    ]
}

export const fakeDb = new FakeDb()