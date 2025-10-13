import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Project } from '@/interfaces/project.interface';

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>([]);

  return { projects };
});
