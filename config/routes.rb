Rails.application.routes.draw do
    
  root 'home#index'

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }

  resources :schedules
  resources :products, except: :show

  get '/products/product_search', to: 'products#product_search'

  get '/get_schedules', to: 'schedules#get_schedules'

end