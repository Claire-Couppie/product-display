This project allow to display the list of products from a postgresql database

## Getting started

In the project directory, run:

```
psql -f sql/products.sql
```
```
export PG_HOST=your_database_host(locally 127.0.0.1)
export PG_USER=your_database_user
export PG_PASSWORD=your_database_password
export PG_DATABASE=your_database_name
cd server
npm install
npm run start
```
```
cd client
npm install
npm run start
```