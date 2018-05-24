class CreatePizzasTable < ActiveRecord::Migration[5.1]
  def change
    create_table :pizzas do |t|
      t.string :name
      t.integer :price
      t.integer :user_id
    end
  end
end
