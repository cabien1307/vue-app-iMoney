import { ref } from "vue";
import { projectStorage } from "../config/firebase";
import { useUser } from "./useUser";

const { getUser } = useUser();
const { user } = getUser();

const useStorage = (name) => {
    const error = ref(null);

    const filePath = ref(null);
    const url = ref(null);

    async function uploadFile(file) {
        filePath.value = `${name}/${user.value.uid}/${file.name}`;

        const fileRef = projectStorage.ref(filePath.value);

        try {
            const res = await fileRef.put(file);
            url.value = await res.ref.getDownloadURL();

            return url.value;
        } catch (err) {
            console.log(err);
            error.value = err.message;
        }
    }
    return { uploadFile, error, filePath, url };
};

export default useStorage;
