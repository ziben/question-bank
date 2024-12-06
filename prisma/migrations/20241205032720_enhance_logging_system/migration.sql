-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SystemLog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "module" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "targetId" TEXT,
    "details" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "userId" INTEGER NOT NULL,
    "ip" TEXT,
    "userAgent" TEXT,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SystemLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SystemLog" ("action", "details", "id", "ip", "module", "targetId", "timestamp", "userAgent", "userId") SELECT "action", "details", "id", "ip", "module", "targetId", "timestamp", "userAgent", "userId" FROM "SystemLog";
DROP TABLE "SystemLog";
ALTER TABLE "new_SystemLog" RENAME TO "SystemLog";
CREATE INDEX "SystemLog_module_action_idx" ON "SystemLog"("module", "action");
CREATE INDEX "SystemLog_timestamp_idx" ON "SystemLog"("timestamp");
CREATE INDEX "SystemLog_userId_idx" ON "SystemLog"("userId");
CREATE INDEX "SystemLog_level_idx" ON "SystemLog"("level");
CREATE INDEX "SystemLog_targetId_idx" ON "SystemLog"("targetId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
