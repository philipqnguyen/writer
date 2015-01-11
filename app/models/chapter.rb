class Chapter < ActiveRecord::Base
  validates :name, presence: true
  validates :content, presence: true
  validates :book_id, presence: true

  belongs_to :book
end
