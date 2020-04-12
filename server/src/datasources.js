const { SQLDataSource } = require("datasource-sql");
 
const MINUTE = 60;
 
class ProductDatabase extends SQLDataSource {
  getProducts() {
    return this.knex
      .select("*")
      .from("products")
  }
}
 
module.exports.ProductDatabase = ProductDatabase;