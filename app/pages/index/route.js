import Ember from 'ember';
import AuthorizedRoute from '../../mixins/authoried-route';

export default Ember.Route.extend(AuthorizedRoute, {
    beforeModel() {
        this.transitionTo('dashboard');
        this._super(...arguments);
    }
});
