class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets do |t|
      t.string :subject
      t.string :body
      t.references :creator
      t.references :owner
      t.string :status

      t.timestamps
    end
    add_foreign_key :tickets, :users, column: :owner_id, primary_key: :id
    add_foreign_key :tickets, :users, column: :creator_id, primary_key: :id
  end
end
