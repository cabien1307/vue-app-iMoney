<template>
    <!-- Info -->
    <div class="row" v-if="user">
        <div class="container mx-auto px-8">
            <div class="text-center">
                <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
                    <img
                        src="https://www.pngarts.com/files/3/Boy-Avatar-PNG-Transparent-Image.png"
                        alt="User profile avatar"
                        class="w-full h-auto object-cover"
                        size="xs"
                    />
                </div>

                <div class="font-bold text-2xl text-primary mt-3">
                    {{ user.displayName }}
                </div>
                <p class="font-semibold text-gray-400 mt-1">{{ user.email }}</p>
            </div>
        </div>
    </div>

    <!-- Menu -->
    <div class="row">
        <div class="containter mx-auto px-8">
            <div class="grid grid-cols-1">
                <div class="col-span-1">
                    <h3 class="font-bold text-xl text-primary mb-2 mt-2">
                        General
                    </h3>
                </div>
            </div>

            <div class="grid grid-cols-1">
                <div class="col-span-1">
                    <ul class="text-dark">
                        <li
                            v-for="(profileOption, index) in profileOptions"
                            :key="profileOption.name"
                        >
                            <router-link
                                :to="profileOption.route"
                                class="flex items-center py-3 justify-between"
                            >
                                <div
                                    class="flex items-center text-left"
                                    :class="{
                                        'text-red':
                                            index === profileOptions.length - 1,
                                    }"
                                >
                                    <i
                                        class="t2ico text-2xl"
                                        :class="profileOption.icon"
                                    ></i>
                                    <h5 class="font-semibold ml-3">
                                        {{ profileOption.name }}
                                    </h5>
                                </div>
                                <div class="flex items-center text-right">
                                    <i
                                        class="t2ico t2ico-arrow-right text-2xl"
                                    ></i>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";
import { PROFILE_OPTIONS } from "../constants/index";
import { useUser } from "../composible/useUser";
export default {
    setup() {
        const profileOptions = reactive(PROFILE_OPTIONS);
        const { getUser } = useUser();
        const { user } = getUser();
        return { profileOptions, user };
    },
};
</script>
