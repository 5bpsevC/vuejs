import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { nanoid } from 'nanoid';
import { useLocalStorage } from '@vueuse/core';

// Definimos el store con Pinia
export const useProjectsStore = defineStore('projects', () => {
  // Estado: Lista de proyectos persistida en localStorage
  const projects = ref(useLocalStorage<Project[]>('projects', []));

  // Acción: Agrega un nuevo proyecto con un nombre dado
  const addProject = (name: string) => {
    if (name.length === 0) return; // No agregar si el nombre está vacío

    projects.value.push({
      id: nanoid(),
      name: name,
      tasks: [], // Sin tareas inicialmente
    });
  };

  // Acción: Agrega una tarea a un proyecto específico
  const addTaskToProject = (projectId: string, taskName: string) => {
    if (taskName.trim().length === 0) return; // No agregar si está vacía

    // Buscar el proyecto por su ID
    const project = projects.value.find((p) => p.id === projectId);
    if (!project) return;

    // Agregar la tarea al proyecto
    project.tasks.push({
      id: nanoid(), // ID único para la tarea
      name: taskName,
    });
  };

  // Acción: Cambia el estado (completado / no completado) de una tarea
  const toggleTask = (projectId: string, taskId: string) => {
    const project = projects.value.find((p) => p.id === projectId);
    if (!project) return;

    const task = project.tasks.find((t) => t.id === taskId);
    if (!task) return;

    // Si ya está completada, se desmarca. Si no, se marca como completada con la fecha actual
    task.completedAt = task.completedAt ? undefined : new Date();
  };

  return {
    // === Estado ===
    projects, // Lista de proyectos reactiva

    // === Getters ===

    // Devuelve una copia de la lista de proyectos
    projectList: computed(() => [...projects.value]),

    // Devuelve true si no hay proyectos
    noProjects: computed(() => projects.value.length === 0),

    // Devuelve información de cada proyecto con estadísticas de tareas completadas
    projectsWithCompletion: computed(() => {
      return projects.value.map((project) => {
        const total = project.tasks.length;
        const completed = project.tasks.filter((t) => t.completedAt).length;
        const completion = total === 0 ? 0 : (completed / total) * 100;

        return {
          id: project.id,
          name: project.name,
          taskCount: total,
          completion: Math.round(completion), // Porcentaje de completado redondeado
        };
      });

      // Estructura devuelta:
      // {
      //   id,
      //   name,
      //   taskCount,
      //   completion,
      // }
    }),

    // === Acciones ===
    addProject,
    addTaskToProject,
    toggleTask,
  };
});
