

export class Burger {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.isMeal = data.isMeal
        this.mealSize = { type: 'string' }
        this.calories = data.calories
        this.popularity = data.popularity | 0
        this.paddyQuantity = data.paddyQuantity | 1
        this.sides = { type: 'string' }
        this.condiments = { type: 'string' }
    }
}
