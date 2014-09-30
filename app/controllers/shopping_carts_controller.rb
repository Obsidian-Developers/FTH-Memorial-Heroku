class ShoppingCartsController < ApplicationController
  before_filter :extract_shopping_cart

  def create
    @product = ShopItem.find(params[:product_id])
    @shopping_cart.add(@product, @product.price)
    puts "Post Method Executed Successfully"
    redirect_to shopping_cart_path
  end

  # def add_casket
  #   @product = Casket.find(params[:product_id])
  #   @shopping_cart.add(@product, @product.price)
  #   puts "Post Method Executed Successfully"
  #   redirect_to shopping_cart_path
  # end


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

  def checkout
    puts "Will proceed to checkout"
  #Clean DB of irrelevant orders
    prev_orders = ShopOrder.where(:shopping_cart_id => session[:shopping_cart_id], :paid => nil )
    prev_orders.delete_all
  #Create new Order
    @order = ShopOrder.new
  #Assign cart to Order
    @order.shopping_cart_id = session[:shopping_cart_id]
    @order.save
  #Prepare view
    @shopping_cart = ShoppingCart.find(session[:shopping_cart_id])
    @items = @shopping_cart.shopping_cart_items
  end

  def finalize
    puts "Begin finalization"   
  #Query Order from params
    @order = ShopOrder.find(params[:order])
  #Update with form info
    @order.update(final_params)
    @order.paid = true
  #Query Attached Cart to set price
    cart = ShoppingCart.find(session[:shopping_cart_id])
    @order.price = cart.total
    @order.save
    cart.ordered = true
    cart.save
    puts "Order #{@order.id} finalized!"
    

  end


private
  def extract_shopping_cart
    shopping_cart_id = session[:shopping_cart_id]
    @shopping_cart = session[:shopping_cart_id] ? ShoppingCart.find(shopping_cart_id) : ShoppingCart.create
  #Create new cart post-order 
    if @shopping_cart.ordered?
      @shopping_cart = ShoppingCart.create
    end
    session[:shopping_cart_id] = @shopping_cart.id
  end
  def final_params
      params.require(:shop_order).permit!
  end
end