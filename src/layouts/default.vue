<template>
    <NavHeader />
    <slot />
    <NavBottom v-if="meta.isShowFooter" />
</template>

<script>
import NavBottom from "../components/NavBottom.vue";
import NavHeader from "../components/NavHeader.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
    components: {
        NavBottom,
        NavHeader,
    },
    setup() {
        const route = useRoute();
        return {
            meta: computed(() => route.meta),
        };
    },
};
</script>
