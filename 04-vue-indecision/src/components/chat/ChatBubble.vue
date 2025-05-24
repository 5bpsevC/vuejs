<script setup lang="ts">
interface Props {
  message: string;
  itsMine: boolean;
  image?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="flex justify-end" v-if="itsMine">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
      {{ message }}
    </div>
  </div>

  <div class="flex" v-else>
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">{{ message }}</span>
      <img
        class="w-52 h-52 object-cover rounded-md"
        v-if="image"
        :src="image"
        alt="YesNoImage"
      />
    </div>
  </div>
</template>
