/*
  Warnings:

  - You are about to drop the column `orderId` on the `items` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_orderId_fkey";

-- AlterTable
ALTER TABLE "items" DROP COLUMN "orderId",
ADD COLUMN     "order_id" TEXT;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
