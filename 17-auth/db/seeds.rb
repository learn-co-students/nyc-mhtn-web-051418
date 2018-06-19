# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


10.times do
  @name = Faker::Name.name
  @user = User.create({
    name: @name,
    username: Faker::Internet.user_name(@name, %w(. _ -)),
    email: Faker::Internet.free_email(@name),
    password_digest: BCrypt::Password.create(Faker::Internet.password)
  })

  5.times do
    Entry.create(author_id: @user.id)
  end

end