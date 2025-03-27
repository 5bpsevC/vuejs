<script setup lang="ts">
import Counter from './components/Counter.vue';
import CounterScript from './components/CounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/CounterScript2.vue'; 
</script>

<template>
  <h1>Mi primera app</h1>
  <Counter :value="1" />
  <CounterScript :value="2"/>
  <MyCounterScript2 :value="3" />
</template>
