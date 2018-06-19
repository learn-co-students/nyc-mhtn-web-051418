class WelcomeController < ApplicationController

  def index
    redirect_to entries_path
  end
end