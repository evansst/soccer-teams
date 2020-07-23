Rails.application.routes.draw do
  resources :players, only: %i[index show create]
  resources :teams, only: %i[index show create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
