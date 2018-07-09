class SandwichSerializer < ActiveModel::Serializer
  has_many :ingredients
  attributes :name
end