/*
    Cursor: a pointer to the result set of a query. By default, the cursor is not
    populated with the result of the query. To populate the cursor, you need to
    iterate the cursor.

    MongoDB Cursor Methods
        a. toArray()
            query: db.users.find().toArray()
            explanation: converts the cursor to an array
        
        b. map()
            query: db.users.find().map(function(user) { return user.name; })
            explanation: returns an array of user names
        
        c. pretty()
            query: db.users.find().pretty()
            explanation: returns a formatted document
        
        d. forEach()
            query: db.users.find().forEach(function(user) { print("User: " + user.name); })
            explanation: iterates the cursor and applies a function to each document
        
        e. limit()
            query: db.users.find().limit(2)
            explanation: limits the number of documents returned by the cursor

        f. skip()
            query: db.users.find().skip(2)
            explanation: skips the first 2 documents of the cursor
        
        g. count()
            query: db.users.find().count()
            explanation: returns the number of documents in the cursor
        
        h. sort()
            query: db.users.find().sort({ name: 1 })
            explanation: sorts the documents of the cursor by name in ascending order

    
    Practice Exercises using cursor methods in users collection with the fields: name, age, email, address: {city, state, country}, userID

    1. Find all users
    2. Find all users with age greater than 30
    3. Find all users with age greater than 30 and less than 50
    4. Find all users with age not equal to 30 and 50. map() method should return an array of user names
    5. Find all users with age greater than 30 and less than 50. limit() method should return only 2 documents
    6. Find all users with age greater than 30 and less than 50. skip() method should skip the first 2 documents
    7. Find all users with age greater than 30 and less than 50. sort() method should sort the documents by age in ascending order
    8. Find all users with age greater than 30 and less than 50. sort() method should sort the documents by age in descending order

    Aggregation: Aggregation operations process data records and return computed results. Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result.

    Question: Find the average age of all users based on the country
        
*/

/*

collections:

users
codekata
attendance
topics
tasks
company_drives
mentors

Question: Find all the topics and tasks which are thought in the month of October

topics: [
    {
        topicName: "MongoDB",
        months: ["October", "November", "December"]
    },
    {
        topicName: "NodeJS",
        months: ["January", "February", "March"]
    }
]

or 

topics: [
    {
        January: ["NodeJS", "ReactJS"],
        February: ["HTML", "CSS"],
    }
]

*/