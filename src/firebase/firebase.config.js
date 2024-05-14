import { initializeApp, } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUj7ngl5FA9T4UcMJYOHMi_eAvRGgIVPY",
  authDomain: "event-b4b82.firebaseapp.com",
  projectId: "event-b4b82",
  storageBucket: "event-b4b82.appspot.com",
  messagingSenderId: "552605894299",
  appId: "1:552605894299:web:b5469df3663fea011b683e",
  
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export default app