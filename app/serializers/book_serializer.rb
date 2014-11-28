class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :summary
  has_many :chapters

  def chapters
    object.chapters.order(created_at: :asc).all
  end
end
