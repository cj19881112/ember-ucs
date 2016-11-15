import Ember from 'ember';
import AuthorizedRoute from '../../mixins/authoried-route';

export default Ember.Route.extend(AuthorizedRoute, {
    queryParams: {
        page: {
            refreshModel: true
        },
        limit: {
            refreshModel: true
        },
        searchKey: {
            refreshModel: true
        }
    },

    model(params) {
        return this.get('store').query('loginlog', params);
    }
});
