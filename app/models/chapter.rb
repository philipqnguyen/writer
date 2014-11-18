class Chapter < ActiveRecord::Base
  validates :name, presence: true

  belongs_to :book
end
