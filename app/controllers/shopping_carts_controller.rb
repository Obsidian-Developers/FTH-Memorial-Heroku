class ShoppingCartsController < ApplicationController
  before_filter :extract_shopping_cart

  def create
    @product = ShopItem.find(params[:product_id])
    @shopping_cart.add(@product, @product.price)
    puts "Post Method Executed Successfully"
    redirect_to shopping_cart_path
  end

  def show
  	@items = @shopping_cart.shopping_cart_items

  end

  def clear
    @shopping_cart.clear
    redirect_to shopping_cart_path
  end

  def remove
    @item = params[:item_id]
    puts "#{@item} will be removed"
    @shopping_cart.remove(@item)
    redirect_to shopping_cart_path
  end

  private
  def extract_shopping_cart
    shopping_cart_id = session[:shopping_cart_id]
    @shopping_cart = session[:shopping_cart_id] ? ShoppingCart.find(shopping_cart_id) : ShoppingCart.create
    session[:shopping_cart_id] = @shopping_cart.id
  end
end