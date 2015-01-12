class BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]

  def index
    books = Book.order(created_at: :desc).all
    render json: books, status: 200
  end

  def show
    if @book
      render json: @book, status: 200, location: book_path(@book)
    else
      render json: @book.errors, status: 400
    end
  end

  def create
    book = Book.new(book_params)

    if book.save
      render json: book, status: 201, location: book_path(book)
    else
      render json: book.errors, status: 422
    end
  end

  def update
    if @book.update_attributes(book_params)
      render json: @book, status: 200, location: book_path(@book)
    else
      render json: @book.errors, status: 422
    end
  end

  def destroy
    @book.destroy
    render json: {message: 'Success'}
  end

  private

  def set_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :author, :summary)
  end
end
