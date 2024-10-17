import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/products/ListByCategoryService";

class ListByCategoryController{
    async handle(req: Request, res: Response){

        const listByCategory = new ListByCategoryService

        const category_id = req.query.category_id as string;

        const products = await listByCategory.execute({category_id});

        return res.json(products)
    }
}

export { ListByCategoryController }