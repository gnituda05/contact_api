/*
  Warnings:

  - You are about to drop the column `mobile_num` on the `Message` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Message` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `services` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "mobile_num",
ADD COLUMN     "services" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Message_email_key" ON "Message"("email");
