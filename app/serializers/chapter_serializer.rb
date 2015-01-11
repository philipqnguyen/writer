class ChapterSerializer < ActiveModel::Serializer
  attributes :id, :book_id, :name, :content
end
