import { v4 as uuidv4 } from "uuid"; // Import the uuid library
import { firestore, storage } from "./firebase";

import {
  getFirestore,
  collection,
  where,
  getDocs,
  getDoc,
  query,
  limit,
  addDoc,
  serverTimestamp,
  updateDoc,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  UploadTask,
  deleteObject,
  uploadBytesResumable,
} from "firebase/storage";

export async function uploadProject(data) {
  const { thumbnailFile, ...restData } = data;

  // Add the createdAt and updatedAt fields to the data object
  const timestamp = serverTimestamp();

  const updatedData = {
    ...restData,
    createdAt: timestamp,
    updatedAt: timestamp,
  };

  // Add the data to the "projects" collection
  const projectsRef = collection(firestore, "projects");

  try {
    const thumbnailId = uuidv4();

    // Upload the Preview image file to Firebase Storage
    const previewImageUrl = await new Promise((resolve, reject) => {
      const storageRef = ref(storage, `thumbnails/${thumbnailId}`);
      const uploadTask = uploadBytes(storageRef, thumbnailFile);

      uploadTask
        .then((snapshot) => getDownloadURL(snapshot.ref))
        .then((downloadUrl) => resolve(downloadUrl))
        .catch((error) => reject(error));
    });
    updatedData.thumbnailUrl = previewImageUrl;

    // Add the data to the "readings" collection
    await addDoc(projectsRef, updatedData);
    console.log("project uploaded successfully");
    // Additional logic after successful upload
  } catch (error) {
    console.error("Error uploading project", error);
    // Additional error handling
  }
}
