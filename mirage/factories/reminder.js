import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title: () => faker.company.bs().capitalize(),
  date: () => faker.date.recent(3),
  notes: () => faker.hacker.phrase(),
  pinned: false
});
