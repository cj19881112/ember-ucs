import Ember from 'ember';

export default Ember.Controller.extend({
    auth: Ember.inject.service(),

    actions: {
        login() {
            var me = this;
            me.set('authrizing', true);

            this.get('auth').login(this.get('userName'), this.get('password')).then(function() {
                me.transitionToRoute('/');
                me.set('authrizing', false);
            }, function () {

                me.set('errorMessage', '用户名或密码错误');
                me.set('authrizing', false);
            });
        }
    }
});
