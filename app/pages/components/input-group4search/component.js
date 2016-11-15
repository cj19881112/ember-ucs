import Ember from 'ember';

export default Ember.Component.extend({
    searchText: '',

    actions: {
        doSearch() {
            this.get('on-search')(this.get('searchText'));
        }
    }
});
