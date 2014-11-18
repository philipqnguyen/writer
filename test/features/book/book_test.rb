require 'test_helper'

class BookAPI < ActionDispatch::IntegrationTest
  describe 'As an API consumer, I want to create a book' do
    it 'Should create a new book' do
      get '/books'

      answer = JSON.parse(response.body, symbolize_names: true)[:books]

      response.status.must_equal 200
      response.content_type.must_equal Mime::JSON
      answer.size.must_equal Book.count
      answer[0][:title].must_equal 'Wombat Returns'
      answer[0][:author].must_equal 'Joe Evermore'
      answer[0][:summary].must_equal 'Wombat returns to Goatham City'
      answer[1][:title].must_equal 'Sun Rise'
      answer[1][:author].must_equal 'Susie Q'
      answer[1][:summary].must_equal 'The story of a sun rising'
    end
  end
end
