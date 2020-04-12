const { SQLDataSource } = require("datasource-sql");
 
const MINUTE = 60;
 
class ProductDatabase extends SQLDataSource {
  getProducts() {
    return this.knex
      .select("*")
      .from("products")
  }

  getProductById(id) {
    return this.knex
      .select("*")
      .from("products")
      .where('id', id)
      .first()
  }
}
 
module.exports.ProductDatabase = ProductDatabase;