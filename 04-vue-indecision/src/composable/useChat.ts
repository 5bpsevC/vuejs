import { ref } from "vue";
import type { ChatMessage, YesNoResponse } from "@/interfaces";

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const getHerResponse = async () => {
    const resp = await fetch("https://yesno.wtf/api");
    const data = (await resp.json()) as YesNoResponse;
    return data;
  };

  const onMessage = async (text: string) => {
    if (text.length === 0) return;

    messages.value.push({
      id: crypto.randomUUID(),
      itsMine: true,
      message: text,
    });

    // Evaluar si termina con un ?
    if (!text.endsWith("?")) return;

    // await sleep(1.5);
    const { answer, image } = await getHerResponse();

    messages.value.push({
      id: crypto.randomUUID(),
      itsMine: false,
      message: answer,
      image: image,
    });
  };

  return {
    // Properties
    messages,

    // Methods
    onMessage,
  };
};
