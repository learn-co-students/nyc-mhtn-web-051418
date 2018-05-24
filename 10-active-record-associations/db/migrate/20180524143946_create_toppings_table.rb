class CreateToppingsTable < ActiveRecord::Migration[5.1]
  def change
    create_table :toppings do |t|
      t.string :name
    end
  end
end
