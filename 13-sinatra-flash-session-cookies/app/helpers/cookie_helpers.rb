
module CookieHelpers

  def set_welcomed
    cookies[:potatopancakes] = true
  end 


  def welcomed?
    !!cookies[:potatopancakes]
  end

end