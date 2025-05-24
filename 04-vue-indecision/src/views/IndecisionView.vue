<script setup lang="ts">
import { ref } from "vue";
import ChatMessages from "@/components/chat/ChatMessages.vue";
import MessageBox from "@/components/chat/MessageBox.vue";
import type { ChatMessage } from "@/interfaces";

const messages = ref<ChatMessage[]>([
  {
    id: crypto.randomUUID(),
    itsMine: true,
    message: "Hello, World!",
  },
  {
    id: crypto.randomUUID(),
    itsMine: false,
    message: "no",
    image: "https://yesno.wtf/assets/no/24-159febcfd655625c38c147b65e5be565.gif",
  },
   
]);
</script>

<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi amigo</span>
    </div>

    <!-- Chat Messages -->
    <ChatMessages :messages="messages" />

    <!-- Message Box -->
    <MessageBox />
  </div>
</template>
