import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// A function to add or update content in the database
export const putDb = async (id, content) => {
  try {
    console.log("PUT to the database", content);
    const db = await initdb();
    const transaction = db.transaction(OBJECT_STORE_NAME, "readwrite");
    const store = transaction.objectStore(OBJECT_STORE_NAME);
    const request = store.put({ id, value: content });
    const result = await request;
    console.log("🚀 - data saved to the database", result);
  } catch (error) {
    console.error("Error in putDb:", error);
    throw error;
  }
};

// A function to get all content from the database
export const getDb = async () => {
  try {
    console.log("GET all from the database");
    const db = await initdb();
    const transaction = db.transaction(OBJECT_STORE_NAME, "readonly");
    const store = transaction.objectStore(OBJECT_STORE_NAME);
    const request = store.getAll();
    const result = await request;
    console.log("result.value", result);
    return result;
  } catch (error) {
    console.error("Error in getDb:", error);
    throw error;
  }
};


initdb();
