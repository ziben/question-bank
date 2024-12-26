/*
  Warnings:

  - You are about to drop the `question_tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_roles` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `categories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `grades` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `permissions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `questions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `roles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `permissions` on the `roles` table. All the data in the column will be lost.
  - The primary key for the `sources` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `subjects` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `system_logs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `tag_categories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `module` to the `system_logs` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "question_tags_question_id_tag_id_key";

-- DropIndex
DROP INDEX "user_roles_user_id_role_id_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "question_tags";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "user_roles";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_user_roles" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_user_roles_A_fkey" FOREIGN KEY ("A") REFERENCES "roles" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_user_roles_B_fkey" FOREIGN KEY ("B") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_role_permissions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_role_permissions_A_fkey" FOREIGN KEY ("A") REFERENCES "permissions" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_role_permissions_B_fkey" FOREIGN KEY ("B") REFERENCES "roles" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_tag_questions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_tag_questions_A_fkey" FOREIGN KEY ("A") REFERENCES "questions" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_tag_questions_B_fkey" FOREIGN KEY ("B") REFERENCES "tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_categories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "creator_id" TEXT,
    "updater_id" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    CONSTRAINT "categories_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "categories_updater_id_fkey" FOREIGN KEY ("updater_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_categories" ("created_at", "creator_id", "description", "id", "is_deleted", "name", "updated_at", "updater_id") SELECT "created_at", "creator_id", "description", "id", "is_deleted", "name", "updated_at", "updater_id" FROM "categories";
DROP TABLE "categories";
ALTER TABLE "new_categories" RENAME TO "categories";
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");
CREATE TABLE "new_grades" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "creator_id" TEXT,
    "updater_id" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    CONSTRAINT "grades_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "grades_updater_id_fkey" FOREIGN KEY ("updater_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_grades" ("created_at", "creator_id", "description", "id", "is_deleted", "name", "updated_at", "updater_id") SELECT "created_at", "creator_id", "description", "id", "is_deleted", "name", "updated_at", "updater_id" FROM "grades";
DROP TABLE "grades";
ALTER TABLE "new_grades" RENAME TO "grades";
CREATE UNIQUE INDEX "grades_name_key" ON "grades"("name");
CREATE TABLE "new_permissions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "creator_id" TEXT,
    "updater_id" TEXT,
    "group_name" TEXT NOT NULL,
    "group_code" TEXT NOT NULL,
    "action_name" TEXT NOT NULL,
    "action_code" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    CONSTRAINT "permissions_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "permissions_updater_id_fkey" FOREIGN KEY ("updater_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_permissions" ("action_code", "action_name", "code", "created_at", "creator_id", "description", "group_code", "group_name", "id", "is_deleted", "updated_at", "updater_id") SELECT "action_code", "action_name", "code", "created_at", "creator_id", "description", "group_code", "group_name", "id", "is_deleted", "updated_at", "updater_id" FROM "permissions";
DROP TABLE "permissions";
ALTER TABLE "new_permissions" RENAME TO "permissions";
CREATE UNIQUE INDEX "permissions_code_key" ON "permissions"("code");
CREATE INDEX "permissions_group_code_idx" ON "permissions"("group_code");
CREATE UNIQUE INDEX "permissions_group_code_action_code_key" ON "permissions"("group_code", "action_code");
CREATE TABLE "new_questions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "creator_id" TEXT,
    "updater_id" TEXT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "answer" TEXT,
    "analysis" TEXT,
    "difficulty" INTEGER NOT NULL DEFAULT 1,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "category_id" TEXT NOT NULL,
    "subject_id" TEXT NOT NULL,
    "grade_id" TEXT NOT NULL,
    "source_id" TEXT,
    CONSTRAINT "questions_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "questions_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subjects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "questions_grade_id_fkey" FOREIGN KEY ("grade_id") REFERENCES "grades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "questions_source_id_fkey" FOREIGN KEY ("source_id") REFERENCES "sources" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "questions_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "questions_updater_id_fkey" FOREIGN KEY ("updater_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_questions" ("analysis", "answer", "category_id", "content", "created_at", "creator_id", "difficulty", "grade_id", "id", "is_deleted", "source_id", "status", "subject_id", "title", "updated_at", "updater_id") SELECT "analysis", "answer", "category_id", "content", "created_at", "creator_id", "difficulty", "grade_id", "id", "is_deleted", "source_id", "status", "subject_id", "title", "updated_at", "updater_id" FROM "questions";
DROP TABLE "questions";
ALTER TABLE "new_questions" RENAME TO "questions";
CREATE TABLE "new_roles" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "creator_id" TEXT,
    "updater_id" TEXT,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    CONSTRAINT "roles_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "roles_updater_id_fkey" FOREIGN KEY ("updater_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_roles" ("code", "created_at", "creator_id", "description", "id", "is_deleted", "name", "updated_at", "updater_id") SELECT "code", "created_at", "creator_id", "description", "id", "is_deleted", "name", "updated_at", "updater_id" FROM "roles";
DROP TABLE "roles";
ALTER TABLE "new_roles" RENAME TO "roles";
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");
CREATE UNIQUE INDEX "roles_code_key" ON "roles"("code");
CREATE TABLE "new_sources" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "creator_id" TEXT,
    "updater_id" TEXT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    CONSTRAINT "sources_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "sources_updater_id_fkey" FOREIGN KEY ("updater_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_sources" ("created_at", "creator_id", "description", "id", "is_deleted", "name", "type", "updated_at", "updater_id") SELECT "created_at", "creator_id", "description", "id", "is_deleted", "name", "type", "updated_at", "updater_id" FROM "sources";
DROP TABLE "sources";
ALTER TABLE "new_sources" RENAME TO "sources";
CREATE UNIQUE INDEX "sources_name_key" ON "sources"("name");
CREATE TABLE "new_subjects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "creator_id" TEXT,
    "updater_id" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    CONSTRAINT "subjects_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "subjects_updater_id_fkey" FOREIGN KEY ("updater_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_subjects" ("created_at", "creator_id", "description", "id", "is_deleted", "name", "updated_at", "updater_id") SELECT "created_at", "creator_id", "description", "id", "is_deleted", "name", "updated_at", "updater_id" FROM "subjects";
DROP TABLE "subjects";
ALTER TABLE "new_subjects" RENAME TO "subjects";
CREATE UNIQUE INDEX "subjects_name_key" ON "subjects"("name");
CREATE TABLE "new_system_logs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "creator_id" TEXT,
    "updater_id" TEXT,
    "user_id" TEXT NOT NULL,
    "module" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "target" TEXT NOT NULL,
    "target_id" TEXT NOT NULL,
    "detail" TEXT,
    "ip" TEXT,
    "user_agent" TEXT,
    CONSTRAINT "system_logs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_system_logs" ("action", "created_at", "detail", "id", "ip", "target", "target_id", "updated_at", "user_agent", "user_id") SELECT "action", "created_at", "detail", "id", "ip", "target", "target_id", "updated_at", "user_agent", "user_id" FROM "system_logs";
DROP TABLE "system_logs";
ALTER TABLE "new_system_logs" RENAME TO "system_logs";
CREATE TABLE "new_tag_categories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "creator_id" TEXT,
    "updater_id" TEXT,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "allow_multiple" BOOLEAN NOT NULL DEFAULT false,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "tag_categories_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "tag_categories_updater_id_fkey" FOREIGN KEY ("updater_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_tag_categories" ("allow_multiple", "code", "created_at", "creator_id", "description", "id", "is_deleted", "name", "sort_order", "updated_at", "updater_id") SELECT "allow_multiple", "code", "created_at", "creator_id", "description", "id", "is_deleted", "name", "sort_order", "updated_at", "updater_id" FROM "tag_categories";
DROP TABLE "tag_categories";
ALTER TABLE "new_tag_categories" RENAME TO "tag_categories";
CREATE UNIQUE INDEX "tag_categories_name_key" ON "tag_categories"("name");
CREATE UNIQUE INDEX "tag_categories_code_key" ON "tag_categories"("code");
CREATE TABLE "new_tags" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "creator_id" TEXT,
    "updater_id" TEXT,
    "name" TEXT NOT NULL,
    "code" TEXT,
    "description" TEXT,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "category_id" TEXT NOT NULL,
    CONSTRAINT "tags_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "tag_categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tags_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "tags_updater_id_fkey" FOREIGN KEY ("updater_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_tags" ("category_id", "code", "created_at", "creator_id", "description", "id", "is_deleted", "name", "sort_order", "updated_at", "updater_id") SELECT "category_id", "code", "created_at", "creator_id", "description", "id", "is_deleted", "name", "sort_order", "updated_at", "updater_id" FROM "tags";
DROP TABLE "tags";
ALTER TABLE "new_tags" RENAME TO "tags";
CREATE UNIQUE INDEX "tags_name_key" ON "tags"("name");
CREATE UNIQUE INDEX "tags_category_id_name_key" ON "tags"("category_id", "name");
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "creator_id" TEXT,
    "updater_id" TEXT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT
);
INSERT INTO "new_users" ("created_at", "creator_id", "email", "id", "is_deleted", "name", "password", "updated_at", "updater_id", "username") SELECT "created_at", "creator_id", "email", "id", "is_deleted", "name", "password", "updated_at", "updater_id", "username" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_user_roles_AB_unique" ON "_user_roles"("A", "B");

-- CreateIndex
CREATE INDEX "_user_roles_B_index" ON "_user_roles"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_role_permissions_AB_unique" ON "_role_permissions"("A", "B");

-- CreateIndex
CREATE INDEX "_role_permissions_B_index" ON "_role_permissions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_tag_questions_AB_unique" ON "_tag_questions"("A", "B");

-- CreateIndex
CREATE INDEX "_tag_questions_B_index" ON "_tag_questions"("B");
