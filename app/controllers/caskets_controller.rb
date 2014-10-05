class CasketsController < ApplicationController
  before_action :set_casket, only: [:show, :edit, :update, :destroy]  
  # GET /caskets
  # GET /caskets.json
  def index
    @caskets = Casket.all
  end

  # GET /caskets/1
  # GET /caskets/1.json
  def show
  end

  # GET /caskets/new
  def new
    @casket = Casket.new
  end

  

  # POST /caskets
  # POST /caskets.json
  def create
    @casket = Casket.new(casket_params)


    # respond_to do |format|
      if @casket.save
        @item = CasketShopItem.create(:casket_id => @casket.id)
        @shopping_cart.add(@item, @item.price)
        puts "Post Method Executed Successfully"
        redirect_to shopping_cart_path
        # format.html { redirect_to @casket, notice: 'Casket was successfully created.' }
        # format.json { render :show, status: :created, location: @casket }
      else
        # format.html { render :new }
        # format.json { render json: @casket.errors, status: :unprocessable_entity }
      # end
     end
  end


  # DELETE /caskets/1
  # DELETE /caskets/1.json
  def destroy
    @casket.destroy
    respond_to do |format|
      format.html { redirect_to caskets_url, notice: 'Casket was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_casket
      @casket = Casket.find(params[:id])
    end

    

    # Never trust parameters from the scary internet, only allow the white list through.
    def casket_params
      params.require(:casket).permit(:template, :text1, :image1, :image2, :image3, :image4, :image5)
    end
end
