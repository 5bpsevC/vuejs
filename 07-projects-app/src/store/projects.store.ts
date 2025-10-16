import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { nanoid } from 'nanoid';
import type { Project } from '@/interfaces/project.interface';
import { useLocalStorage } from '@vueuse/core';

const initialLoad = () => {
  return [
    { id: nanoid(), name: 'Project 1', tasks: [] },
    { id: nanoid(), name: 'Project 2', tasks: [] },
  ];
};

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>('projects', initialLoad()) ?? initialLoad());

  const addProject = (projectName: string) => {
    if (projectName.trim().length === 0) return;

    projects.value.push({
      id: nanoid(),
      name: projectName,
      tasks: [],
    });
  };

  return {
    projects,
    // Getters
    projectList: computed(() => [...projects.value]),

    // Actions
    addProject,
  };
});
