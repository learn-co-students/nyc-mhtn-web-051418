class PotatoesController < ApplicationController
  before_action :set_potato, only: [:show, :edit, :update, :destroy]

  # GET /potatoes
  # GET /potatoes.json
  def index
    @potatoes = Potato.all
  end

  # GET /potatoes/1
  # GET /potatoes/1.json
  def show
  end

  # GET /potatoes/new
  def new
    @potato = Potato.new
  end

  # GET /potatoes/1/edit
  def edit
  end

  # POST /potatoes
  # POST /potatoes.json
  def create
    @potato = Potato.new(potato_params)

    respond_to do |format|
      if @potato.save
        format.html { redirect_to @potato, notice: 'Potato was successfully created.' }
        format.json { render :show, status: :created, location: @potato }
      else
        format.html { render :new }
        format.json { render json: @potato.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /potatoes/1
  # PATCH/PUT /potatoes/1.json
  def update
    respond_to do |format|
      if @potato.update(potato_params)
        format.html { redirect_to @potato, notice: 'Potato was successfully updated.' }
        format.json { render :show, status: :ok, location: @potato }
      else
        format.html { render :edit }
        format.json { render json: @potato.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /potatoes/1
  # DELETE /potatoes/1.json
  def destroy
    @potato.destroy
    respond_to do |format|
      format.html { redirect_to potatoes_url, notice: 'Potato was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_potato
      @potato = Potato.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def potato_params
      params.require(:potato).permit(:name, :eyes)
    end
end
