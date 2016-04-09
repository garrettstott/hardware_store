class CreateShifts < ActiveRecord::Migration
  def change
    create_table :shifts do |t|
      t.date :day
      t.time :start
      t.time :end
      t.belongs_to :employee, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
