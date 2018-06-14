# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


10.times do
   Playlist.create(name: Faker::Hipster.word + " " + Faker::Music.instrument)
end

10.times do
  Artist.create(name: Faker::Kpop.girl_groups)
end

all_artist_ids = Artist.pluck(:id)
10.times do
  artist_id = all_artist_ids.sample
  Album.create(name: Faker::HitchhikersGuideToTheGalaxy.starship, artist_id: artist_id)
end

all_album_ids = Album.pluck(:id)
100.times do
  album_id = all_album_ids.sample
  Song.create(name: Faker::BossaNova.song, album_id: album_id, duration: rand(100..500))
end

all_song_ids = Song.pluck(:id)
Playlist.pluck(:id).each do |playlist_id|
  10.times do |i|
    song_id = all_song_ids.sample
    Playlisting.create(playlist_id: playlist_id, song_id: song_id, sort_order: i)
  end
end

