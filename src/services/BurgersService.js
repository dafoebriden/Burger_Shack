import { fakeDb } from "../db/FakeDb.js"
import { Burger } from "../models/Burgers.js"
import { BadRequest } from "../utils/Errors.js"


class BurgersService {
    getBurgers() {
        const burgers = fakeDb.burgers
        return burgers
    }

    getBurgerById(burgerId) {
        const foundBurger = fakeDb.burgers.find(burger => burger.id == burgerId)
        if (!foundBurger) {
            throw new BadRequest(`${burgerId} is not a valid id`)
        }
        return foundBurger
    }
    createBurger(burgerData) {
        const newBurger = new Burger(burgerData)
        const lastBurger = fakeDb.burgers[fakeDb.burgers.length - 1]
        if (!lastBurger) {
            newBurger.id = 1
        }
        else {
            newBurger.id = lastBurger.id + 1
        }
        fakeDb.burgers.push(newBurger)
        return newBurger
    }
    destroyBurger(burgerId) {
        const burgerIndex = fakeDb.burgers.findIndex(burger => burger.id == burgerId)
        if (burgerIndex == -1) {
            throw new BadRequest(`No burger found with the id of ${burgerId}`)
        }
    }
}

export const burgersService = new BurgersService()