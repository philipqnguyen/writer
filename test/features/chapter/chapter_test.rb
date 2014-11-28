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
end
