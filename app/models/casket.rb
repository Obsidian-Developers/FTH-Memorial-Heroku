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
