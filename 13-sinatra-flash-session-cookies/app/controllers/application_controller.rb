require_all 'app/helpers'

class ApplicationController < Sinatra::Base

  configure do
    # set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true

    enable :sessions
    set :session_secret, 'GtW%3LgD6ow$#Zgjwh%TRvf*7x9tuewbRi0RyY6T@ZXb0uUsGAEkVBMxy2qqN9Rjq0WvyX0OmdtkW&3EuFS!@9ZEtDzAxq@ihDHh'

    helpers Sinatra::Cookies # this is the sinatra cookies module
    register Sinatra::Flash # this registers an extension for sinatra-flash
    
    helpers CookieHelpers, SessionHelpers, FlashHelpers # these are my helpers
    
    # NOTE: This is how Sinatra recommends generating secret (http://sinatrarb.com/intro.html)
    # $ gem install sysrandom
    # Building native extensions.  This could take a while...
    # Successfully installed sysrandom-1.x
    # 1 gem installed
    #
    # $ ruby -e "require 'sysrandom/securerandom'; puts SecureRandom.hex(64)"
    # 99ae8af...snip...ec0f262ac

  end




end
