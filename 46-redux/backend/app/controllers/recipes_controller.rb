class RecipesController < ApplicationController
  before_action :authenticate, only: [:create, :update]

  def index
    render json: Recipe.all
  end

  def create
    @recipe = Recipe.create(title: params[:title], href: params[:href], thumbnail: params[:thumbnail], ingredients: params[:ingredients])

    render json: {
      recipe: @recipe
    }
  end

  # Untested
  def update
    @recipe = Recipe.find_by(id: params[:id])

    @recipe.title = params[:title]
    @recipe.href = params[:href]
    @recipe.thumbnail = params[:thumbnail]
    @recipe.ingredients = params[:ingredients]

    if (@recipe.save)
      render json: {
        recipe: @recipe
      }
    else
      render json: {
        errors: @recipe.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

end
