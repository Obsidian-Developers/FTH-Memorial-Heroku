class AddFeatured < ActiveRecord::Migration
  def change
  	add_column :shop_items, :featured, :boolean
  end
end
