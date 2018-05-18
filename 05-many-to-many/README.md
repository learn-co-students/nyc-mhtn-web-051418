# Many to Many Relationships

Based off of yesterday's code, we're going to add the ability to like a tweet. We describe this specific relationship between users and tweets as a many to many relationship. Meaning that a user can like many tweets and a tweet can be liked by many users!

> **Note:** This is a separate relationship from the one to many that we built before. That relationship could be called "posted tweets" whereas this relationship should be called "liked tweets".

## The world so far

* Create a User class. The class should have these methods:
  * `#initialize` which takes a username and have
  * a reader method for the username
  * `#tweets` that returns an array of Tweet instances
  * `#post_tweet` that takse a message, creates a new tweet, and adds it to the user's tweet collection
* Create a Tweet class. The class should have these methods:
  * `Tweet#message` that returns a string
  * `Tweet#user` that returns an instance of the user class
  * `Tweet.all` that returns all the Tweets created.
  * `Tweet#username` that returns the username of the tweet's user

## Objectives

## Deliverables

* User class
  * `#like_tweet` that accepts as a tweet instance as a parameter
  * `#liked_tweets` that returns a collection of all the tweets this user has liked
* Tweet class
  * `#likers` that returns a collection of all the Users who have liked this tweet
