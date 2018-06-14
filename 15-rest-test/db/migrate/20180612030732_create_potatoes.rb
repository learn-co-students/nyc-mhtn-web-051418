class CreatePotatoes < ActiveRecord::Migration[5.2]
  def change
    create_table :potatoes do |t|
      t.string :name
      t.integer :eyes

      t.timestamps
    end
  end
end
