# Intro to SQL

## CRUD
- create
- read
- update
- delete


1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Our relationships

artist has_many albums
album belongs_to artist

playlist has_many playlist_tracks
playlist_track belongs_to playlist

track has_many playlist_tracks
playlist_track belongs_to track

playlist has_many tracks, through playlist_tracks
track has_many playlists, through playlist_tracks

album has_many tracks
track belongs_to album

mediatype has_many tracks
track belongs_to mediatype

## Challenges

1. Write the SQL to return all of the rows in the artists table?

  ```SQL
    SELECT * FROM 'artists';
  ```

2. Write the SQL to select the artist with the name "Black Sabbath"

  ```SQL
    SELECT * FROM 'artists' WHERE name = "Black Sabbath";
  ```
  You can say name, not necessarily artists.name

3. Write the SQL to create a table named 'fans' with an auto-incrementing ID that's a primary key and a name field of type text

  ```sql
    CREATE TABLE fans (id INTEGER PRIMARY KEY, name TEXT);
  ```

4. Write the SQL to alter the fans table to have a artist_id column type integer?

  ```sql
    ALTER TABLE fans ADD artist_id INTEGER;
  ```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**

  ```sql
    INSERT INTO fans (name, artist_id) VALUES ("Rishi", 169);
  ```

  OR

  ```sql
    INSERT INTO fans (name, artist_id) VALUES ("Brooke",
      (SELECT (artistId) FROM artists WHERE artists.name = "Black Eyed Peas")
    );
  ```

6. Check out the [Faker gem](https://github.com/stympy/faker). `gem install faker`, open up irb, run `require 'faker'` and then generate a fake name for yourself using `Faker::Name.name`. How would you update your name in the fans table to be your new name?

   ```sql
   ```

7. Write the SQL to return fans that are not fans of the black eyed peas.

  ```sql
    SELECT * FROM fans WHERE artist_id != '169';
  ```

8. Write the SQL to display a fan next to their artist's name

  ```sql
    SELECT fans.name, artists.Name FROM fans INNER JOIN artists ON fans.artist_id = artists.ArtistId;
  ```

9. Write the SQL to display artist name, album name and number of tracks on that album

  ```sql

  ```

10. Write the SQL to return the name of all of the artists in the 'Pop' Genre

  ```sql

  ```

## BONUS (very hard)

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

  ```sql

  ```
