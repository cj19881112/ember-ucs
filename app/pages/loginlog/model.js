import DS from 'ember-data';

export default DS.Model.extend({
    userName: DS.attr(),
    systemName: DS.attr(),
    time: DS.attr(),
    result: DS.attr()
});