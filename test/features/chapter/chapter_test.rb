class ChapterAPI < ActionDispatch::IntegrationTest
  describe 'As an API consumer, I want to view chapters for a book' do
    it 'should retrieve an index of all chapters for a book' do
      get "/books/#{books(:sun_rise).id}"

      answer = JSON.parse(response.body, symbolize_names: true)[:book][:chapters]

      response.status.must_equal 200
      response.content_type.must_equal Mime::JSON
      answer.size.must_equal books(:sun_rise).chapters.count
      answer[0][:name].must_equal chapters(:the_rise).name
      answer[1][:name].must_equal chapters(:the_set).name
    end
  end

  describe 'As an API consumer, I want to create a chapter for a book' do
    it 'should create the chapter and belongs to a book' do
      post "/chapters/", {
        name: 'Chapter 1',
        content: 'She walked into the garden and saw a frog.',
        book_id: books(:sun_rise).id
      }.to_json,
      {
        'Accept' => 'application/json',
        'Content-Type' => 'application/json'
      }

      answer = JSON.parse(response.body, symbolize_names: true)[:chapter]

      response.status.must_equal 201
      response.content_type.must_equal Mime::JSON
      response.location.must_equal chapter_path Chapter.last
      answer[:name].must_equal 'Chapter 1'
      answer[:content].must_equal 'She walked into the garden and saw a frog.'
      answer[:book_id].must_equal books(:sun_rise).id
      books(:sun_rise).chapters.last.name.must_equal 'Chapter 1'
    end
  end
end
