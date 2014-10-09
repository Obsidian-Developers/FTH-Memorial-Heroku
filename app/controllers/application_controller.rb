class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :extract_shopping_cart


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
  
end
