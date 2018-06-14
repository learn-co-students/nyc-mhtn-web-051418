class Goose < ApplicationRecord

  validates :name, presence: true
  validates :people_chased_today, numericality: { greater_than: 30 }

end
