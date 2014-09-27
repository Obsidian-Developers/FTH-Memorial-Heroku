class ShopItem < ActiveRecord::Base
	has_attached_file :photo, styles: {main: "500x300#"}
    validates_attachment_content_type :photo, :content_type => /\Aimage\/.*\Z/

end
# == Schema Information
#
# Table name: shop_items
#
#  id                 :integer         not null, primary key
#  name               :string(255)
#  price              :string(255)
#  category           :string(255)
#  details            :string(255)
#  created_at         :datetime
#  updated_at         :datetime
#  photo_file_name    :string(255)
#  photo_content_type :string(255)
#  photo_file_size    :integer
#  photo_updated_at   :datetime
#

