import prismaClient from "../../prisma"

interface OrderRequest {
    order_id: string
}

class DetailsOrderService {
    async execute({ order_id }: OrderRequest) {
        const orders = await prismaClient.order.findFirst({
            where: {
                id: order_id 
            },
            include: {
                items: {
                    include: {
                        product: true 
                    }
                }
            }
        })

        return orders
    }
}

export { DetailsOrderService }
