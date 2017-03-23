class CreateSavedPets < ActiveRecord::Migration[5.0]
  def change
    create_table :saved_pets do |t|
      t.string :animal_breed
      t.string :animal_name
      t.integer :animal_id
      t.string :city
      t.integer :zip

      t.timestamps
    end
  end
end
