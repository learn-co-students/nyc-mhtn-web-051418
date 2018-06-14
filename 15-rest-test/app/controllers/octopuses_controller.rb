class OctopusesController < ApplicationController
  before_action :set_octopus, only: [:show, :edit, :update, :destroy]

  # GET /octopuses
  # GET /octopuses.json
  def index
    @octopuses = Octopus.all
  end

  # GET /octopuses/1
  # GET /octopuses/1.json
  def show
  end

  # GET /octopuses/new
  def new
    @octopus = Octopus.new
  end

  # GET /octopuses/1/edit
  def edit
  end

  # POST /octopuses
  # POST /octopuses.json
  def create
    @octopus = Octopus.new(octopus_params)

    respond_to do |format|
      if @octopus.save
        format.html { redirect_to @octopus, notice: 'Octopus was successfully created.' }
        format.json { render :show, status: :created, location: @octopus }
      else
        format.html { render :new }
        format.json { render json: @octopus.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /octopuses/1
  # PATCH/PUT /octopuses/1.json
  def update
    respond_to do |format|
      if @octopus.update(octopus_params)
        format.html { redirect_to @octopus, notice: 'Octopus was successfully updated.' }
        format.json { render :show, status: :ok, location: @octopus }
      else
        format.html { render :edit }
        format.json { render json: @octopus.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /octopuses/1
  # DELETE /octopuses/1.json
  def destroy
    @octopus.destroy
    respond_to do |format|
      format.html { redirect_to octopuses_url, notice: 'Octopus was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_octopus
      @octopus = Octopus.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def octopus_params
      params.require(:octopus).permit(:name, :legs)
    end
end
