class ShoppingCartsController < ApplicationController

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
    @cents = @shopping_cart.total * 100
  end

  def finalize
    puts "Begin finalization"   
  #Query Order from params
    @order = ShopOrder.find(params[:order])
  #Query Attached Cart to set price
    cart = ShoppingCart.find(session[:shopping_cart_id])
  #Generate integer value for Stripe price
    cents_float = cart.total * 100
    cents_int = cents_float.to_i
  #Query Stripe servers to complete transaction
    customer = Stripe::Customer.create(
      :email => params[:stripeEmail],
      :card  => params[:stripeToken]
    )

    charge = Stripe::Charge.create(
      :customer    => customer.id,
      :amount      => cents_int,
      :description => "FTH Order #{@order.id}",
      :currency    => 'usd'
    )
  #Update with form info
    @order.email = params[:stripeEmail]
    @order.paid = true
    @order.price = cart.total
    @order.save
    cart.ordered = true
    cart.save
    puts "Order #{@order.id} finalized!"
    redirect_to root_path
    

  end

  private

  def final_params
      params.require(:shop_order).permit!
  end



end