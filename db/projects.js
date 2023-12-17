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
  const { thumbnailFile, skillTags, images, ...restData } = data;

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

    // Upload other images to Firebase Storage and get their URLs
    const imageUrls = await Promise.all(
      images.map(async (imageFile) => {
        const imageId = uuidv4();
        const imageRef = ref(storage, `projectImages/${imageId}`);

        await uploadBytes(imageRef, imageFile);

        return getDownloadURL(imageRef);
      })
    );

    updatedData.images = imageUrls;

    // Modify the structure of skillTags before saving
    const processedSkillTags = skillTags.map((tag) => ({
      name: tag.name,
      icon: tag.icon.name,
      color: tag.color,
    }));
    updatedData.skillTags = processedSkillTags;

    console.log(images);
    // Add the data to the "readings" collection
    await addDoc(projectsRef, updatedData);
    console.log("project uploaded successfully");
    // Additional logic after successful upload
  } catch (error) {
    console.error("Error uploading project", error);
    // Additional error handling
  }
}

export async function getAllProjects() {
  const projectsRef = collection(firestore, "projects");

  try {
    const querySnapshot = await getDocs(projectsRef);
    const projects = [];

    querySnapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() });
    });

    return projects;
  } catch (error) {
    console.error("Error retrieving projects", error);
    // Handle the error or return an empty array if needed
    return [];
  }
}
