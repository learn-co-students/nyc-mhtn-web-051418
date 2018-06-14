class PlatypodesController < ApplicationController

  def index
    @platypodes = Platypus.all
  end

  def create
    @platypus = Platypus.new
  end

  def show
    @platypus = Platypus.find(params[:id])
  end


  def edit
    @platypus = Platypus.find(params[:id])
  end

  def update
    @platypus = Platypus.find(params[:id])
    if @platypus.update(platypus_params)
      redirect_to platypus_path
    else
      flash[:errors] = @platypus.errors.full_messages
      render :edit
    end
  end

  def platypus_params
    params.require(:platypus).permit([:number_of_eggs, :age])
  end

end
