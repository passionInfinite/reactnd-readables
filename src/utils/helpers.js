import _ from 'lodash'
import moment from 'moment'

export function sort(states, type='voteScore') {
  return _.orderBy(states, type, 'desc')
}

export function generateId() {
  return _.times(10, () => _.random(35).toString(36)).join('');
}

export function time(timestamp) {
  return moment(timestamp).fromNow()
}