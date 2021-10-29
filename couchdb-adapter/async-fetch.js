const { Async } = require('crocks')
const { assoc, ifElse, propEq } = require('ramda')
//const { composeK } = require('crocks/helpers')

exports.asyncFetch = Async.fromPromise(fetch)
exports.createHeaders = (username, password) => ({
  'Content-Type': 'application/json',
  authorization: `Basic ${Buffer.from(username + ':' + password).toString('base64')}`
})
const toJSON = (result) => Async.fromPromise(result.json.bind(result))();
const toJSONReject = code => result => {
  return toJSON(result).map(assoc('status', result.status)).chain(Async.Rejected);
}
exports.handleResponse = (code) =>
  ifElse(propEq("status", code), toJSON, toJSONReject(code));


