import { getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";
import { app } from "./firebaseConfig";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    // Google kullanıcı bilgisi
    return result.user;
  } catch (error) {
    throw error;
  }
}

export async function logout() {
    const auth = getAuth();
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }}
