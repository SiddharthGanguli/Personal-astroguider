// firestoreFunctions.js
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "./firebaseConfig"; // Adjust the path if needed

export const saveClinicData = async (data) => {
  try {
    const docRef = await addDoc(collection(firestore, "clinics"), data);
    console.log("Document written with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document:", error.message);
    throw new Error("Error saving data to Firestore");
  }
};
