require 'pry'
require_relative 'character.rb'
require_relative 'movie.rb'

vision = Character.new("vision", "vision")
tony = Character.new("Tony Stark", "Iron Man")
petey = Character.new("Peter Parker", "Spider-Man")
tchalla = Character.new("T'Challa", "Black Panther")
natasha = Character.new("Natasha Romanov", "Black Widow")
steve = Character.new("Steve Rogers", "Captain America")
thanos = Character.new("Thanos", "The Mad Titan")
bruce = Character.new("Bruce Banner", "Hulk")

avengers_2 = Movie.new("Avengers: Age of Ultron", 2015)
im1 = Movie.new("Iron Man", 2008)
spiderman = Movie.new("Spider-Man: Homecoming", 2017)
thor = Movie.new("Thor: Ragnarok", 2017)
black_panther = Movie.new("Black Panther", 2018)
infinity_war = Movie.new("Avengers: Infinity War", 2018)
im2 = Movie.new("Iron Man 2", 2010)


vision.appear_in_movie(avengers_2)
vision.appear_in_movie(infinity_war)

tony.appear_in_movie(avengers_2)
tony.appear_in_movie(im1)
tony.appear_in_movie(im2)
tony.appear_in_movie(infinity_war)
tony.appear_in_movie(spiderman)

petey.appear_in_movie(spiderman)
petey.appear_in_movie(infinity_war)

natasha.appear_in_movie(im2)
natasha.appear_in_movie(infinity_war)
natasha.appear_in_movie(avengers_2)

tchalla.appear_in_movie(black_panther)
tchalla.appear_in_movie(infinity_war)

steve.appear_in_movie(avengers_2)
steve.appear_in_movie(spiderman)
steve.appear_in_movie(infinity_war)

thanos.appear_in_movie(avengers_2)
thanos.appear_in_movie(infinity_war)

bruce.appear_in_movie(thor)
bruce.appear_in_movie(avengers_2)
bruce.appear_in_movie(infinity_war)




Pry.start
