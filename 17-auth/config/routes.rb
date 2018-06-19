Rails.application.routes.draw do
  get "/", to: "welcome#index"
  resources :entries
  resources :users, except: [:destroy]
  resources :sessions, only: [:new, :create]
  delete "/sessions", to: "sessions#destroy", as: "destroy_session"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
