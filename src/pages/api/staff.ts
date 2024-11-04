import { MongoClient } from "mongodb";

export async function GET() {
  const client = new MongoClient(import.meta.env.MONGO_URI);
  try {
    await client.connect();
    const db = client.db("pt-pet-supply");
    const collection = db.collection("staff");

    // Fetch all announcements
    const announcements = await collection.find().toArray();

    if (!announcements.length) {
      return new Response(JSON.stringify({ error: "No announcements found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(announcements), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to fetch announcements:", error); // Log error for debugging
    return new Response(JSON.stringify({ error: "Failed to fetch announcements" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    await client.close(); // Ensure the client is properly closed
  }
}