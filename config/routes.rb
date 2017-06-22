Rails.application.routes.draw do
  namespace :api do
    resources :todos, except: [:new, :edit]

    match '*path', to: 'error#handle_404', via: [:get, :post]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
