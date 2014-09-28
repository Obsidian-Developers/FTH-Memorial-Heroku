class ShoppingCart < ActiveRecord::Base
	acts_as_shopping_cart
	def tax_pct
      8.25 #Percent to delegate to taxes. 8.25 = 8.25% etc...
    end
end
# == Schema Information
#
# Table name: shopping_carts
#
#  id         :integer         not null, primary key
#  created_at :datetime
#  updated_at :datetime
#  ordered    :boolean         default(FALSE)
#

