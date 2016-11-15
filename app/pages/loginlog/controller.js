import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['page', 'limit', 'searchKey'],
    page: 1,
    limit: 10,
    searchKey: '',

    total: Ember.computed('model.meta', function() {
        return this.get('model.meta').total;
    }),

    actions: {
         doSearch(searchText) {
            this.set('page', 1);
            this.set('searchKey', searchText);
        }
    }
});
