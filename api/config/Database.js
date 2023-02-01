import { Sequelize } from "sequelize";
 
const db = new Sequelize('auth_db', 'root', '1212312121', {
    host: "192.168.1.101",
    dialect: "mariadb"
});
 
export default db;