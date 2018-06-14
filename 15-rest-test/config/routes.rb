Rails.application.routes.draw do

  get "/", to: "index#index" 
  
  resources :geese
  resources :potatoes
  resources :octopuses
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
