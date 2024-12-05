import { ref } from 'vue'
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import type { YesNoResponse } from '@/interfaces/yes-no.response'

export const useChat = () => {
  const messages = ref<ChatMessage[]>([])

  const getHerResponse = async () => {
    const resp = await fetch('https://yesno.wtf/api')
    const data = (await resp.json()) as YesNoResponse
    return data
  }

  // https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits
  const onMessage = async (text: string) => {
    if (text.length === 0) return

    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    })

    // Evaluar si termina con un ?
    if (!text.endsWith('?')) return

    const { answer, image } = await getHerResponse()

    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    })
  }

  return {
    // Properties
    messages,

    // Methods
    onMessage,
  }
}
