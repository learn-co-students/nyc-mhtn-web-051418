class CreateEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :entries do |t|
      t.string :name
      t.string :body
      t.references :author, index: true, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
