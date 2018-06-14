class CreatePlaylistings < ActiveRecord::Migration[5.2]
  def change
    create_table :playlistings do |t|
      t.references :song
      t.references :playlist
      t.integer :sort_order

      t.timestamps
    end
  end
end
