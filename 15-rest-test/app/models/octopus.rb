class Octopus < ApplicationRecord

  validates :name, presence: true
  validates :legs, numericality: { less_than_or_equal_to: 8 }

end
