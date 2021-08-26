<template>
    <header id="header" class="py-8">
        <div class="container mx-auto px-8">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <div
                        class="w-10 h-10 overflow-hidden rounded-full"
                        v-if="meta.leading"
                    >
                        <img
                            src="https://www.pngarts.com/files/3/Boy-Avatar-PNG-Transparent-Image.png"
                            alt="User Profile avata"
                            class="w-full h-auto object-cover"
                        />
                    </div>
                    <h1 class="text-xl font-bold text-dark ml-2">
                        {{ meta.text }}
                    </h1>
                </div>
                <div class="flex">
                    <ul>
                        <li>
                            <i class="t2ico t2ico-notification text-2xl"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
export default {
    setup() {
        const route = useRoute();
        return {
            meta: computed(() => route.meta),
        };
    },
};
</script>
