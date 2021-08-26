import { ref } from "vue";
import { projectAuth } from "../config/firebase";

const error = ref(null);
const isPending = ref(false);

async function signIn(email, password) {
    error.value = null;
    isPending.value = true;
    try {
        const res = await projectAuth.signInWithEmailAndPassword(
            email,
            password
        );
        return res;
    } catch (err) {
        console.log(err);
        error.value = err.message;
    } finally {
        isPending.value = false;
    }
}

export function useSignIn() {
    return { error, isPending, signIn };
}
