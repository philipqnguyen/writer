class Book < ActiveRecord::Base
  validates :title, presence: true
  validates :author, presence: true

  has_many :chapters
end
