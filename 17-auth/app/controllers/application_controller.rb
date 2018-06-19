class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :authenticate!

  helper SessionHelper

  private
  def authenticate!
    redirect_to new_session_url unless helpers.logged_in?
  end

end
