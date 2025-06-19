
// hoangtienquan2003
// Rn3DTowsRkHjRoZC
import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from '~/config/environment'


let trelloDatabaseInstance = null

const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  },
  tls: true, // đảm bảo sử dụng TLS
  tlsAllowInvalidCertificates: false // có thể chỉnh true nếu test local và SSL lỗi

})

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect()
  trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}

export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect to Database first')
  return trelloDatabaseInstance
}

