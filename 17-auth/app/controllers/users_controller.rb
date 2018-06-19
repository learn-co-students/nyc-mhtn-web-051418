class UsersController < ApplicationController
  skip_before_action :authenticate!, :only => [:new, :create]

  before_action :set_user, only: [:show, :edit, :update]
  before_action :authorize!, only: [:edit, :update]

  def index
    @users = User.all
  end

  def show
  end

  def new
    @user = User.new
  end

  def edit
    
  end

  def create
    @user = User.new(user_params)
    if @user.save
      helpers.log_in_user!(@user.id)
      redirect_to @user, notice: 'User was successfully created.'
    else
      render :new
    end
  end

  def update
    if @user.update(user_params)
      redirect_to @user, notice: 'User was successfully updated.'
    else
      render :edit
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    def authorize!
      redirect_to new_session_url unless helpers.logged_in_as?(@user.id)
    end

    # Never trust parameters from the scary internet, only allow the allow list through.
    def user_params
      params.require(:user).permit(:name, :username, :email, :password)
    end
end
