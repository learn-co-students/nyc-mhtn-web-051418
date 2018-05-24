class User < ActiveRecord::Base
  has_many :pizzas
end
