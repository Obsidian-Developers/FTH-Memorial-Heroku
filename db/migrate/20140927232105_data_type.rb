class DataType < ActiveRecord::Migration
  def change
  	change_column :shop_items, :price, :float
  end
end
