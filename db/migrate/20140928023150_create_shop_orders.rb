class CreateShopOrders < ActiveRecord::Migration
  def change
    create_table :shop_orders do |t|
      t.string :name
      t.string :email
      t.integer :shopping_cart_id
      t.boolean :paid
      t.float :price

      t.timestamps
    end
  end
end
