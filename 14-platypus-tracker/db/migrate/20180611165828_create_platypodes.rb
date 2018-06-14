class CreatePlatypodes < ActiveRecord::Migration[5.2]
  def change
    create_table :platypodes do |t|
      t.string :name
      t.integer :age
      t.integer :number_of_eggs
      t.boolean :administrator, null: false
      t.timestamps
    end
  end
end
