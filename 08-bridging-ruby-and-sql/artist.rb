require 'sqlite3'
require 'pry'

DB = { :conn => SQLite3::Database.new('./artists.db') }
DB[:conn].results_as_hash = true


class Artist
  attr_accessor :id, :name

  def initialize(id=nil, name)
    @id = id
    @name = name
  end

  def save
    sql = <<-SQL
      INSERT INTO artists (name) VALUES (?);
    SQL

    DB[:conn].execute(sql, @name)
    @id = Artist.max_id
    Artist.find(@id)
  end

  def self.create(name)
    a = Artist.new(name)
    a.save
  end

  def self.find(id)
    sql = <<-SQL
      SELECT * FROM artists WHERE id=?
    SQL

    parse_artist_hash(DB[:conn].execute(sql, id)[0])
  end

  def self.all
    sql = <<-SQL
      SELECT * FROM artists
    SQL

    artist_hashes = DB[:conn].execute(sql)
    artist_hashes.map do |artist_hash|
      parse_artist_hash(artist_hash)
    end
  end

  def update(name)
    sql = <<-SQL
      UPDATE artists SET name=? WHERE id=?;
    SQL

    DB[:conn].execute(sql, name, @id)
    Artist.find(@id)
  end

  # also called destroy
  def self.delete(id)
    Artist.find(id).delete
  end

  def delete
    sql = <<-SQL
      DELETE FROM artists WHERE id=?;
    SQL

    DB[:conn].execute(sql, @id)

    !Artist.find(@id)
  end

  private

  def self.parse_artist_hash(artist_hash)
    if !artist_hash
      return nil
    end
    Artist.new(artist_hash["id"], artist_hash["name"])
  end

  def self.max_id
    sql = <<-SQL
      SELECT MAX (id) FROM artists;
    SQL

    DB[:conn].execute(sql)[0][0]
  end
end

Pry.start
