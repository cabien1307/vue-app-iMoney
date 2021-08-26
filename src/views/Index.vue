<template>
    <div class="home">
        <h1>Home Page</h1>
        <h3 class="mt" v-if="user">{{ user.displayName }}</h3>
    </div>
</template>

<script>
import { useUser } from "../composible/useUser";
export default {
    setup() {
        const { getUser } = useUser();

        const { user } = getUser();

        return { user };
    },
};
</script>
