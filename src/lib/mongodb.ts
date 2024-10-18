import { MongoClient } from 'mongodb';

if (!import.meta.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = import.meta.env.MONGODB_URI;
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (import.meta.env.PROD) {
  client = new MongoClient(uri);
  clientPromise = client.connect();
} else {
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };
  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
}

export default clientPromise;