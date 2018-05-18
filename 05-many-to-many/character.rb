require_relative 'appearance.rb'

class Character

  attr_accessor :name, :super_name

  ALL = []

  def initialize(name, super_name)
    @name = name
    @super_name = super_name

    ALL << self
  end

  def self.all
    ALL
  end

  def appear_in_movie(movie)
    Appearance.new(self, movie)
  end

  def appearances
    Appearance.all.select do |appearance|
      appearance.character == self
    end
  end

  def movies
    appearances.map do |appearance|
      appearance.movie
    end
  end

end
