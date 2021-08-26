import { ref } from "vue";
import { projectAuth } from "../config/firebase";

const error = ref(null);
const isPending = ref(false);

async function signUp(email, password, fullName) {
    isPending.value = true;
    error.value = null;
    try {
        const res = await projectAuth.createUserWithEmailAndPassword(
            email,
            password
        );
        if (!res) throw new Error("Could not create user !");

        await res.user.updateProfile({ displayName: fullName });

        return res;
    } catch (err) {
        console.log(err);
        error.value = err.message;
    } finally {
        isPending.value = false;
    }
}

export function useSignup() {
    return { error, isPending, signUp };
}
