class CreateOctopuses < ActiveRecord::Migration[5.2]
  def change
    create_table :octopuses do |t|
      t.string :name
      t.integer :legs

      t.timestamps
    end
  end
end
