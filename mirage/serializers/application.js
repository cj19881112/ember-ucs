import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
    serialize() {
        let json = JSONAPISerializer.prototype.serialize.apply(this, arguments);
        json.meta = {
            total : arguments[0].total
        };
        return json;
    }
});
