import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    userName: faker.name.findName,
    systemName: faker.internet.domainName,
    time: faker.date.recent,
    result: faker.random.boolean
});
