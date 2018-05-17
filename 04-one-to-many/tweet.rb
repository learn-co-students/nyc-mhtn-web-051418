class Tweet

  attr_reader :message, :timestamp, :user

  ALL = []

  def initialize(message, user, timestamp=0)
    @message = message
    @user = user
    @timestamp = timestamp

    ALL << self
  end

  def self.all
    ALL
  end
end
