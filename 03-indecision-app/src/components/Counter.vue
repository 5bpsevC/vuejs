<script setup lang="ts">
import { ref, computed } from 'vue';

// const props = defineProps({
//   value: { type: Number, required: true },
// });

// const props = defineProps<{ value: number }>();

interface Props {
  value: number;
}

const props = defineProps<Props>();

const counter = ref(props.value);
const squareCounter = computed(() => counter.value * counter.value);
</script>

<template>
  <section>
    <h3 class="text-blue-500">Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>
