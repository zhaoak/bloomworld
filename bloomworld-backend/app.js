import { db, auth } from './firebase.js';
import { ref, set, get, child } from "firebase/database";

import express from 'express';
const app = express();
const port = 3000;

async function getTestData() {
  const dbRef = ref(db);
  let value;
   await get(child(dbRef, "testing")).then((snapshot) => {
    if (snapshot.exists()) {
      value = snapshot.val();
      console.log(value);
    } else {
      console.log("error");
      value = "nothin here";
    }
  }).catch((error) => {
    console.error(error);
    value = "error";
  });
  return value;
}

console.log(getTestData());

app.get('/', (req, res) => {
  res.send("sup");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
