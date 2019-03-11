import { Stitch } from 'mongodb-stitch-browser-core'
import { RemoteMongoClient } from 'mongodb-stitch-browser-services-mongodb-remote'

export const client = Stitch.initializeDefaultAppClient('injustices-spsnw')
export const db = client.getServiceClient(RemoteMongoClient.factory, 'Injustices').db('injustices')