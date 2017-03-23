Rails.application.routes.draw do
	get '/saved_pets', to: 'saved_pets#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
