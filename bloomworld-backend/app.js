import { db, auth } from './firebase.js';
import { ref, set, get, child } from "firebase/database";
import { UPDATE_INTERVAL_LENGTH, DEFAULT_MAX_MAPS_PER_USER, DEFAULT_MAP_WIDTH, DEFAULT_MAP_HEIGHT } from './config/serverSettings';

// Initialize Express
// I may remove express later--for now, clients don't talk directly to this server
import express from 'express';
const app = express();
const port = 3000;







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
