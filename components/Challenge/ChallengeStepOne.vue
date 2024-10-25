<template>
    <div class="flex justify-center items-center mt-40 bg-white bg-opacity-45 p-14 w-96 mx-auto rounded-lg">
        <button @click="goToChallenge">
            <img src="/assets/icons/play-icon.png" width="200" class="hover:shadow-lg"/>
        </button>
    </div>
</template>
<script setup>
const emit = defineEmits(['next'])
    const goToChallenge = () => {
        emit('next')
    }
</script>
