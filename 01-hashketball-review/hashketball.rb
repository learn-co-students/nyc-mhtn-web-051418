require 'pry'

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        }, {
          player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        }, {
          player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        }, {
          player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        }, {
          player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        }, {
          player_name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        }, {
          player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        }, {
          player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        }, {
          player_name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end


def num_points_scored(player_name)
  player = find_player(player_name)
  # return that player's points
  player[:points]
end

def num_rebounds(player_name)
  player = find_player(player_name)
  player[:rebounds]
end

def get_all_players
  game_hash[:home][:players] + game_hash[:away][:players]
end

def find_player(player_name)
  # get a list of all the players
  players = get_all_players
  # find the player whose name matches the argument 'player_name'

  # FIND is all about finding the first ever occurence inside an array
  # that matches a particular condition, specified by the block inside find

  # FIND returns the value of the entire element that occupies that space
  # in the array

  # a condition is a body of code (method, variable, line of code) that
  # evaluates to true or false

  players.find do |player|
    player[:player_name] == player_name
  end
end



# EXERCISE:
# Define a method called get_names that takes an array of instructors
# and returns just their names.
instructors = [
  {name: 'Rishi', hometown: 'North Brunswick, NJ', age: 14},
  {name: 'Matt', hometown: 'Los Angeles, CA', age: 37},
  {name: 'Brooke', hometown: 'Manhattan, NY', age: 64}
]

def get_names(instructors)
  # return an array of strings, representing the names
  #
  # names = []
  # instructors.each do |instructor|
  #   names << instructor[:name]
  # end
  #
  # names

  # MAP/COLLECT is called on an array, and returns the same number
  # of elements. however, each is transformed in some way, based
  # on the block passed into the map

  # MAP returns the same number of elements, because all of them
  # are represented in the final returned array

  instructors.map do |instructor| #map and collect are the same
    instructor[:name]
  end

end

def make_all_names_capitalized(instructors)
  names = get_names(instructors)
  names.map do |name|
    name.upcase
  end
end

# SELECT is called on an array, and returns the elements in the exact
# shape of the original array, but the number is reduced to match
# a particular condition

def who_can_drink_legally(instructors)
  instructors.select do |instructor|
    instructor[:age] >= 21
  end
end


# # EXERCISE
# # What do the following return?
#
arr = (1..100).to_a

arr.map do |num|
  num.even?
end

arr.select do |num|
  7
end


binding.pry
true
