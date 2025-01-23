import { MongoClient, ObjectId } from 'mongodb';
export { renderers } from '../../renderers.mjs';

async function GET() {
  const client = new MongoClient("mongodb+srv://jdegaetano:digga2734@cluster0.a9ftc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  try {
    await client.connect();
    const db = client.db("pt-pet-supply");
    const collection = db.collection("staff");
    const staffDocument = await collection.findOne({});
    if (!staffDocument || !staffDocument.members) {
      return new Response(JSON.stringify({ error: "No staff members found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify(staffDocument), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Failed to fetch staff members:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch staff members" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  } finally {
    await client.close();
  }
}
async function PUT({ request }) {
  const client = new MongoClient("mongodb+srv://jdegaetano:digga2734@cluster0.a9ftc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  try {
    const { id, staff_id, fullName, role, bio, imageSrc } = await request.json();
    if (!staff_id || !fullName || !role || !bio || !imageSrc) {
      return new Response(
        JSON.stringify({ error: "Invalid input data" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    await client.connect();
    const db = client.db("pt-pet-supply");
    const collection = db.collection("staff");
    const databaseId = { _id: ObjectId.createFromHexString(id) };
    const update = {
      $set: {
        "members.staff_id": staff_id,
        "members.fullname": fullName,
        "members.role": [role],
        "members.bio": bio,
        "members.imageSrc": imageSrc
      }
    };
    const options = { upsert: true };
    const result = await collection.updateOne(databaseId, update, options);
    if (result.upsertedCount > 0) {
      return new Response(
        JSON.stringify({ message: "New staff member created successfully", id: result.upsertedId }),
        { status: 201, headers: { "Content-Type": "application/json" } }
      );
    } else if (result.modifiedCount > 0) {
      return new Response(
        JSON.stringify({ message: "Staff member info updated successfully" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({ message: "No changes made to staff member info" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    console.error("Failed to update or create staff info:", error);
    return new Response(
      JSON.stringify({ error: "Failed to update or create staff info" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } finally {
    await client.close();
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
