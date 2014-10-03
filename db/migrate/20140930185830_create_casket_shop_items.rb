class CreateCasketShopItems < ActiveRecord::Migration
  def change
    create_table :casket_shop_items do |t|
      t.string :casket_id
      t.string :name, default: 'Custom Casket'
      t.float :price

      t.timestamps
    end
  end
end
