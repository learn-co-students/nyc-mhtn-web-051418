class Platypus < ApplicationRecord


  validates :number_of_eggs, presence: true
  validate :number_of_eggs_is_odd


  def number_of_eggs_is_odd
    if self.number_of_eggs % 2 != 1
      errors.add(:number_of_eggs, "Number of eggs needs to be odd")
    end
  end
end
