<template>
       <div class="h-dvh">
        <form class="max-w-sm mx-auto bg-white p-8 rounded-lg mt-14">
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                <input
                    v-model="registerData.email"
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="name@flowbite.com"
                    required
                />
            </div>
            <div class="mb-5">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                <input
                    v-model="registerData.name"
                    type="text"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="John Doe"
                    required
                />
            </div>
            <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                <input
                    v-model="registerData.password"
                    type="password"
                    id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                />
            </div>
            <div class="grid grid-cols-5 items-center mb-4">
                <label for="date"  class="block text-sm font-medium text-gray-900 col-span-2 ">
                    Your BirthDate:
                </label>
                <div class="col-span-2">
                    <vue-date-picker v-model="registerData.birth_date"></vue-date-picker>
                </div>
            </div>
           

            <button
                type="submit"
                class="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                @click.prevent="submit"
                >
                Submit
            </button>
            <NuxtLink to="/" class="text-sm text-primary mx-2 underline">
                Login
            </NuxtLink>
        </form>
   </div>
</template>
<script setup>
const router = useRouter()
    const registerData = reactive({
        email: null,
        name: null,
        password: null,
        birth_date: null,
    })
    const submit = () => {
        router.push('/')
    }
    const selectedDate = ref(null);


</script>
<style>
.dp__input{
    border: 0px solid var(--dp-border-color);
}
</style>