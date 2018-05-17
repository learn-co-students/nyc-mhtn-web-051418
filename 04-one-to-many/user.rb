class User
  attr_accessor :username, :location

  ALL = []
  # @@all is a class variable, you can reassign the value
  # ALL is a class constant, you can mutate or shovel or delete
  # the variable, but you cannot call ALL = [] or anything else

  def initialize(username, location)
    @username = username
    @location = location

    ALL << self
  end

  def self.all
    ALL
  end

  def post_tweet(message, timestamp=0)
    Tweet.new(message, self, timestamp)
    # @tweets << Tweet.new(message)
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end



end

Pry.start
