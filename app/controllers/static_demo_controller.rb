class StaticDemoController < ApplicationController
  def home
  end

  def store
  	@products = ShopItem.where(:category => params[:category])
  end

  def orders
  	@orders = ShopOrder.all
  end
end
