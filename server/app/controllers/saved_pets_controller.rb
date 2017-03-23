class SavedPetsController < ApplicationController
	def index
		@savedpets = SavedPet.all
		render json: @savedpets
	end
end
