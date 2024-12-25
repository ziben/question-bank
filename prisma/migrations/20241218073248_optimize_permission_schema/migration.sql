/*
  Warnings:

  - You are about to drop the `RolePermission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `name` on the `Permission` table. All the data in the column will be lost.
  - Added the required column `actionCode` to the `Permission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actionName` to the `Permission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `Permission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupCode` to the `Permission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupName` to the `Permission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "RolePermission_roleId_permissionId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "RolePermission";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Permission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "groupName" TEXT NOT NULL,
    "groupCode" TEXT NOT NULL,
    "actionName" TEXT NOT NULL,
    "actionCode" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "creatorId" INTEGER NOT NULL,
    "updaterId" INTEGER NOT NULL,
    CONSTRAINT "Permission_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Permission_updaterId_fkey" FOREIGN KEY ("updaterId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Permission" ("createdAt", "creatorId", "description", "id", "updatedAt", "updaterId") SELECT "createdAt", "creatorId", "description", "id", "updatedAt", "updaterId" FROM "Permission";
DROP TABLE "Permission";
ALTER TABLE "new_Permission" RENAME TO "Permission";
CREATE INDEX "Permission_groupCode_idx" ON "Permission"("groupCode");
CREATE UNIQUE INDEX "Permission_groupCode_actionCode_key" ON "Permission"("groupCode", "actionCode");
CREATE UNIQUE INDEX "Permission_code_key" ON "Permission"("code");
CREATE TABLE "new_Role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "permissions" TEXT NOT NULL DEFAULT '[]',
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "creatorId" INTEGER NOT NULL,
    "updaterId" INTEGER NOT NULL,
    CONSTRAINT "Role_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Role_updaterId_fkey" FOREIGN KEY ("updaterId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Role" ("createdAt", "creatorId", "description", "id", "name", "updatedAt", "updaterId") SELECT "createdAt", "creatorId", "description", "id", "name", "updatedAt", "updaterId" FROM "Role";
DROP TABLE "Role";
ALTER TABLE "new_Role" RENAME TO "Role";
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");
CREATE UNIQUE INDEX "Role_code_key" ON "Role"("code");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
