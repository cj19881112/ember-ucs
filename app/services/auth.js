import Ember from 'ember';
import Cookies from 'ember-cli-js-cookie';

export default Ember.Service.extend({
    store: Ember.inject.service(),

    user: null,

    userName: '',

    isAuthed: function () {
        return !!this.get('userName');
    }.property('userName'),

    login(userName) {
        // return this.get('store').query('authUser', {
        //     userName,
        //     password
        // });
        var me = this;
        return new Ember.RSVP.Promise(function(resolve) {
            me.set('userName', userName);
            Cookies.set('userName', userName);
            resolve();
        });
    },

    logout() {
        var me = this;
        return new Ember.RSVP.Promise(function(resolve) {
            me.set('userName', '');
            Cookies.set('userName', '');
            resolve();
        });       
    },

    init() {
        this.set('userName', Cookies.get('userName'));
    }
});
