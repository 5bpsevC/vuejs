<script setup lang="ts">
import { ref, watch } from "vue";
import type { ChatMessage } from "@/interfaces";
import ChatBubble from "./ChatBubble.vue";

interface Props {
  messages: ChatMessage[];
}

const { messages } = defineProps<Props>();
const chatRef = ref<HTMLDivElement | null>(null);

watch(() => messages, () => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: "smooth",
    });
  }, 100);
});

</script>

<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
       <ChatBubble :key="message.id" v-for="message in messages"  v-bind="message" />
    </div>
  </div>
</template>
