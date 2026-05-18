'use client';

import { useState, useEffect } from 'react';
import { Task, Status, STATUS_META } from '../types';

const STORAGE_KEY = 'taskflow_tasks';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setTasks(JSON.parse(stored));
    } catch {
      // ignore
    }
  }, []);

  function persist(next: Task[]) {
    setTasks(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function addTask(title: string) {
    persist([{ id: Date.now(), title, status: 'todo', createdAt: Date.now() }, ...tasks]);
  }

  function deleteTask(id: number) {
    persist(tasks.filter(t => t.id !== id));
  }

  function cycleStatus(id: number) {
    persist(tasks.map(t =>
      t.id === id ? { ...t, status: STATUS_META[t.status].next as Status } : t
    ));
  }

  return { tasks, addTask, deleteTask, cycleStatus };
}
