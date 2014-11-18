class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :summary
end
