## Dynamic ORMs
Creating a Superclass that our other subclasses inherit form
This Superclass talks to SQL for us
Subclass is blissfully unaware of SQL



## ORM definition - what is it?

Object Relational Mapping
ORM is a concept that can be applied with different specifics on the object end and the relational end. In our current case, we are talking about mapping Ruby objects to databases. We could also use some other language and map to some other form of persistence, such as a text file. Be aware of other ways of applying an ORM framework, but for now we will focus on Ruby => database, and currently, a SQL database using SQLite3.

## How ORM works in Ruby, SQL, and IRL

What is represented by what?

1. Ruby Classes become database tables
2. Instances, or instantiated objects, become rows
3. Object attributes become columns
4. The entire state of an application is represented by the entire database

## CRUD - Create Read Update Destroy

### Ruby - what we've done recently

Really, we haven't been truly executing CRUD outside of a temporary runtime environment.

###### Create

We've used `.new` which calls Class#initialize method, and we may or may not have kept track of our instances in a class variable `@@all`.

###### Read

We've used our getter methods, custom and/or through `attr_accessor`
We've built custom finder class methods such as `#find_by_name`

###### Update

Again, we've used setter methods with `attr_accessors`

###### Delete/Destroy

Deleting instances from our class variable `@@all` is really all the 'deleting' we've done

### _Real_ CRUD - SQLite3 SQL Database

Now, we can really implement CRUD features by writing to a database. Below are brief reminders of some key phrases associated with each CRUD action.

###### Create

`INSERT INTO fans VALUES ("Josephine", 23)`

###### Read

`SELECT * FROM fans WHERE name=?, "Josephine"`

###### Update

`UPDATE fans SET name=? WHERE id=?, "Josephine", 1`

###### Delete

`DELETE FROM WHERE id=?, 1`

###### Get the Latest ID
`SELECT id FROM artists ORDER BY id DESC LIMIT 1`

## Ruby and SQL

Now, we will be executing SQL queries from inside our class and instance methods. Much easier than having to write SQL every time we have to interact with our databases! First, we must establish a connection to our database using the SQLite3 gem. Once we have our `SQLite3::Database` instance, we will use its `#execute` method to fire SQL commands as needed.
