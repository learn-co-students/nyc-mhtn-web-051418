class EntriesController < ApplicationController
  before_action :set_entry, only: [:show, :edit, :update, :destroy]
  before_action :set_authors, only: [:new, :edit, :create, :update]
  before_action :authorize!, only: [:edit, :update, :destroy]
  skip_before_action :authenticate!, :only => [:index, :show]


  def index
    @entries = Entry.all
  end

  def show
  end

  def new
    @entry = Entry.new
  end

  def edit
      
  end

  def create
    @entry = Entry.new(entry_params)
    @entry.author_id = helpers.logged_in_user_id_integer
    if @entry.save
      redirect_to @entry, notice: 'Entry was successfully created.'
    else
      render :new
    end
  end

  def update
    if @entry.update(entry_params)
      redirect_to @entry, notice: 'Entry was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @entry.destroy
    redirect_to entries_url, notice: 'Entry was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_entry
      @entry = Entry.find(params[:id])
    end

    def set_authors
      @authors = User.all
    end

    def authorize!
      redirect_to new_session_url unless helpers.logged_in_as?(@entry.author_id)
    end

    # Never trust parameters from the scary internet, only allow the allow list through.
    def entry_params
      params.require(:entry).permit(:name, :body) #don't want to permit author id here — we'll set this to the logged in user
    end
end
