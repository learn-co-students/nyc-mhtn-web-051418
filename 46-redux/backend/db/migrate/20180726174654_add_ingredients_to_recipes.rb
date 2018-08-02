class AddIngredientsToRecipes < ActiveRecord::Migration[5.1]
  def change
    add_column :recipes, :ingredients, :string
  end
end
