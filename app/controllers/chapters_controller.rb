class ChaptersController < ApplicationController

  def create
    chapter = Chapter.new(chapter_params)

    if chapter.save
      render json: chapter, status: 201, location: chapter_path(chapter)
    else
      render json: chapter.errors, status: 422
    end
  end

  private

  def chapter_params
    params.require(:chapter).permit(:name, :book_id, :content)
  end
end
