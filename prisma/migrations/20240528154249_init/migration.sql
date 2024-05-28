-- DropForeignKey
ALTER TABLE `subjects` DROP FOREIGN KEY `subjects_teacherId_fkey`;

-- AlterTable
ALTER TABLE `subjects` MODIFY `teacherId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `subjects` ADD CONSTRAINT `subjects_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teachers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
