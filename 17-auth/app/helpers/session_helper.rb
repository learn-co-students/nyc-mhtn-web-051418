module SessionHelper

  def log_in_user!(user_id)
    session[:user_id] = user_id
  end

  def log_out_user!
    session.delete(:user_id)
  end

  def logged_in_user_id_string
    session[:user_id]
  end

  def logged_in?
    logged_in_user_id_string.present?
  end

  def logged_in_user_id_integer
    logged_in_user_id_string.to_i
  end

  def logged_in_as?(author_id)
    author_id == logged_in_user_id_integer
  end

  def logged_in_user
    User.find_by(id: logged_in_user_id_integer)
  end


end
