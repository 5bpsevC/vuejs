<script setup lang="ts">
import ChatBubble from "./ChatBubble.vue";
</script>

<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble :its-mine="true" message="Hello, World!" />

      <ChatBubble :its-mine="false" message="'no'" image="https://yesno.wtf/assets/no/24-159febcfd655625c38c147b65e5be565.gif"/>
    </div>
  </div>
</template>
