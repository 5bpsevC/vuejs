<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Buenos Aires IA</span>
    </div>

    <!-- Chat Messages -->
    <ChatMessages :messages="messages"/>

    <!-- Message Box -->
    <MessageBox />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/chat/ChatMessages.vue'
import MessageBox from '@/chat/MessageBox.vue'
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import { ref } from 'vue'

const messages = ref<ChatMessage[]>([
  {
    id: 1,
    message: 'Hello, Buenos Aires',
    itsMine: true,
    image: "https://yesno.wtf/assets/yes/11-a23cbde4ae018bbda812d2d8b2b8fc6c.gif"
  },
  {
    id: 2,
    message: "no",
    itsMine: false,
    image: "https://yesno.wtf/assets/no/23-5fe6c1ca6c78e7bf9a7cf43e406fb8db.gif"
  },
])
</script>
