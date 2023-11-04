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

    

*/