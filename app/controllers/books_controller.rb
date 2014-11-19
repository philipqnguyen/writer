class BooksController < ApplicationController
  def index
    books = Book.order(created_at: :desc).all
    render json: books, status: 200
  end

  def create
    book = Book.new(book_params)

    if book.save
      render json: book, status: 201, location: book_path(book)
    else
      render json: book.errors, status: 422
    end
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :summary)
  end
end
