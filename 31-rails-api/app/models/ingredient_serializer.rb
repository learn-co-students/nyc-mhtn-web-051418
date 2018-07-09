class IngredientSerializer < ActiveModel::Serializer
    belongs_to :sandwich
    attributes :name, :id
end