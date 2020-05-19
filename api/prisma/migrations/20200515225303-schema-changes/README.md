# Migration `20200515225303-schema-changes`

This migration has been generated at 5/15/2020, 10:53:03 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

ALTER TABLE "quaint"."Recipe" ADD COLUMN "nationality" TEXT   ;

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200515215731-devdb..20200515225303-schema-changes
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "sqlite"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider      = "prisma-client-js"
@@ -14,8 +14,9 @@
   // simple model for a recipe
   id          Int       @default(autoincrement()) @id
   title       String?
   duration    String?
+  nationality String?
   ingredients String?
   image       String?
   author      String?
   preparation String?
```


