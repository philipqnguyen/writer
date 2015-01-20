describe('BooksService', function () {
  beforeEach(module('Writer'));

  var books;

  beforeEach(inject(function(Books) {
    books = Books;
  }));

  it('should set a book and get it', function () {
    books.set({id: 1, title: 'hi', author: 'bob', summary: 'hi mr bob'});

    expect(books.get()).toEqual({id: 1, title: 'hi', author: 'bob', summary: 'hi mr bob'});
  });

  it('should add a book at get it', function () {
    books.add({id: 1, title: 'hi', author: 'bob', summary: 'hi mr bob'});
    books.add({id: 2, title: 'Rainbow', author: 'Michael', summary: 'Over the rainbow we go...'});

    expect(books.get()).toEqual([{id: 2, title: 'Rainbow', author: 'Michael', summary: 'Over the rainbow we go...'}, {id: 1, title: 'hi', author: 'bob', summary: 'hi mr bob'}]);
  });
});

describe('BookService', function () {
  beforeEach(module('Writer'));

  var book;

  beforeEach(inject(function(Book) {
    book = Book
    book.setCurrentBook({id: 1, title: 'hi', author: 'bob', summary: 'hi mr bob'})
  }));

  it('should get current book', function () {
    expect(book.getCurrentBook()).toEqual({id: 1, title: 'hi', author: 'bob', summary: 'hi mr bob'});
  });

  it('should get current book id', function () {
    expect(book.getCurrentBookId()).toEqual(1);
  });
});
