class Pizza < ActiveRecord::Base
  belongs_to :user

  has_many :pizza_toppings
  has_many :toppings, through: :pizza_toppings
end
