class FieldsForCaskets < ActiveRecord::Migration
  def change
  	change_table :caskets do |t|
  		t.string :header1
  		t.string :date1
  		t.string :date2
  		t.string :date3
  		t.string :date4
  		t.string :date5
  		t.string :locale_1
  		t.string :locale_2
  		t.string :locale_3
  		t.string :locale_4
  		t.string :locale_5
  	end
  end
end
