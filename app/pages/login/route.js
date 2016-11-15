import Ember from 'ember';

export default Ember.Route.extend({
    userName: 'hexijie',
    password: '',
    errorMessage: '',
    authrizing: false,

    auth: Ember.inject.service(),
    isAuthed: Ember.computed.alias('auth.isAuthed'),

    beforeModel() {
        if (this.get('isAuthed')) {
            this.replaceWith('/');
        }
    }
});
