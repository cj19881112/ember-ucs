import Ember from 'ember';

export function indexOfTableItem([pageSize, currentPage, offset]) {
  return pageSize * (currentPage-1) + offset + 1;
}

export default Ember.Helper.helper(indexOfTableItem);
