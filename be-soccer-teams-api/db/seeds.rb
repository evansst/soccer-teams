# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Player.destroy_all
Team.destroy_all

5.times do
  Team.create(
    name: Faker::Team.creature.capitalize
  )
end

Team.all.each do |team|
  Player.create(
    name: Faker::Name.unique.first_name,
    team: team,
    position: 'Goalkeeper',
    number: Faker::Number.between(from: 0, to: 1)
  )

  4.times do
    Player.create(
      name: Faker::Name.unique.first_name,
      team: team,
      position: 'Defense',
      number: Faker::Number.unique.between(from: 2, to: 5)
    )
  end

  4.times do
    Player.create(
      name: Faker::Name.unique.first_name,
      team: team,
      position: 'Midfield',
      number: Faker::Number.unique.between(from: 6, to: 10)
    )
  end

  2.times do
    Player.create(
      name: Faker::Name.unique.first_name,
      team: team,
      position: 'Forward',
      number: Faker::Number.unique.between(from: 11, to: 15)
    )
  end
  Faker::Number.unique.clear
end
