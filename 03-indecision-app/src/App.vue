<script setup lang="ts">
import Counter from './components/Counter.vue';
import CounterScript from './components/CounterScript.vue';
</script>

<template>
  <h1>Mi primera app</h1>
  <Counter :value="5" />
  <CounterScript :value="5"/>
</template>
