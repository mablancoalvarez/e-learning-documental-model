db.createCollection("Authors", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "Authors",
      required: ["_id"],
      properties: {
        "_id": { bsonType: "objectId" },
        "name": { bsonType: "string" },
        "bio": { bsonType: "string" },
        "socialMedia": { bsonType: "array", items: { bsonType: "string" } },
      },
    },
  },
});

db.createCollection("Users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "Users",
      required: ["_id"],
      properties: {
        "_id": { bsonType: "objectId" },
        "name": { bsonType: "string" },
        "surname": { bsonType: "string" },
        "email": { bsonType: "string" },
        "hasSuscription": { bsonType: "bool" },
        "courses": { bsonType: "array", items: { bsonType: "object" } },
      },
    },
  },
});

db.createCollection("Categories", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "Categories",
      required: ["_id"],
      properties: {
        "_id": { bsonType: "objectId" },
        "name": { bsonType: "string" },
        "last_publish": { bsonType: "array", items: { bsonType: "object" } },
        "ancestors": { bsonType: "array", items: { bsonType: "object" } },
        "parentId": { bsonType: "objectId" },
      },
    },
  },
});

db.createCollection("Courses", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "Courses",
      required: ["_id"],
      properties: {
        "_id": { bsonType: "objectId" },
        "title": { bsonType: "string" },
        "author": { bsonType: "array", items: { bsonType: "object" } },
        "createdAt": { bsonType: "date" },
        "totalViews": { bsonType: "int" },
        "lessons": { bsonType: "array", items: { bsonType: "object" } },
        "category": { bsonType: "object", title: "category", properties: { "categoryId": { bsonType: "objectId" }, "name": { bsonType: "string" }, }, },
        "tags": { bsonType: "array", items: { bsonType: "string" } },
      },
    },
  },
});