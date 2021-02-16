import express from '@hyper63/app-express'
import couchdb from '@hyper63/adapter-couchdb'

const COUCH = `http://${process.env.USER}:${process.env.PASSWORD}@${process.env.COUCH_HOST}`

export default {
  app: express,
  adapters: [
    { port: 'data', plugins: [couchdb({url: COUCH })]}
  ]
}
