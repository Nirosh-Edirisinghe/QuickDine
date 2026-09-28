import { Router } from "express";
import { getFeaturedResturant, getResturantAvailability, getResturantBySlug, getResturants } from "../controllers/resturantController.js";

const resturantRouter = Router();

resturantRouter.get('/', getResturants);
resturantRouter.get('/featured', getFeaturedResturant);
resturantRouter.get('/:slug', getResturantBySlug);
resturantRouter.get('/:id/availability', getResturantAvailability);

export default resturantRouter;