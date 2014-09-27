class Casket < ActiveRecord::Base
  has_attached_file :image1
  validates_attachment_content_type :image1, :content_type => /\Aimage\/.*\Z/
  has_attached_file :image2
  validates_attachment_content_type :image2, :content_type => /\Aimage\/.*\Z/
  has_attached_file :image3
  validates_attachment_content_type :image3, :content_type => /\Aimage\/.*\Z/
  has_attached_file :image4
  validates_attachment_content_type :image4, :content_type => /\Aimage\/.*\Z/
  has_attached_file :image5
  validates_attachment_content_type :image5, :content_type => /\Aimage\/.*\Z/
end
# == Schema Information
#
# Table name: caskets
#
#  id                  :integer         not null, primary key
#  template            :string(255)
#  text1               :string(255)
#  created_at          :datetime
#  updated_at          :datetime
#  image1_file_name    :string(255)
#  image1_content_type :string(255)
#  image1_file_size    :integer
#  image1_updated_at   :datetime
#  image2_file_name    :string(255)
#  image2_content_type :string(255)
#  image2_file_size    :integer
#  image2_updated_at   :datetime
#  image3_file_name    :string(255)
#  image3_content_type :string(255)
#  image3_file_size    :integer
#  image3_updated_at   :datetime
#  image4_file_name    :string(255)
#  image4_content_type :string(255)
#  image4_file_size    :integer
#  image4_updated_at   :datetime
#  image5_file_name    :string(255)
#  image5_content_type :string(255)
#  image5_file_size    :integer
#  image5_updated_at   :datetime
#

