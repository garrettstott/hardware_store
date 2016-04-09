Rails.application.routes.draw do
    devise_for :users, controllers: {
        sessions: 'users/sessions'
      }
    end
    
  root 'home#index'
end