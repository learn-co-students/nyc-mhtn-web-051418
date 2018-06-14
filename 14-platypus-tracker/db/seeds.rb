# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Platypus.create(name: "neville", age: 2, number_of_eggs: 7, administrator: false)
Platypus.create(name: "percival", age: 5, number_of_eggs: 3, administrator: false)
Platypus.create(name: "nigel", age: 3, number_of_eggs: 19, administrator: false)
Platypus.create(name: "baratunde", age: 1, number_of_eggs: 56597, administrator: true)