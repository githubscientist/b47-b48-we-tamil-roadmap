/*
    Context:
        - So far we have used or seen applications that use variables and references to store data.
        - these data will not persist after the application is closed or restarted
        - These data does not persist as it is stored in RAM memory. (RAM - Random Access Memory, Volatile Memory)
        - To persist the data, we need to store it in a non-volatile memory. (Hard Disk, SSD, Flash Drive, etc)
        - In that case, either we can store the data in a file or in a database

    Database:
        - A database is a collection of information or data that is organized so that it can be easily accessed, managed and updated.
        - There are two types of databases: SQL and NoSQL
            - SQL - Structured Query Language (SQL databases are relational databases or Structured Databases)
            - NoSQL - Not only SQL (NoSQL databases are non-relational or unstructured databases)
    
    DBMS:
        - Database Management System
        - A software that is used to manage the database
        - Eg: MySQL, Oracle, MongoDB, etc
    
    SQL Databases:
        - Structured Query Language Databases
        - Databases are collection of data. This data is stored in tables. The tables has rows and columns.
        - Each row in a table is called a record
        - Each column in a table is called a field
        - The tables are related to each other using keys. The relationships are defined using primary and foreign keys. The relationships are one-to-one, one-to-many, many-to-many
    
    SQL: Structured Query Language

    1. DDL: Data Definition Language
        a. CREATE : To create a database or table
        b. ALTER : To alter the structure of the table
        c. DROP : To drop a database or table
        d. TRUNCATE : To remove all the records from a table
        e. RENAME : To rename a table

    2. DML: Data Manipulation Language
        a. INSERT: To insert a new record into a table

        b. UPDATE: To update an existing record in a table
        c. DELETE: To delete an existing record from a table
    
    3. DQL: Data Query Language
        a. SELECT: To select records from a table

    4. DCL: Data Control Language
        a. GRANT: To provide user access to database or table
        b. REVOKE: To remove user access from database or table

    5. TCL: Transaction Control Language
        a. COMMIT: To save the changes
        b. ROLLBACK: To undo the changes
        c. SAVEPOINT: To save temporarily

    
    Queries:
        query: select version();
        meaning: to check the version of the database

        query: select now();
        meaning: to check the current date and time

        query: show databases;
        meaning: to check the list of databases

        query: select database();
        meaning: to check the current database

        to select a database: use <database_name>;

        to view the tables in a database: show tables;

        to create a database: 
        create database <database_name>;

        example: create database mydb;

        to create a table:
        create table <table_name>(
            <column_name> <datatype> <constraint>,
            <column_name> <datatype> <constraint>,
            <column_name> <datatype> <constraint>
        );

        constraint: not null, unique, primary key, foreign key, default, auto_increment, check

        example: create table students( 
            id int primary key auto_increment,
            name varchar(50) not null,
            age int not null,
            email varchar(50) unique);
    
    To move a table from a database to another database:
    rename table <database_name>.<table_name> to <database_name>.<table_name>;

    To view the structure of a table:
    describe <table_name>; or desc <table_name>;

    example: describe students;

    to modify the structure of a table:
    alter table <table_name> add <column_name> <datatype> <constraint>;

    example: alter table students add phone varchar(15) not null;

    example: alter table students modify name varchar(20) not null;

    example: alter table students add constraint unique_phone unique(phone);

    to delete a table: 
    drop table <table_name>;

    example: drop table students;

    to delete a database:
    drop database <database_name>;

    example: drop database mydb;

    to insert a record into a table:
    insert into <table_name> values(<value1>, <value2>, <value3>);

    example: insert into students values(1, 'John', 20, 'john@gmail.com');

    to view all the records of the table:
    select * from <table_name>;

    example: select * from students;

    insert additional records into the table:

    insert into students values
        (2, 'Jane', 21, 'jane@gmail.com'),
        (3, 'Jack', 22, 'jack@gmail.com'),
        (4, 'Jill', 23, 'jill@gmail.com');
    
    to update a record in a table:
    update <table_name> set <column_name> = <value> where <condition>;

    to select age and email columns from students table:
    select age, email from students;

    MySQL Engines:
        - Innodb
        - MariaDB
        - etc.

    Exercise: 
        From the mysqlsampledatabase, with the payments table,
            1. select all the records

            query: select * from payments;

            2. select all the records where amount is greater than 100000

            query: select * from payments where amount > 100000;

            3. select all the records where amount is greater than 100000 and less than 200000

            query: select * from payments where amount > 100000 and amount < 200000;

            4. group by customerNumber and find the total amount for each customer

            query: select customerNumber, sum(amount) from payments group by customerNumber;

            5. group by customerNumber and find the total amount for each customer where the total amount is greater than 100000

            query: select customerNumber, sum(amount) from payments group by customerNumber having sum(amount) > 100000;

            6. arrange the records in descending order of amount

            query: select customerNumber, sum(amount) from payments group by customerNumber having sum(amount) > 100000 order by sum(amount) desc;

            7. select the top 3 and second top 3 records

            - top3 table has the top 3 records
            - customers table has the customer details

            Now, we need to join both the tables to find the customer details of the top 3 customers (customer name and phone number).

            query: select c.customerName, c.phone from customers c join top3 t on c.customerNumber = t.customerNumber;
*/

/*
    Exercise: Design a database for an online bookstore.

    - the bookstore sells books and each book can belong to multiple genres.
    - customers can place orders and each order can contain multiple books.
    - each customer can have multiple addresses.
    - an address can be associated with multiple customers.
    - each book has multiple authors.
    - an author can write multiple books.

    List of tables:
        - books
        - genres
        - authors
        - customers
        - orders
        - addresses

    Relationships:
        - books and genres: many-to-many
        - books and authors: many-to-many
        - customers and addresses: many-to-many
        - customers and orders: one-to-many
    
    List of Tables and columns:
        1. books
            - bookID (primary key)
            - genreID (foreign key referencing genres table)
            - authorID (foreign key referencing authors table)
            - title
            - ISBN
            - price
            - publicationDate
        
        2. genres
            - genreID (primary key)
            - name
        
        3. authors
            - authorID (primary key)
            - bookID (foreign key referencing books table)
            - name
            - noOfPublications
        
        4. customers
            - customerID (primary key)
            - addressID (foreign key referencing addresses table)
            - customerName
            - customerEmail
            - customerPhone
        
        5. addresses
            - addressID (primary key)
            - customerID (foreign key)
            - addressLine1
            - addressLine2
            - city
            - state
            - postalcode
            - country
        
        6. orders
            - orderID (primary key)
            - customerID (foreign key referencing customers table)
            - bookID (foreign key referencing books table)
            - orderDate
            - orderTime
            - orderAmount
            - orderQuantity
*/

/*
        Normalization:
            - Normalization is a process of organizing the data in the database.
            - The goal of normalization is to reduce data redundancy (duplicate data) and improve data integrity (accuracy and consistency)
            - Normalization is a multi-step process that puts data into tabular form by removing duplicated data from the relation tables.
            
            - There are 5 normal forms: 
            1NF, 
            2NF, 
            3NF, 
            4NF, 
            5NF

            - 1NF: Eliminate repeating groups in individual tables

                - All columns must contain atomic values
                - Each column should have a unique name
                - the order in which data is stored does not matter

                example: 
                    
                studentCourses
                  - studentID
                  - course1
                  - course2
                  - studentName
                
                table: students
                    - studentID
                    - studentName
                
                table: courses
                    - courseID
                    - courseName

            - 2NF: Eliminate redundant data
            - 3NF: Eliminate columns not dependent on key
            - BCNF: Boyce-Codd Normal Form
            - 4NF: Multivalued dependency
            - 5NF: Join dependency
*/

/*
        mysql summarize functions:
        
        1. sum
        2. avg
        3. min
        4. max
        5. count
        6. stddev
        7. variance
        8. distinct
        9. logavg
        10. logsum
*/