<template>
    <div class="mt-8">
        <div class="container mx-auto px-8">
            <!-- Form -->
            <form
                @submit.prevent="onSubmit"
                class="flex space-y-6 flex-col justify-start"
            >
                <div class="row">
                    <label for="email-address" class="flex flex-col">
                        <span class="font-semibold">Email address</span>
                        <input
                            id="email-address"
                            class="
                                px-4
                                py-3
                                rounded-lg
                                border border-gray-100
                                mt-1
                            "
                            type="email"
                            placeholder="example@gmail.com"
                            autocomplete="username"
                            v-model="email"
                        />
                    </label>
                </div>

                <div class="row">
                    <label for="password" class="flex flex-col">
                        <span class="font-semibold">Password</span>
                        <input
                            id="password"
                            class="
                                px-4
                                py-3
                                rounded-lg
                                border border-gray-100
                                mt-1
                            "
                            type="password"
                            placeholder="Example"
                            autocomplete="current-password"
                            v-model="password"
                        />
                    </label>
                </div>

                <div class="row">
                    <button
                        v-if="!isPending"
                        type="submit"
                        class="
                            py-3
                            text-center
                            w-full
                            bg-primary
                            text-white
                            font-bold
                            rounded-lg
                        "
                    >
                        Sign In
                    </button>
                    <button
                        v-else
                        type="button"
                        class="
                            py-3
                            text-center
                            w-full
                            text-white
                            font-bold
                            rounded-lg
                            cursor-not-allowed
                            bg-gray-800
                        "
                        disabled
                    >
                        Loading
                    </button>
                </div>
            </form>
            <!-- Error -->
            <div class="text-left mt-6 text-red" v-if="error">
                <span>{{ error }}</span>
            </div>

            <!-- Direction -->
            <div class="text-center w-full mt-6">
                <span class="font-semibold">I'm a new user.</span>
                <span class="ml-1">
                    <router-link
                        :to="{ name: 'Register', param: {} }"
                        class="font-semibold text-primary"
                    >
                        Sign Up</router-link
                    >
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { useSignIn } from "../composible/useSignIn";
import { useRouter } from "vue-router";

export default {
    setup() {
        const email = ref("");
        const password = ref("");

        const { error, isPending, signIn } = useSignIn();

        const router = useRouter();

        async function onSubmit() {
            await signIn(email.value, password.value);
            if (!error.value) router.push({ name: "Profile", param: {} });
        }
        return {
            onSubmit,
            email,
            password,
            error,
            isPending,
        };
    },
};
</script>
