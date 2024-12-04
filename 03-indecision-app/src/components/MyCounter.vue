<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square:{{ squareCounter }}</h3>

        <div>
            <button @click="counter++">+1</button>
            <button @click="counter--">-1</button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const counter = ref(0)
const squareCounter = computed(() => counter.value * counter.value)
</script>