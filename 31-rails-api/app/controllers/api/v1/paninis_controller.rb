class Api::V1::PaninisController < ApplicationController
    def index
        sandwichs = Sandwich.all
        render json: sandwichs
    end

    def create
        byebug
    end
end