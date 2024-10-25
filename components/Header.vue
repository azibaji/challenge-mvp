<template>
    <header class="bg-white">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="">
          </a>
        </div>
        <div v-if="isLoggedIn" class="hidden lg:flex lg:flex-1 lg:justify-end">
          <button class="text-sm font-semibold leading-6 text-gray-900" @click="logOut">
            Log out
          </button>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/store/user';
    const authStore = useUserStore();

  const router = useRouter();
  const isLogin = ref(false);

  const isLoggedIn = computed(() => {
    return authStore.getToken
  })
  
  const logOut = () => {
    authStore.logOut();
    router.push('/');
  };
  
    </script>
  