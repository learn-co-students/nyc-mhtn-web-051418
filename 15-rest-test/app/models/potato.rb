class Potato < ApplicationRecord

  validates :name, presence: true
  validates :eyes, numericality: { even: true }

end
