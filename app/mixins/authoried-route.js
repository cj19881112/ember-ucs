import Ember from 'ember';

export default Ember.Mixin.create({
    auth: Ember.inject.service(),
    isAuthed: Ember.computed.alias('auth.isAuthed'),

    beforeModel() {
        if (!this.get('isAuthed')) {
            this.transitionTo('login');
        } else {
            this._super(...arguments);
        }
    }
});
