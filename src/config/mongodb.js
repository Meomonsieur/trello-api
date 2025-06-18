
// hoangtienquan2003
// Rn3DTowsRkHjRoZC
import { MongoClient, ServerApiVersion } from 'mongodb'

const MONGODB_URI = 'mongodb+srv://hoangtienquan2003:Rn3DTowsRkHjRoZC@cluster0.luntpwp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const DATABASE_NAME = 'trello-web'

let trelloDatabaseInstance = null

const mongoClientInstance = new MongoClient(MONGODB_URI, {
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
  trelloDatabaseInstance = mongoClientInstance.db(DATABASE_NAME)
}

export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect to Database first')
  return trelloDatabaseInstance
}
