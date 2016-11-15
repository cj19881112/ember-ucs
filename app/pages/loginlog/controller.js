import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['page', 'limit', 'searchKey'],
    page: 1,
    limit: 15,
    limitList: [15, 20, 30],
    searchKey: '',

    total: Ember.computed('model.meta', function() {
        return this.get('model.meta').total;
    }),

    actions: {
         doSearch(searchText) {
            this.set('searchKey', searchText);
            this.set('page', 1);
        },

        gotoPage(page) {
            this.set('page', page);
        },

        setLimit(limit) {
            this.set('limit', limit);
        }
    }
});
