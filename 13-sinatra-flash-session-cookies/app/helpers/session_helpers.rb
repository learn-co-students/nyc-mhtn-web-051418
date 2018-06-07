
module SessionHelpers

  def favorite_book!(book_id)
    session[:books] ||= { }
    session[:books][book_id] = true
  end

  def book_is_favorite(book_id)
    session[:books] && session[:books][book_id.to_s]
  end

end