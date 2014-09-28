class AddOrdered < ActiveRecord::Migration
  def change
  	add_column :shopping_carts, :ordered, :boolean, :default => false
  end
end
