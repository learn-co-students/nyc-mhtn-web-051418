require 'pry'


class Animal
  attr_accessor :species, :type, :size, :age, :environment, :cuteness, :num_legs

  ALL = []

  def initialize(species, type, size, age, environment, cuteness, num_legs)
    @species = species
    @type = type
    @size = size
    @age = age
    @environment = environment
    @cuteness = cuteness
    @num_legs = num_legs

    ALL << self
  end

  def self.all
    ALL
  end

  def speak
    "Hello"
  end

  def walk
    "Walkin' on #{@num_legs} legs!!!!"
  end
end

class Mammal < Animal
  def initialize(species, size, age, environment, cuteness, num_legs)
    super(species, "mammal", size, age, environment, cuteness, num_legs)
  end

  def give_birth
    "I DID NOT LAY AN EGG BECAUSE I AM A MAMMAL"
  end
end

# Dog inherits from Animal
# Dog extends Animal
# Dog is a child class of Animal
# Animal is a parent class of Dog
# Dog is a subclass of Animal
# Animal is a superclass of Dog
class Dog < Mammal
  def initialize(size, age, cuteness)
    super("dog", size, age, "field", cuteness, 4)
  end

  def speak
    super + " WOOF!!!!!"
  end
end

class Cat < Mammal
  def initialize(size, age, cuteness)
    super("cat", size, age, "bedroom", cuteness, 4)
  end

  def speak
    super + " MEOW"
  end
end

class Human < Mammal
  def initialize(age)
    super("human", "medium", age, "earth", 1, 2)
  end
end

class Snake < Animal
  def initialize
    super("snake", "reptile", "small", "ageless", "field", 0, 0)
  end

  def speak
    "SSSssasSssSssSssSsSsSssSS"
  end

  def walk
    "slitherrr"
  end
end


# Animal
  # Mammal
    # Dog
    # Cat
    # Human

german_shepard = Dog.new("large", 3, 1000000)
puff = Cat.new("small", 2, 4)
rishi = Human.new(45)
sally = Snake.new


Pry.start
