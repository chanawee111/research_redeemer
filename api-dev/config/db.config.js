module.exports = {
    HOST: "192.168.1.101",
    USER: "root",
    PASSWORD: "1212312121",
    DB: "db_a",
    dialect: "mariadb",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  