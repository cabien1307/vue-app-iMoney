<template>
    <NavHeader />
    <slot />
    <NavBottom />
</template>

<script>
import NavBottom from "../components/NavBottom.vue";
import NavHeader from "../components/NavHeader.vue";
export default {
    components: {
        NavBottom,
        NavHeader,
    },
};
</script>
