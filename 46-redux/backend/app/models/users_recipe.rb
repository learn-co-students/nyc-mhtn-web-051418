class UsersRecipe < ApplicationRecord
  self.table_name = "recipes_users"

  belongs_to :recipe
  belongs_to :user
end
