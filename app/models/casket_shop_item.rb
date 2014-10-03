class CasketShopItem < ActiveRecord::Base
	after_initialize :set_price

    def set_price
      self.price  ||= 100.0           #will set the default value only if it's nil
    end
end
# == Schema Information
#
# Table name: casket_shop_items
#
#  id         :integer         not null, primary key
#  casket_id  :string(255)
#  name       :string(255)     default("Custom Casket")
#  price      :string(255)
#  created_at :datetime
#  updated_at :datetime
#

