class StaticDemoController < ApplicationController
  def home
  end

  def store
  	@products = ShopItem.where(:category => params[:category])
  	if params[:category].nil?
  		@products = ShopItem.where(:featured => true)
  	end
  end

  def orders
  	@orders = ShopOrder.where(:paid => true)
  end

  def casket_holder
  end
end
