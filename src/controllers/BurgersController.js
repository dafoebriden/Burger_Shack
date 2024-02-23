import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";


export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router
        this.router.get('', this.getBurgers)
            .get('', this.getBurgers)
            .get('/:burgerId', this.getBurgerById)
            .post('', this.createBurger)
            .delete('/:burgerId', this.destroyBurger)
    }

    /**
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
     */
    getBurgers(request, response, next) {
        try {
            const burgers = burgersService.getBurgers()
            response.send(burgers)
        } catch (error) {
            next(error)
        }
    }
    /**
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
     */
    getBurgerById(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            const burger = burgersService.getBurgerById(burgerId)
            response.send(burger)
        } catch (error) {
            next(error)

        }
    }

    /**
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
     */
    createBurger(request, response, next) {
        try {
            const burgerData = request.params.burgerId
            const burger = burgersService.createBurger(burgerData)
            response.send(burger)
        } catch (error) {
            next(error)

        }
    }
    /**
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
     */
    destroyBurger(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            const burger = burgersService.destroyBurger(burgerId)
            response.send(burger)
        } catch (error) {
            next(error)

        }
    }
}