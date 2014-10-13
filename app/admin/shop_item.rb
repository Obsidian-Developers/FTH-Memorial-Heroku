ActiveAdmin.register ShopItem do

  form do |f|
    f.inputs "Details" do
      f.input :name
      f.input :price, :label => "Price (format of $10.00)"
      f.input :details
      f.input :category, :collection => ["flowers","gift_baskets","picture_frames","jewelry","sympathy_flowers","cametery_flowers","memorial_gifts"] 
      f.input :photo, as: :file
      f.input :featured
    end
    f.actions
  end
  

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
   permit_params :name, :price, :category, :details, :photo, :featured
  #
  # or
  #
  # permit_params do
  #   permitted = [:permitted, :attributes]
  #   permitted << :other if resource.something?
  #   permitted
  # end


end
