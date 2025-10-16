<script lang="ts" setup>
import { ref, watch } from 'vue';

interface Props {
  open: boolean;
  title: string;
  subTitle?: string;
  placeholder?: string;
}

// Se definen los props usando la interfaz Props
const props = defineProps<Props>();

// Se definen los eventos que el componente puede emitir
const emits = defineEmits<{
  close: [void]; // Evento para cerrar el modal
  value: [text: string]; // Evento que envía el valor del input
}>();

// inputValue guarda el texto que el usuario escribe en el input
const inputValue = ref('');

// inputValue guarda el texto que el usuario escribe en el input
const inputRef = ref<HTMLInputElement | null>(null);

// Se observa cualquier cambio en las props
watch(props, (newProps) => {
  // Si el modal se abre, se enfoca automáticamente el input
  if (newProps.open) {
    inputRef.value?.focus();
  }
});

// Función que se ejecuta al enviar el valor del input
const submitValue = () => {
  // Si el input está vacío, se vuelve a enfocar
  if (!inputValue.value) {
    inputRef.value?.focus();
    return;
  }

  // Emite el valor del input (eliminando espacios extra)
  emits('value', inputValue.value.trim());

  // Emite el evento para cerrar el modal
  emits('close');

  // Limpia el input
  inputValue.value = '';
};
</script>

<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <h3 class="font-bold text-lg">{{ title }}</h3>
      <p v-if="subTitle" class="py-4">{{ subTitle }}</p>

      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input
            ref="inputRef"
            type="text"
            :placeholder="placeholder ?? 'Ingrese un valor'"
            class="input input-bordered input-primary w-full flex-1"
            v-model="inputValue"
          />
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex justify-end mt-5">
            <button @click="$emit('close')" class="btn mr-4">Close</button>
            <button type="submit" class="btn btn-primary">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>

  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-40 w-screen h-screen"
  ></div>
</template>
