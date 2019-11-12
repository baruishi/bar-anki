module.exports = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || "kanji",
    user: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
