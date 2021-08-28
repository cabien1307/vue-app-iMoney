<template>
    <form @submit.prevent="onSubmit">
        <!-- Main form -->
        <div class="mt-8 row">
            <div class="bg-white rounded-lg py-4">
                <div class="container mx-auto px-8">
                    <div class="row">
                        <label for="total" class="flex items-end">
                            <div class="w-10 text-right leading-10 mr-4 pb-1">
                                <span
                                    class="
                                        inline-block
                                        px-1
                                        text-dark
                                        border border-dark
                                        rounded
                                        text-sm
                                        font-bold
                                    "
                                    >USD</span
                                >
                            </div>
                            <div
                                class="
                                    flex flex-col
                                    border-b border-gray-100
                                    pb-1
                                "
                            >
                                <span class="font-semibold text-xs text-dark"
                                    >Total</span
                                >
                                <input
                                    id="total"
                                    type="text"
                                    placeholder="0"
                                    class="
                                        text-4xl text-dark
                                        w-full
                                        outline-none
                                        mt-1
                                    "
                                    v-model="total"
                                />
                            </div>
                        </label>
                    </div>

                    <div class="row">
                        <label for="category" class="flex items-center">
                            <div
                                class="
                                    flex
                                    items-center
                                    flex-none
                                    w-10
                                    text-right
                                    leading-10
                                    mr-4
                                    pb-1
                                "
                            >
                                <span
                                    class="
                                        inline-block
                                        ml-auto
                                        w-8
                                        h-8
                                        rounded-full
                                        bg-blue-300
                                    "
                                ></span>
                            </div>
                            <div
                                class="
                                    flex flex-1
                                    border-b border-gray-100
                                    py-3
                                "
                            >
                                <input
                                    id="category"
                                    type="text"
                                    placeholder="Select a category"
                                    class="
                                        text-xl text-dark
                                        w-full
                                        outline-none
                                    "
                                    v-model="category"
                                />
                            </div>
                        </label>
                    </div>

                    <div class="row">
                        <label for="note" class="flex items-center">
                            <div
                                class="
                                    flex
                                    items-center
                                    flex-none
                                    w-10
                                    text-right
                                    leading-10
                                    mr-4
                                    pb-1
                                "
                            >
                                <span class="flex-none w-10 mr-4">
                                    <i
                                        class="t2ico t2ico-document text-2xl"
                                    ></i>
                                </span>
                            </div>
                            <div
                                class="
                                    flex flex-1
                                    border-b border-gray-100
                                    py-3
                                "
                            >
                                <input
                                    id="note"
                                    type="text"
                                    placeholder="Note"
                                    class="
                                        text-xl text-dark
                                        w-full
                                        outline-none
                                    "
                                    v-model="note"
                                />
                            </div>
                        </label>
                    </div>

                    <div class="row">
                        <label for="time" class="flex items-center">
                            <div class="items-center flex-none w-10 mr-4">
                                <span
                                    class="flex flex-none justify-end text-dark"
                                >
                                    <i
                                        class="t2ico t2ico-calendar text-2xl"
                                    ></i>
                                </span>
                            </div>
                            <div class="flex-1 py-2 border-b border-gray-100">
                                <div class="text-dark w-full">
                                    {{ new Date() }}
                                </div>
                            </div>
                        </label>
                    </div>

                    <div class="row">
                        <label for="wallet" class="flex items-center">
                            <div class="items-center flex-none w-10 mr-4">
                                <span
                                    class="flex flex-none justify-end text-dark"
                                >
                                    <i class="t2ico t2ico-wallet text-2xl"></i>
                                </span>
                            </div>
                            <div class="flex flex-1 py-2">
                                <div class="text-dark w-full">My wallet</div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-8 row" v-if="!isMoreDetail">
            <button
                @click="isMoreDetail = true"
                class="
                    bg-white
                    rounded-lg
                    py-3
                    w-full
                    text-primary
                    font-semibold
                "
            >
                Show More
            </button>
        </div>

        <template v-if="isMoreDetail">
            <div class="mt-8 row">
                <div class="bg-white rounded-lg py-4">
                    <div class="container mx-auto px-8">
                        <div class="row">
                            <label for="location" class="flex items-center">
                                <div class="flex-none w-10 mr-4">
                                    <span
                                        class="
                                            flex
                                            items-center
                                            justify-center
                                            text-dark
                                        "
                                    >
                                        <i
                                            class="
                                                t2ico t2ico-location
                                                text-2xl
                                            "
                                        ></i>
                                    </span>
                                </div>
                                <div
                                    class="
                                        flex flex-1
                                        border-b border-gray-100
                                        py-3
                                    "
                                >
                                    <input
                                        id="location"
                                        type="text"
                                        placeholder="Select location"
                                        class="
                                            text-xl text-dark
                                            w-full
                                            outline-none
                                        "
                                        v-model="location"
                                    />
                                </div>
                            </label>
                        </div>

                        <div class="row">
                            <label for="withPersion" class="flex items-center">
                                <div class="flex-none w-10 mr-4">
                                    <span
                                        class="
                                            flex
                                            items-center
                                            justify-center
                                            text-dark
                                        "
                                    >
                                        <i
                                            class="t2ico t2ico-users text-2xl"
                                        ></i>
                                    </span>
                                </div>
                                <div
                                    class="
                                        flex flex-1
                                        border-b border-gray-100
                                        py-3
                                    "
                                >
                                    <input
                                        id="withPersion"
                                        type="text"
                                        placeholder="With Persion"
                                        class="
                                            text-xl text-dark
                                            w-full
                                            outline-none
                                        "
                                        v-model="withPerson"
                                    />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Upload photo -->
            <div class="mt-8 row">
                <div class="bg-white rounded-lg py-4">
                    <div class="container mx-auto px-8">
                        <div class="row">
                            <label
                                for="file"
                                class="flex items-center text-primary"
                            >
                                <div class="flex-none w-10 mr-4">
                                    <span
                                        class="flex items-center justify-center"
                                    >
                                        <i
                                            class="t2ico t2ico-camera text-2xl"
                                        ></i>
                                    </span>
                                </div>
                                <div
                                    class="
                                        flex flex-1
                                        border-b border-gray-100
                                        py-3
                                    "
                                >
                                    <div class="w-full font-semibold">
                                        Upload image
                                    </div>
                                    <input
                                        type="file"
                                        id="file"
                                        class="w-0 h-0"
                                        @change="onChangeFile"
                                    />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="text-red my-3 text-center">{{ errorFile }}</div>
            </div>
        </template>

        <button class="bg-primary text-white" type="submit">Submit</button>

        <!-- Advance form -->
    </form>
</template>

<script>
import { ref } from "vue";
import { useUser } from "../composible/useUser";
import useCollection from "../composible/useCollection";
import useStorage from "../composible/useStorage";

export default {
    setup() {
        const { getUser } = useUser();
        const { error, addRecord } = useCollection("transactions");
        const { uploadFile, url } = useStorage("transactions");

        const isMoreDetail = ref(false);
        const total = ref(null);
        const category = ref("");
        const note = ref("");
        const time = ref(new Date());
        const file = ref(null);
        const location = ref("");
        const withPerson = ref("");
        const errorFile = ref(null);

        function onChangeFile(e) {
            const selected = e.target.files[0];
            const typeFile = [
                "image/png",
                "image/jpg",
                "image/jpeg",
                "image/jfif",
            ];

            if (selected && typeFile.includes(selected.type)) {
                file.value = selected;
            } else {
                file.value = null;
                errorFile.value = "Invalid file !";
            }
        }

        async function onSubmit() {
            if (file.value) await uploadFile(file.value);

            console.log("URL file: ", url);

            const { user } = getUser();

            const transaction = {
                total: parseInt(total.value),
                category: category.value,
                note: note.value,
                time: time.value,
                location: location.value,
                withPerson: withPerson.value,
                userId: user.value.uid,
                thumnail: url.value,
            };

            await addRecord(transaction);
            console.log("Created !");
        }

        return {
            onSubmit,
            isMoreDetail,
            total,
            time,
            category,
            note,
            withPerson,
            location,
            error,
            onChangeFile,
            errorFile,
        };
    },
};
</script>
