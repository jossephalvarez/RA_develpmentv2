# Back End using sequelize client

Example to show the power of sequelize client following the documentation http://docs.sequelizejs.com/manual/migrations.html
# BD
This tables are gonna to generating after the  project setup.
![My BD](https://user-images.githubusercontent.com/17790050/56949780-0baefe80-6b34-11e9-8850-452453240211.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Node v8.10.0
Mysql 5.7.25.0

### Installing

Clone the repo or donwload the code.

Run the next commands to start the project

```
npm install
sequelize db:drop
sequelize db:create
sequelize db:migrate
sequelize db:seed:all
```
To run the backend : 

```
npm run start:dev
```

Following the documentation :http://docs.sequelizejs.com/manual/migrations.html

In this example, I've created a model User with this command : 
```
sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
```
You can create another model with different name and attributes. For more information, you can see [Creating first Model (and Migration)](http://docs.sequelizejs.com/manual/migrations.html) on the official documentation.

I've created a seed  this, with this command : 
```
sequelize seed:generate --name demo-user
```


And you can create another following this  [Creating First Seedl](http://docs.sequelizejs.com/manual/migrations.html) on the official documentation.

With this step you can insert/delete element to the tables that you've created.


#### Run specific seeder

```
sequelize db:seed --seed /seeders/20190423123921-demo-type.js
```

## Running the tests

I dont execute any test, if you know or Do you want to colaborate running test on my branch, feel free to request a pull.

### Break down into end to end tests

### And coding style tests



## Deployment

## Built With

* [sequelize](http://docs.sequelizejs.com/) - Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
* [express](https://expressjs.com/es/) - Web application infrastructure Node.js

## Contributing

Feel free for submitting pull requests to us.

## Versioning

We use [Git](https://github.com) for versioning.

## Authors

* **Josseph Milton Alvarez Villa**

## License

This project is licensed under the ISC License 

## Acknowledgments

* https://medium.com/@jzioria/how-i-fixed-my-sequelize-command-not-found-error-e3ec651b3abc
