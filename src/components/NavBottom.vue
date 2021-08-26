<template>
    <footer
        id="footer"
        class="fixed w-full bottom-0 left-0 bg-white pt-4 p-b-safe-4"
    >
        <div class="container mx-auto px-8 h-full">
            <ul class="flex justify-between items-center">
                <li v-for="(navItem, index) in navItems" :key="index">
                    <router-link :to="{ name: navItem.name, param: {} }">
                        <i class="t2ico text-2xl" :class="navItem.icon"></i>
                    </router-link>
                </li>
            </ul>
        </div>

        <div
            data-circle
            class="absolute top-0 left-1/2 transform -translate-x-1/2"
        ></div>
        <div
            @click="goToRoute"
            data-circle-inset
            class="
                absolute
                flex
                items-center
                justify-center
                bg-primary
                text-white
                w-12
                h-12
                rounded-full
                cursor-pointer
                -top-6
                transform
                left-1/2
                -translate-x-1/2
            "
        >
            <i class="t2ic t2ico-plus"></i>
        </div>
    </footer>
</template>
<script>
import { reactive } from "vue";
import { NAV_BOTTOM_ITEMS } from "../constants/index";
import { useRouter } from "vue-router";
export default {
    setup() {
        const navItems = reactive(NAV_BOTTOM_ITEMS);
        const router = useRouter();

        function goToRoute() {
            router.push({ name: "NewTransaction", params: {} });
        }

        return { navItems, goToRoute };
    },
};
</script>
<style scope>
#footer > div[data-circle] {
    width: 60px;
    height: 30px;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
}
footer ul li:nth-child(2) {
    margin-right: 10%;
}
footer ul li:nth-child(3) {
    margin-left: 10%;
}
</style>
