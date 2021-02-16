import express from '@hyper63/app-express'
import couchdb from '@hyper63/adapter-couchdb'

//const COUCH = `http://${process.env.USER}:${process.env.PASSWORD}@${process.env.COUCHDB_HOST}`
const COUCH = `http://${process.env.USER}:${process.env.PASSWORD}@10.104.137.86:5984`
export default {
  app: express,
  adapters: [
    { port: 'data', plugins: [couchdb({url: COUCH })]}
  ]
}
