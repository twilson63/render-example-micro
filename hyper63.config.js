import express from '@hyper63/app-express'
import couchdb from '@hyper63/adapter-couchdb'
import redis from '@hyper63/adapter-redis'
import es from '@hyper63/adapter-elasticsearch'

const COUCH = `http://${process.env.USER}:${process.env.PASSWORD}@${process.env.COUCHDB_HOST}:5984`
const REDIS = `redis://${process.env.REDIS_HOST}`
const ES = `http://${process.env.SEARCH_HOST}:9200`

export default {
  app: express,
  adapters: [
    { port: 'data', plugins: [couchdb({url: COUCH })]},
    { port: 'cache', plugins: [redis({url: REDIS})]},
    { port: 'search', plugins: [es({url: ES})]},
  ]
}
