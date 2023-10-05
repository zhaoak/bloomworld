import { db, auth } from './firebase.js';
import { ref, set, get, child } from "firebase/database";
import { UPDATE_INTERVAL_LENGTH, DEFAULT_MAX_MAPS_PER_USER, DEFAULT_MAP_WIDTH, DEFAULT_MAP_HEIGHT, RUN_MAP_UPDATES, UPDATE_FIREBASE_CELLTYPE_LIST_ON_STARTUP } from './config/serverSettings.js';

// Initialize Express
// I may remove express later--for now, clients don't talk directly to this server
// import express from 'express';
// const app = express();
// const port = 3000;

// testing various functions
import { updateMap, generateAsciiMap } from './utils/mapUtils.js';
console.log(updateMap('---------', 3, 3));
console.log(generateAsciiMap('12-12A', 12, 2));

// Initialize database if necessary
if (UPDATE_FIREBASE_CELLTYPE_LIST_ON_STARTUP) {
  // do that
}

if (RUN_MAP_UPDATES) {
  setInterval(updateOnInterval, UPDATE_INTERVAL_LENGTH * 1000);
}

// Main update loop, runs every UPDATE_INTERVAL_LENGTH * 1000 ms
function updateOnInterval() {
  console.log(Date.now() + ' - running update loop');

  // update cell growth on all maps

  // run player requests


}

// Firebase testing code
// async function getTestData() {
//   const dbRef = ref(db);
//   let value;
//    await get(child(dbRef, "testing")).then((snapshot) => {
//     if (snapshot.exists()) {
//       value = snapshot.val();
//       console.log(value);
//     } else {
//       console.log("error");
//       value = "nothin here";
//     }
//   }).catch((error) => {
//     console.error(error);
//     value = "error";
//   });
//   return value;
// }
//
// console.log(getTestData());
//
// app.get('/', (req, res) => {
//   res.send("sup");
// });
//
// app.listen(port, () => {
//   console.log(`Listening on port ${port}`)
// });
