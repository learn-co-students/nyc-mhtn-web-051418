class Playlisting < ApplicationRecord

  belongs_to :song
  belongs_to :playlist

  validates_uniqueness_of :song_id, scope: :playlist_id
  validates_uniqueness_of :sort_order, scope: :playlist_id

end
