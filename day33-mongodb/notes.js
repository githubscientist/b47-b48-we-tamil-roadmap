/*
    MongoDB
        - NoSQL database or non-relational database or non-strucutred database or document database
        - MongoDB is a document database
        - MongoDB stores data in JSON-like documents
        - MongoDB is a schemaless database
        - group of documents is equivalent to a table in relational database -> called as "collection"
        - group of collections is called as "database"
    
    document -> {key: value, key: value, key: value}
    collection -> group of documents
    database -> group of collections

    MongoDB VS MySQL
        - MongoDB is a document database
        - MySQL is a relational database
        - MongoDB is a schemaless database
        - MySQL is a schema database
        - MongoDB stores data in JSON-like documents
        - MySQL stores data in tables
        - MongoDB is easy to scale
        - MySQL is not easy to scale
    
    MongoDB Installation

    MongoDB Compass: GUI for MongoDB

    MongoDB Shell: CLI for MongoDB

    MongoDB Atlas: Cloud MongoDB

    MongoDB Data Types
        - String
        - Number
        - Boolean
        - Date
        - Array
        - Object
        - ObjectId

    MongoDB Queries:
        1. Show all databases

        query: show dbs or show databases;

        2. Use a database: switches to a database if it exists, else creates a new database if it doesn't exist

        query: use database_name;

        3. show collections: shows all collections in the current database

        query: show collections;

        4. Create a collection: creates a new collection in the current database

        Two ways to create a collection:
            1. db.createCollection("collection_name");
            2. db.collection_name.insertOne({key: value, key: value, key: value});
        
        Example Collection:
            db.createCollection("users");
            db.users.insertOne({name: "John", age: 25, city: "New York"});
            db.users.insertOne({name: "Smith", age: 30, city: "London"});
            db.users.insertOne({name: "David", age: 35, city: "Paris"});
            db.users.insertOne({name: "Robert", age: 40, city: "Berlin"});
            db.users.insertOne({name: "William", age: 45, city: "Tokyo"});
            db.users.insertOne({name: "Richard", age: 50, city: "Delhi"});
            db.users.insertOne({name: "Joseph", age: 55, city: "Mumbai"});
            db.users.insertOne({name: "Thomas", age: 60, city: "Sydney"});
            db.users.insertOne({name: "Charles", age: 65, city: "Melbourne"});
            db.users.insertOne({name: "Christopher", age: 70, city: "New York"});
            db.users.insertOne({name: "Daniel", age: 75, city: "London"});

        5. Insert a document into a collection

           a. Insert a single document into a collection

           query: db.collection_name.insertOne({key: value, key: value, key: value});

              Example:  db.users.insertOne({name: "John", age: 25, city: "New York"});
            
           b. Insert multiple documents into a collection     
           
           query: db.collection_name.insertMany([{key: value, key: value, key: value}, {key: value, key: value, key: value}, {key: value, key: value, key: value}]);

              Example: db.users.insertMany([{name: "John", age: 25, city: "New York"}, {name: "Smith", age: 30, city: "London"}, {name: "David", age: 35, city: "Paris"}]);

*/