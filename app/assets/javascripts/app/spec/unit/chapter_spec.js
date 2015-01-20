describe('ChaptersCtrl: Create', function () {
  beforeEach(module('Writer'));

  var ctrl, mockBackend, book;

  beforeEach(inject(function($controller, $httpBackend, Book) {
    mockBackend = $httpBackend;
    mockBackend.expectPOST('/chapters')
      .respond({chapter: {book_id: 1, name: 'Chapter1', content: 'Test'}});
    ctrl = $controller('ChaptersCtrl');
    book = Book
    book.setCurrentBook({id: 1, title: 'hi', author: 'hibob', summary: 'hi mr bob'})
  }));

  afterEach(function () {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });

  it('should POST and create a Chapter', function () {

    ctrl.create({book_id: 1, name: 'Chapter1', content: 'Test'});

    mockBackend.flush();

    expect(ctrl.errors.length).toEqual(0);
  });
});
