# Migration `20200515215309-cookit`

This migration has been generated at 5/15/2020, 9:53:09 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."Recipe" (
    "author" TEXT   ,
    "created_at" DATE  DEFAULT CURRENT_TIMESTAMP ,
    "duration" TEXT   ,
    "favorite" BOOLEAN   ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "image" TEXT   ,
    "ingredients" TEXT   ,
    "preparation" TEXT   ,
    "title" TEXT   
) 

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200515214809-cookitdb..20200515215309-cookit
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "sqlite"
-  url = "***"
+  url      = "file:.cookit.db"
 }
 generator client {
   provider      = "prisma-client-js"
```


