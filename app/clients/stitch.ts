import { Stitch, RemoteMongoClient } from 'mongodb-stitch-browser-sdk'

export const client = Stitch.initializeDefaultAppClient('injustices-spsnw')
export const db = client.getServiceClient(RemoteMongoClient.factory, 'Injustices').db('injustices')