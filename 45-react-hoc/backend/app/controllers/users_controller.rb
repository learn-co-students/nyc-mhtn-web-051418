class UsersController < ApplicationController
  before_action :authenticate, only: [:show, :index, :users_recipes]
  # before_action :requires_admin, only: []
  # before_action :requires_mod, only: []
  before_action :requires_user, only: [:show]

  # body => more exposed
  # header => Because that's what everyone does
    # When use JWT ==> ALWAYS ALWAYS ALWAYS use HTTPS / SSL
    # JWT, Token, OAuth Code, Authorization
  # url BAD PLACE
  def index
    render json: User.all
  end

  def show
    # byebug

    # This is only authentication
    # abstract this too
    # token = request.headers['Authorization']

    # this decoding part
    # begin
    #   decoded_token = JWT.decode token, secret_key(), true
    # rescue JWT::DecodeError => e
    #   decoded_token = nil
    # end

    # abstract this if/else logic
    # if (!!decoded_token)
    #   render json: @user
    # else
    #   render json: {
    #     message: 'Authorization failed.'
    #   }, status: :unauthorized
    # end

    # if (!decoded_token)
    #   render json: {
    #     message: 'Authorization failed.'
    #   }, status: :unauthorized
    # end

    # authenticate()

    @user = User.find_by(id: params[:id])

    # decoded_token()[0]['sub'] == @user.id

    render json: @user
  end

  def create
    @user = User.new

    @user.username = params[:username]
    @user.password = params[:password]

    if (@user.save)
      # create a token here
      # @user.create_token
      # payload = {
      #   sub: @user.id,
      #   iat: Time.now.to_i,
      #   exp: Time.now.to_i + 7200000
      # }

      # secret_key = "password"

      # token = JWT.encode payload(), secret_key(), "HS256"

      render json: {
        username: @user.username,
        id: @user.id,
        token: gen_token()
      }
    else
      render json: {
        errors: @user.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

  def current_user
    @user = User.find_by(id: get_token_payload('sub'))

    if (!!@user)
      render json: @user
    else
      render json: {
        message: 'Invalid token.'
      }, status: :unauthorized
    end
  end

  def users_recipes
    @user = User.find_by(id: params[:user_id])

    render json: @user.recipes
  end

  def users_snacks
    @user = User.find_by(id: params[:user_id])

    render json: @user.snacks
  end

end
