import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['lb-table-pager'],

    page: 1,

    atFirstPage: Ember.computed('page', function(){
        return this.get('page') === 1;
    }),
    atLastPage: Ember.computed('page', 'totalPage', function() {
        return this.get('page') === this.get('totalPage');
    }),

    currentPage: Ember.computed.oneWay('page'),

    totalPage: Ember.computed('total', 'limit', function() {
        return Math.floor(this.get('total') / this.get('limit'));
    }),

    actions: {
        pageSizeChange(val) {
            this.set('page', 1);
            this.set('limit', val);
        },

        gotoPage(val) {
            var totalPage= this.get('totalPage');
            if (val > totalPage) {
                val = totalPage;
            }
            if (val < 1) {
                val = 1;
            }
            this.set('page', val);
            this.get('page-change')(val);
        },

        firstPage() {
            this.set('page', 1);
            this.get('page-change')(1);
        },

        lastPage() {
            this.set('page', this.get('totalPage'));
            this.get('page-change')(this.get('totalPage'));
        },

        nextPage() {
            let next = this.get('page') + 1;
            let totalPage = this.get('totalPage');
            if (next > totalPage) {
                next = totalPage;
            }
            this.set('page', next);
            this.get('page-change')(next);
        },

        prevPage() {
            let prev = this.get('page') - 1;
            if (prev < 1) {
                prev = 1;
            }
            this.set('page', prev);
            this.get('page-change')(prev);
        }
    }
});
