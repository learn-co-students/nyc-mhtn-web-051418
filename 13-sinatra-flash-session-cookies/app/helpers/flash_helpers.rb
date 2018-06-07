
module FlashHelpers

  def set_favorited(title)
    flash[:favorited] = title
  end

  def get_favorited
    flash[:favorited]
  end

end