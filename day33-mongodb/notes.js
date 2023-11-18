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
        
        6. Find documents in a collection

              a. Find all documents in a collection

                query: db.collection_name.find();
                example: db.users.find();

              b. Find all documents with a specific fields in a collection

                query: db.collection_name.find({}, {key: 1, key: 1, key: 1});

                or 

                query: db.collection_name.find({}, {key: 0, key: 0, key: 0});

                example: db.users.find({}, {name: 1, age: 1, _id: 0});

        
        Query Operators in MongoDB
            a. or operator - $or - finds documents which satisfy at least one condition
            b. and operator - $and - finds documents which satisfy all conditions
            c. less than operator - $lt - finds documents which satisfy the condition less than a value
            d. less than or equal to operator - $lte - finds documents which satisfy the condition less than or equal to a value
            e. greater than operator - $gt - finds documents which satisfy the condition greater than a value
            f. greater than or equal to operator - $gte - finds documents which satisfy the condition greater than or equal to a value
            g. not equal to operator - $ne - finds documents which satisfy the condition not equal to a value
            h. in operator - $in - finds documents which satisfy the condition in a list of values
            i. not in operator - $nin - finds documents which satisfy the condition not in a list of values
            j. equals operator - $eq - finds documents which satisfy the condition equal to a value

    Tasks:

    1. View all the documents in the users collection
    2. View all the documents with name and age fields in the users collection
    3. View all the documents with name and age fields in the users collection where age is greater than 30
    4. View all the documents with name and age fields in the users collection where age is greater than or equal to 30
    5. View all the documents with name and age fields in the users collection where age is less than 30
    6. View all the documents with name and age fields in the users collection where age is less than or equal to 30
    7. View all the documents with name and age fields in the users collection where age is not equal to 30
    8. View all the documents with name and age fields in the users collection where age is in 30, 35, 40
    9. View all the documents with name and age fields in the users collection where age is not in 30, 35, 40
    10. View all the documents with name and age fields in the users collection where age is equal to 30
    11. View all the documents with name and age fields in the users collection where age is equal to 30 or 35
    12. View all the documents with name and age fields in the users collection where age is equal to 30 and 35
*/