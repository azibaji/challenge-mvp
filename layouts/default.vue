<template>
    <div class="layout h-100vh">
        <Header />
        <slot />
    </div>
</template>
<script>
import Header from '~/components/Header.vue'
</script>
<style scoped>
.layout{
    background: linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147));

}
</style>
