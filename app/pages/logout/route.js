import Ember from 'ember';
import AuthorizedRoute from '../../mixins/authoried-route';

export default Ember.Route.extend(AuthorizedRoute, {
    auth: Ember.inject.service(),

    beforeModel() {
        var me = this;
        this.get('auth').logout().then(function() {
            me.transitionTo('/');
        });
    }
});
