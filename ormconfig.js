console.log('process.env.DATABASE_URL :>> ',process.env.DATABASE_URL);
module.exports = {
   "type": "postgres",
   "url": process.env.DATABASE_URL,
   "ssl": true,
   "extra": {
      "ssl": {
        "rejectUnauthorized": false
      }
    },
  "entities": [
    "dist/models/**/*{.ts,.js}"
 ],
 "migrations": [
  "dist/database/migrations/**/*{.ts,.js}"
],
 "cli":{
  "migrationsDir": [
    "src/database/migrations/"
  ],
  "entitiesDir": "src/models"
  }
}
