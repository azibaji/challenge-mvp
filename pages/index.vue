<template>
   <div class="h-dvh">
        <form class="max-w-sm mx-auto bg-white p-8 rounded-lg mt-14">
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                <input
                    v-model="loginData.email"
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="name@flowbite.com"
                    required
                />
            </div>
            <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                <input
                    v-model="loginData.password"
                    type="password"
                    id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                />
            </div>
            <div class="mb-5">
                <label for="token" class="block mb-2 text-sm font-medium text-gray-900 "> GAuth token</label>
                <input
                    v-model="loginData.g_auth"
                    type="text"
                    id="token"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                />
            </div>
            <button
                type="submit"
                class="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                @click.prevent="submit"
                >
                Login
            </button>
            <NuxtLink to="/register" class="text-sm text-primary mx-2 underline">
                Register
            </NuxtLink>
        </form>
   </div>
</template>
<script setup>
import { useUserStore } from '@/store/user';
const authStore = useUserStore();
const router = useRouter()
    const loginData = reactive({
        email: null,
        password: null,
        g_auth: null,
    })
    const submit = async () => {
        try {
            const response = {
                token: '12344'
            }
            authStore.logIn(response.token)
        } catch(e) {
            console.log(e)
        }
        router.push('/challenge')
    }
</script>
