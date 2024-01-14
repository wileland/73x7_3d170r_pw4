import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async () => {
  const db = await initdb();
  const transaction = db.transaction('jate', 'readwrite');
  const store = transaction.objectStore('jate');
  await store.add(content);
  console.log('Content added to the database');
};

initdb();

export const getDb = async () => {
  const db = await initdb();
  const transaction = db.transaction('jate', 'readonly');
  const store = transaction.objectStore('jate');
  const content = await store.getAll();
  return content;
};

initdb();
