ActiveAdmin.register ShopItem do

  form do |f|
    f.inputs "Details" do
      f.input :name
      f.input :price, :label => "Price (format of $10.00)"
      f.input :details
      f.input :category, :collection => ["Lorem", "Ipsum", "Dolor"]
      f.input :photo, as: :file
    end
    f.actions
  end
  

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
   permit_params :name, :price, :category, :details, :photo
  #
  # or
  #
  # permit_params do
  #   permitted = [:permitted, :attributes]
  #   permitted << :other if resource.something?
  #   permitted
  # end


end
