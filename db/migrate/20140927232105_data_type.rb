class DataType < ActiveRecord::Migration
  def change
  	remove_column :shop_items, :price
  	add_column :shop_items, :price, :float
  end
end
