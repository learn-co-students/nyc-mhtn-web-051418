class Playlist < ApplicationRecord

  has_many :playlistings
  has_many :songs, through: :playlistings

  accepts_nested_attributes_for(:playlistings, reject_if: Proc.new { |attributes| 
    attributes['song_id'].blank? 
  })

  def sorted_playlistings

    self.playlistings.sort do |a, b|
      if a.sort_order.nil?
        1
      elsif b.sort_order.nil?
        -1
      else
       a.sort_order <=> b.sort_order
      end
    end

  end

end
