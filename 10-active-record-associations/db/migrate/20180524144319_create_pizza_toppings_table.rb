class CreatePizzaToppingsTable < ActiveRecord::Migration[5.1]
  def change
    create_table :pizza_toppings do |t|
      t.integer :pizza_id
      t.integer :topping_id
    end
  end
end
