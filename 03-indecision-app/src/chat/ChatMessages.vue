<template>
  <div ref="chatRef" class="chat-container flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
    </div>
  </div>
</template>



<script setup lang="ts">
import { ref, watch } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue'

interface Props {
  messages: ChatMessage[]
}

const props = defineProps<Props>()

const chatRef = ref<HTMLElement|null>(null)

watch(props.messages, () => {
  chatRef.value?.scrollTo({ top: chatRef.value.scrollHeight, behavior: "smooth" });
});

</script>

<style scoped>
.chat-container {
  scrollbar-width: thin; /* Navegadores como Firefox */
  scrollbar-color: slategray transparent;
}

.chat-container::-webkit-scrollbar {
  width: 10px;
  border-radius: 8px; /* Bordes redondeados */
  background-color: transparent; /* Fondo del scroll */
}

.chat-container::-webkit-scrollbar-thumb {
  background-color: #1e293b; /* Color slate-800 */
  border-radius: 8px; /* Bordes redondeados */
}

.chat-container::-webkit-scrollbar-thumb:hover {
  background-color: #334155; /* Color más claro para hover */
}
</style>
