import { MongoClient, ObjectId } from "mongodb";

export async function GET() {
  const client = new MongoClient(import.meta.env.MONGO_URI);
  try {
    await client.connect();
    const db = client.db("pt-pet-supply");
    const collection = db.collection("announcements");

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
    console.error("Failed to fetch announcements:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch announcements" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    await client.close();
  }
}

export async function PUT({ request }: { request: Request }) {
  const client = new MongoClient(import.meta.env.MONGO_URI);

  try {
    const { id, content, status } = await request.json();

    if (!id || typeof content !== "string" || typeof status !== "string") {
      return new Response(
        JSON.stringify({ error: "Invalid input data" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await client.connect();
    const db = client.db("pt-pet-supply");
    const collection = db.collection("announcements");

    const result = await collection.updateOne(
      { _id: ObjectId.createFromHexString(id) },
      { $set: { content, status } }
    );

    if (result.modifiedCount === 0) {
      return new Response(
        JSON.stringify({ error: "Announcement not found or not updated" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ message: "Announcement updated successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Failed to update announcement:", error);
    return new Response(
      JSON.stringify({ error: "Failed to update announcement" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } finally {
    await client.close();
  }
}