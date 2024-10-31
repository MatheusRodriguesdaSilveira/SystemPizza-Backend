import { Router } from 'express'
import uploadConfig from './config/multer';
import multer from 'multer'
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailuserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/products/CreateProductController';
import { ListByCategoryController } from './controllers/products/ListByCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { DeleteOrderController } from './controllers/order/DeleteOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { DeleteItemController } from './controllers/order/DeleteItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListOrderController } from './controllers/order/ListOrderController';
import { DetailsOrderController } from './controllers/order/DetailsOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderController';


const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

// Route User
router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
router.get('/info', isAuthenticated, new DetailuserController().handle)

// Route Category
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

// Route Products
// router.post('/products', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.post('/products', isAuthenticated, new CreateProductController().handle)
router.get('/category/products', isAuthenticated, upload.single('file'), new ListByCategoryController().handle)

// Route Order
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.post('/order/item', isAuthenticated, new AddItemController().handle)

router.delete('/order', isAuthenticated, new DeleteOrderController().handle)
router.delete('/order/delete', isAuthenticated, new DeleteItemController().handle)

router.put('/order/send', isAuthenticated, new SendOrderController().handle)
router.get('/orders', isAuthenticated, new ListOrderController().handle)
router.get('/orders/details', isAuthenticated, new DetailsOrderController().handle)

router.put('/orders/finish', isAuthenticated, new FinishOrderController().handle)

export { router };