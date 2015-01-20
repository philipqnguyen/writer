describe('BooksCtrl: Index', function () {
  beforeEach(module('Writer'));

  var ctrl, mockBackend, books;

  beforeEach(inject(function($controller, $httpBackend, Books) {
    mockBackend = $httpBackend;
    mockBackend.expectGET('/books')
      .respond({books: [{id: 1, title: 'hi', author: 'hibob', summary: 'hi mr bob'}]});
    ctrl = $controller('BooksCtrl');
    books = Books
  }));

  afterEach(function () {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });

  it('should return books when calling index()', function () {
    expect(books.get()).toEqual([]);

    ctrl.index();

    mockBackend.flush();

    expect(books.get()).toEqual([{id: 1, title: 'hi', author: 'hibob', summary: 'hi mr bob'}]);
  });
});

describe('BooksCtrl: Create', function () {
  beforeEach(module('Writer'));

  var ctrl, mockBackend, books;

  beforeEach(inject(function($controller, $httpBackend, Books) {
    mockBackend = $httpBackend;
    mockBackend.expectPOST('/books')
      .respond({book: {id: 2, title: 'Testable', author: 'Test', summary: 'TestSummary'}});
    ctrl = $controller('BooksCtrl');
    books = Books
  }));

  afterEach(function () {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });

  it('should POST and create a book', function () {
    expect(books.get()).toEqual([]);

    ctrl.create({title: 'Testable', author: 'Test', summary: 'TestSummary'});

    mockBackend.flush();

    expect(books.get()[0]).toEqual({id: 2, title: 'Testable', author: 'Test', summary: 'TestSummary'});
  });
});

describe('BooksCtrl: Show', function () {
  beforeEach(module('Writer'));

  var ctrl, mockBackend, books, book, routeParams;

  beforeEach(inject(function($controller, $httpBackend, Books, $routeParams, Book) {
    routeParams = $routeParams;
    routeParams.bookId = 1;
    mockBackend = $httpBackend;
    mockBackend.expectGET('/books/' + routeParams.bookId)
      .respond({book: {id: 1, title: 'hi', author: 'hibob', summary: 'hi mr bob'}});
    ctrl = $controller('BooksCtrl');
    books = Books;
    book = Book;
  }));

  afterEach(function () {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });

  it('should show a book', function () {
    ctrl.show();

    mockBackend.flush();

    expect(book.getCurrentBook()).toEqual({id: 1, title: 'hi', author: 'hibob', summary: 'hi mr bob'});
  });
});

describe('BooksCtrl: Update', function () {
  beforeEach(module('Writer'));

  var ctrl, mockBackend, books, book, location;

  beforeEach(inject(function($controller, $httpBackend, Books, Book, $location) {
    books = Books;
    book = Book;
    book.setCurrentBook({id: 1, title: 'hi', author: 'hibob', summary: 'hi mr bob'});
    mockBackend = $httpBackend;
    mockBackend.expectPATCH('/books/' + book.getCurrentBookId())
      .respond({book: {id: 1, title: 'hi', author: 'bob', summary: 'hi mr bob'}});
    ctrl = $controller('BooksCtrl');
    location = $location;
  }));

  afterEach(function () {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });

  it('should update a book', function () {
    ctrl.update({id: 1, title: 'hi', author: 'bob', summary: 'hi mr bob'});

    mockBackend.flush();

    expect(ctrl.errors.length).toEqual(0);
  });
});

describe('BooksCtrl: Delete', function () {
  beforeEach(module('Writer'));

  var ctrl, mockBackend, books, book;

  beforeEach(inject(function($controller, $httpBackend, Books, Book) {
    books = Books;
    book = Book;
    book.setCurrentBook({id: 1, title: 'hi', author: 'bob', summary: 'hi mr bob'});
    mockBackend = $httpBackend;
    mockBackend.expectDELETE('/books/' + book.getCurrentBookId())
      .respond({message: 'Success'});
    ctrl = $controller('BooksCtrl');
  }));

  afterEach(function () {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });

  it('should Delete a book', function () {
    ctrl.delete();

    mockBackend.flush();

    expect(ctrl.errors.length).toEqual(0);
  });
});
