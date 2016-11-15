import Ember from 'ember';

export function booleanToSuccess([param]/*, hash*/) {
  if (param) {
    return '<label class="label label-success">成功</label>';
  } else {
    return '<label class="label label-danger">失败</label>';
  }
}

export default Ember.Helper.helper(booleanToSuccess);
