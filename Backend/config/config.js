module.exports = {
    development: {
      username: 'your_username',
      password: 'your_password',
      database: 'database_name',
      host: 'localhost',
      dialect: 'postgres',
    },
    production: {
      use_env_variable: 'DATABASE_URL',
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    },
  };