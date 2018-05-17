require 'pry'
require_relative 'tweet'
require_relative 'user'


david = User.new("david", "New York, NY")
rich = User.new("rich", "Staten Island, NY")
max = User.new("max", "Brooklyn, NY")
rishi = User.new("rishi", "North Brunswick, NJ")

david.post_tweet("good morning")
david.post_tweet("how are you?")

rich.post_tweet("never used twitter before")
rich.post_tweet("i like slack better")

max.post_tweet("yanny or laurel")
max.post_tweet("oh yeahhhhhhhhhhhh.")

rishi.post_tweet("@rich me too", 3)
rishi.post_tweet("it's definitly yanny", 89)

Pry.start
