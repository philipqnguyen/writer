describe('Home page', function() {

  it('should have a list of books', function() {
    browser.get('/');

    expect(browser.getTitle()).toEqual('Writer');
  });
});
