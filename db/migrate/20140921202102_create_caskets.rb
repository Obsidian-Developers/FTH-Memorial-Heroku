class CreateCaskets < ActiveRecord::Migration
  def change
    create_table :caskets do |t|
      t.string :template
      t.string :text1

      t.timestamps
    end
    add_attachment :caskets, :image1
    add_attachment :caskets, :image2
    add_attachment :caskets, :image3
    add_attachment :caskets, :image4
    add_attachment :caskets, :image5
  end
end
