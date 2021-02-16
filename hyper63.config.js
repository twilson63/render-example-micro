import express from '@hyper63/app-express'
import couchdb from '@hyper63/adapter-couchdb'
import redis from '@hyper63/adapter-redis'

const COUCH = `http://${process.env.USER}:${process.env.PASSWORD}@${process.env.COUCHDB_HOST}`
const REDIS = `redis://${process.env.REDIS_HOST}`

export default {
  app: express,
  adapters: [
    { port: 'data', plugins: [couchdb({url: COUCH })]},
    { port: 'cache', plugins: [redis({url: REDIS})]}
  ]
}
