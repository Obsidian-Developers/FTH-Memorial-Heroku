class StaticDemoController < ApplicationController
  def home
  end

  def store
  	@products = ShopItem.all
  end
end
