# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


pets = [
	{animal_breed: "Doberman", animal_name: "Matt", animal_id: "A528175", city: "Kenmore", zip: 98267},
	{animal_breed: "Husky", animal_name: "Lester", animal_id: "A529173", city: "Seattle", zip: 98126},
	{animal_breed: "Mut", animal_name: "Spike", animal_id: "A527549", city: "Shoreline", zip: 98542},
	{animal_breed: "Golden Retreiver", animal_name: "Table", animal_id: "A579201", city: "Mukilteo", zip: 97642},
	{animal_breed: "Laberdoodle", animal_name: "Frank", animal_id: "A521382", city: "Pandora", zip: 98125},
	{animal_breed: "Fox", animal_name: "Stu", animal_id: "A524098", city: "Bellevue", zip: 98652},
	{animal_breed: "Beagle", animal_name: "Spot", animal_id: "A526732", city: "LFP", zip: 98611},
]


SavedPet.create(pets)