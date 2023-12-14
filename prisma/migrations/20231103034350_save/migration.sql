/*
  Warnings:

  - Added the required column `mobile_num` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "mobile_num" TEXT NOT NULL;
