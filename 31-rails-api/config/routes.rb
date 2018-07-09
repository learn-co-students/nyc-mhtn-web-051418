Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      get '/paninis', to: 'paninis#index'
      post '/paninis', to: 'paninis#create'
    end
    namespace :v2 do
      get '/paninis', to: 'paninis#index'
    end
  end
end
