class AlbumsController < ApplicationController
  before_action :set_album, only: [:show, :edit, :update]

  # GET /albums
  def index
    @albums = Album.all
  end

  # GET /albums/1
  def show
  end

  # GET /albums/new
  def new
    @all_artists = Artist.all
    @album = Album.new
  end

  # GET /albums/1/edit
  def edit
    @all_artists = Artist.all
  end

  # POST /albums
  def create
    @album = Album.new(album_params)
    if @album.save
      redirect_to @album, notice: 'Album was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /albums/1
  def update
    if @album.update(album_params)
      redirect_to @album, notice: 'Album was successfully updated.'
    else
      render :edit
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_album
      @album = Album.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def album_params
      params.require(:album).permit(:name, :artist_id)
    end
end
