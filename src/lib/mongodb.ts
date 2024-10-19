import { MongoClient } from "mongodb";

const uri = import.meta.env.MONGO_URI; // Ensure your connection string is stored in an environment variable
const client = new MongoClient(uri);

let db: any;

export async function connectToDatabase() {
  if (!db) {
    try {
      await client.connect();
      db = client.db("pt-pet-supply");
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Failed to connect to MongoDB", error);
      throw new Error("Database connection failed");
    }
  }
  return db;
}

export async function closeConnection() {
  await client.close();
  console.log("MongoDB connection closed");
}