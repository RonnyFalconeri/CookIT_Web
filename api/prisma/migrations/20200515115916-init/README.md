# Migration `20200515115916-init`

This migration has been generated by RonnyFalconeri at 5/15/2020, 11:59:16 AM.
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
migration ..20200515115916-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,24 @@
+datasource DS {
+  provider = "sqlite"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = env("BINARY_TARGET")
+}
+
+// Define your own datamodels here and run `yarn redwood db save` to create
+// migrations for them.
+model Recipe {
+  // simple model for a recipe
+  id          Int       @default(autoincrement()) @id
+  title       String?
+  duration    String?
+  ingredients String?
+  image       String?
+  author      String?
+  preparation String?
+  favorite    Boolean?
+  created_at  DateTime? @default(now())
+}
```


