<template>
    <h1>Logout Page</h1>
</template>

<script>
import { useLogout } from "../composible/useLogout";

import { useRouter } from "vue-router";
export default {
    setup() {
        const { error, logout } = useLogout();
        const router = useRouter();

        async function onLogout() {
            await logout();
            if (!error.value) router.push({ name: "Login", params: {} });
        }

        onLogout();

        return { error };
    },
};
</script>
