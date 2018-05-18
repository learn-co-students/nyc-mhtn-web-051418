class Appearance

  attr_accessor :character, :movie

  ALL = []

  def initialize(character, movie)
    @character = character
    @movie = movie

    ALL << self
  end

  def self.all
    ALL
  end
end
