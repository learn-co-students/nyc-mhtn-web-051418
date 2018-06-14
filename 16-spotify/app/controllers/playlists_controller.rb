class PlaylistsController < ApplicationController
  before_action :set_playlist, only: [:show, :edit, :update]
  before_action :set_songs, only: [:new, :edit, :create, :update]

  # GET /playlist
  def index
    @playlists = Playlist.all
  end

  # GET /playlist/1
  def show
  end

  # GET /playlist/new
  def new
    @playlist = Playlist.new
    5.times { @playlist.playlistings.build }
  end

  # GET /playlist/1/edit
  def edit
    5.times { @playlist.playlistings.build }
  end

  # POST /playlists
  def create
    @playlist = Playlist.new(playlist_params)

    if @playlist.save
      redirect_to @playlist, notice: 'Playlist was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /playlists/1
  def update
    if @playlist.update(playlist_params)
      redirect_to @playlist, notice: 'Playlist was successfully updated.'
    else
      render :edit
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_playlist
      @playlist = Playlist.find(params[:id])
    end

    def set_songs
      @all_songs = Song.all
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def playlist_params
      params.require(:playlist).permit(:name, playlistings_attributes: [ :id, :song_id, :sort_order ])
    end
end
