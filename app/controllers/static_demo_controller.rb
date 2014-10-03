class StaticDemoController < ApplicationController
  def home
  end

  def store
  	@products = ShopItem.all
  end

  def orders
  	@orders = ShopOrder.all
  end
end
