<template>
    <div class="h-dvh">
        <challenge-step-one v-if="step === 1" @next="nextStep"/>
        <challenge-step-two v-if="step === 2"/>
    </div>
</template>
<script setup>
import ChallengeStepOne from '~/components/Challenge/ChallengeStepOne.vue'
import ChallengeStepTwo from '~/components/Challenge/ChallengeStepTwo.vue'
const step = ref(1)
const nextStep = () => {
    step.value = 2
}
</script>
