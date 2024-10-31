"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderController = void 0;
const DeleteOrderService_1 = require("../../services/order/DeleteOrderService");
class DeleteOrderController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteOrderService = new DeleteOrderService_1.DeleteOrderService();
            const order_id = req.query.order_id;
            const order = yield deleteOrderService.execute({ order_id });
            return res.json(order);
        });
    }
}
exports.DeleteOrderController = DeleteOrderController;
