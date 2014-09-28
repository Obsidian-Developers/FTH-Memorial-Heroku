class ShopOrder < ActiveRecord::Base
end
# == Schema Information
#
# Table name: shop_orders
#
#  id               :integer         not null, primary key
#  name             :string(255)
#  email            :string(255)
#  shopping_cart_id :integer
#  paid             :boolean
#  price            :float
#  created_at       :datetime
#  updated_at       :datetime
#

