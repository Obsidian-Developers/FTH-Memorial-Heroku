class CreateShopItems < ActiveRecord::Migration
  def change
    create_table :shop_items do |t|
      t.string :name
      t.string :price
      t.string :category
      t.string :details

      t.timestamps
    end
    add_attachment :shop_items, :photo
  end
end
