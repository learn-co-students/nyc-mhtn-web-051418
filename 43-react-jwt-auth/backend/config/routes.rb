Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:index, :show, :create]
  # get '/users/', to: 'users#index'
  # get '/users/:id/', to: 'users#show'
  # post '/users/', to: 'users#create'

  resources :sessions, only: [:create] # login here
  # post '/sessions/', to: 'sessions#create'

  resources :snacks, only: [:index]
  # get '/snacks/', to: 'snacks#index'

  get '/users/:user_id/snacks', to: 'users#users_snacks'

  # foodini routes as Rails app (probably)
  # API using JWT
  # /user/:id/show <==== auth
  # /user/create => registration
  # /login
  # /logout

  resources :recipes, only: [:index, :create]
  # /recipe/index
  # /recipe/new
  # /recipe/edit

  get '/users/:user_id/recipes', to: 'users#users_recipes'

  # /like
  # /dislike
end
