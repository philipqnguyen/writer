require 'test_helper'

class BookAPI < ActionDispatch::IntegrationTest
  describe 'As an API consumer, I want to retrieve all books' do
    it 'Should retrieve an index of all books' do
      get '/books'

      answer = JSON.parse(response.body, symbolize_names: true)[:books]

      response.status.must_equal 200
      response.content_type.must_equal Mime::JSON
      answer.size.must_equal Book.count
      answer[0][:title].must_equal 'Sun Rise'
      answer[0][:author].must_equal 'Susie Q'
      answer[0][:summary].must_equal 'The story of a sun rising'
      answer[1][:title].must_equal 'Wombat Returns'
      answer[1][:author].must_equal 'Joe Evermore'
      answer[1][:summary].must_equal 'Wombat returns to Goatham City'
    end
  end

  describe 'As an API consumer, I want to create a book' do
    it 'Should create a new book' do
      post '/books', {
        title: 'Superboy',
        author: 'Rick Johnson',
        summary: 'Klark Kentucky and Luisa Lane falls in love on a school trip'
      }.to_json,
      {
        'Accept' => 'application/json',
        'Content-Type' => 'application/json'
      }

      answer = JSON.parse(response.body, symbolize_names: true)[:book]

      response.status.must_equal 201
      response.content_type.must_equal Mime::JSON
      response.location.must_equal book_path Book.last
      answer[:title].must_equal 'Superboy'
      answer[:author].must_equal 'Rick Johnson'
      answer[:summary].must_equal 'Klark Kentucky and Luisa Lane falls in love on a school trip'
    end
  end

  describe 'As an API consumer, I want an error if creating an invalid book' do
    it 'should response with a 422 status' do
      post '/books', {
        title: 'Badboy Badboy',
        summary: 'Watcha gonna do? Watcha gonna do when we come for you?'
      }.to_json,
      {
        'Accept' => 'application/json',
        'Content-Type' => 'application/json'
      }

      response.status.must_equal 422
    end
  end
end
