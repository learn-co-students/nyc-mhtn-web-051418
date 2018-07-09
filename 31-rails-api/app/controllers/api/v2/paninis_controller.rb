class Api::V2::PaninisController < ApplicationController
    def index
        render json: {
            new_api: {message:"Buoon appetito"}
        }
    end
end