# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# snack_names = []
#
# 500.times do
#   snack_names << Faker::Food.dish
#   snack_names << Faker::Food.ingredient
#   snack_names << Faker::Dessert.variety
#   snack_names << Faker::Dessert.topping
# end
#
# snack_names.uniq.shuffle.each do |snack_name|
#   snack = Snack.create(name: snack_name)
# end
#
# 100.times do
#   user = User.create(username: Faker::Internet.user_name, password_digest: BCrypt::Password.create(Faker::Internet.password))
# end

def seed_recipe(puppy_api, ingredients, query, page)
  params = {'i': ingredients, 'q' => query, 'p' => page}
  response = RestClient.get puppy_api, { params: params }
  results = JSON.parse(response)['results']

  results.each do |r|
    recipe = Recipe.create(title: r['title'], href: r['href'], thumbnail: r['thumbnail'], ingredients: r['ingredients'])
    ingredients = r['ingredients'].split(", ")
    ingredients.each do |i|
      ingredient = Ingredient.create(name: i)
    end
  end
end

puppy_api = 'http://www.recipepuppy.com/api/'
seed_recipe(puppy_api, 'onions,garlic', 'omelet', 1)
seed_recipe(puppy_api, 'chocolate', 'dessert', 1)
seed_recipe(puppy_api, 'beef', 'beef', 1)
