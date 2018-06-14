class GeeseController < ApplicationController
  before_action :set_goose, only: [:show, :edit, :update, :destroy]

  # GET /geese
  # GET /geese.json
  def index
    @geese = Goose.all
  end

  # GET /geese/1
  # GET /geese/1.json
  def show
  end

  # GET /geese/new
  def new
    @goose = Goose.new
  end

  # GET /geese/1/edit
  def edit
  end

  # POST /geese
  # POST /geese.json
  def create
    @goose = Goose.new(goose_params)

    respond_to do |format|
      if @goose.save
        format.html { redirect_to @goose, notice: 'Goose was successfully created.' }
        format.json { render :show, status: :created, location: @goose }
      else
        format.html { render :new }
        format.json { render json: @goose.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /geese/1
  # PATCH/PUT /geese/1.json
  def update
    respond_to do |format|
      if @goose.update(goose_params)
        format.html { redirect_to @goose, notice: 'Goose was successfully updated.' }
        format.json { render :show, status: :ok, location: @goose }
      else
        format.html { render :edit }
        format.json { render json: @goose.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /geese/1
  # DELETE /geese/1.json
  def destroy
    @goose.destroy
    respond_to do |format|
      format.html { redirect_to geese_url, notice: 'Goose was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_goose
      @goose = Goose.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def goose_params
      params.require(:goose).permit(:name, :people_chased_today)
    end
end
