describe('Search Controller and Search Service', function () {
  beforeEach(module('Writer'));

  var ctrl, search;

  beforeEach(inject(function($controller, Search) {
    ctrl = $controller('SearchCtrl');
    search = Search
  }));

  it('should set the query in SearchService', function () {
    search.set('hello');

    expect(search.get()).toEqual('hello');
  })

  it('should get the query in SearchService after being Search', function () {
    ctrl.search('monkey');

    expect(search.get()).toEqual('monkey');
  });
});
