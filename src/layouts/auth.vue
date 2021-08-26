<template>
    <!-- <h1>Auth layout</h1> -->
    <NavBrand />
    <slot />
</template>

<script>
import NavBrand from "../components/NavBrand.vue";
export default {
    components: {
        NavBrand,
    },
};
</script>
