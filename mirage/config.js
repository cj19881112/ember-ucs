export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  this.get('/loginlogs', function(db, req) {
    var page = parseInt(req.queryParams.page);
    var limit = parseInt(req.queryParams.limit);
    var searchKey = req.queryParams.searchKey;
    var start = (page-1) * limit;
    var end = start + limit;
    let logs = db.loginlogs.all().filter(function(m) {
      if (!searchKey) {
        return true;
      }
      if (-1 !== m.systemName.indexOf(searchKey)) {
        return true;   
      }
    });
    
    var total = logs.models.length;
    logs = logs.filter(function(m, idx){
      if (idx > start && idx <= end) {
        return true;
      }
    });

    logs.total = total;

    return logs;
  });
}
