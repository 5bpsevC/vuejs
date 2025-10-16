<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

// Props con valor por defecto
const props = withDefaults(defineProps<Props>(), {
  position: 'bottom-right',
});

defineEmits(['click']);

// Mapeo de posición a clases Tailwind reales
const positionClasses = computed(() => {
  switch (props.position) {
    case 'top-left':
      return 'top-10 left-10';
    case 'top-right':
      return 'top-10 right-10';
    case 'bottom-left':
      return 'bottom-10 left-10';
    case 'bottom-right':
    default:
      return 'bottom-10 right-10';
  }
});
</script>

<template>
  <button @click="$emit('click')" :class="['btn btn-circle btn-secondary fixed', positionClasses]">
    <slot />
  </button>
</template>
