class Movie

  attr_reader :name, :year

  ALL = []

  def initialize(name, year)
    @name = name
    @year = year

    ALL << self
  end

  def self.all
    ALL
  end

  def appearances
    Appearance.all.select do |appearance|
      appearance.movie == self
    end
  end

  def characters
    # RETURN ALL OF THIS MOVIE'S CHARACTERS
    appearances.map do |appearance|
      appearance.character
    end
  end


end
