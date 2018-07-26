class ApplicationController < ActionController::API

  def secret_key
    # "password"
    # byebug
    ENV['SECRET_KEY']
  end

  def payload
    {
      sub: @user.id,
      iat: Time.now.to_i,
      exp: Time.now.to_i + 7200000
    }
  end

  def gen_token
    JWT.encode payload(), secret_key(), "HS256"
  end

  def get_token
    request.headers['Authorization']
  end

  def decoded_token
    begin
      JWT.decode get_token(), secret_key(), true
    rescue JWT::DecodeError => e
      nil
    end
  end

  def authenticate
    # this works
  #   if (!!decoded_token)
  #     render json: json
  #   else
  #     render json: {
  #       message: 'Authorization failed.'
  #     }, status: :unauthorized
  #   end
  # end
    if !decoded_token
      render json: {
        message: 'Authorization failed.'
      }, status: :unauthorized
    end
  end

  def requires_user
    @user = User.find_by(id: params[:id])
    if decoded_token()[0]['sub'] != @user.id
      render json: {
        message: 'Authorization failed.'
      }, status: :unauthorized
    end
  end

end
