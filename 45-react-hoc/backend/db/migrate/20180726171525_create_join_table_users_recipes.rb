class CreateJoinTableUsersRecipes < ActiveRecord::Migration[5.1]
  def change
    create_join_table :users, :recipes do |t|
      t.index [:user_id, :recipe_id]
      t.index [:recipe_id, :user_id]
    end
  end
end
