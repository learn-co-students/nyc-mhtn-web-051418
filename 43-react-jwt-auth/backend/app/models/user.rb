class User < ApplicationRecord

  after_save :ensure_snacks!
  after_save :ensure_recipes!

  has_many :users_snacks
  has_many :snacks, through: :users_snacks

  has_many :users_recipes
  has_many :recipes, through: :users_recipes

  # SALT IS RANDOM
  # bcrypt(SALT => very random string + password) => SALT.password_digest
  # sdfjkasjfkldsaf+password => asdfkjasdfjsdkjfksadjlf
  # login => username, password
  # get(username) => SALT.password_digest => bcrypt(SALT + password) === password_digest
  has_secure_password
  # If you only stored bcrypt(password) => as;dfjkl;sadjflk;sadjf
  # SELECT password from rainbowTable where hash = "as;dfjkl;sadjflk;sadjf"
  # password    | sadfka;sdfjlkasdjf
  # 123         | sadfgkjhdfjghfdjkg
  # password123 | asdfkljasdk;fjsadk
  # GIANT TABLE => Rainbow Table => 1 million most common passwords
  # Uniqueness => SALT + 1 million most common passwords

  validates :username, presence: true, uniqueness: true
  validates :password, presence: true

  def ensure_snacks!
    snackify! unless snacks.length > 0
  end

  def snackify!
    number_of_snacks = rand(5..20)
    Snack.all.sample(number_of_snacks).each do |snack|
      self.snacks << snack
    end
  end

  def ensure_recipes!
    recify! unless recipes.length > 0
  end

  def recify!
    number_of_recipes = rand(5..20)
    Recipe.all.sample(number_of_recipes).each do |recipe|
      self.recipes << recipe
    end
  end

  # def create_token
  #   jwt
  # end

end
