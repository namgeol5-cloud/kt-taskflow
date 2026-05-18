'use client';

import { useState } from 'react';
import { useTasks } from './hooks/useTasks';
import TaskForm from './components/TaskForm';
import TaskCard from './components/TaskCard';
import FilterBar from './components/FilterBar';

type Filter = 'all' | 'todo' | 'inprogress' | 'done';

export default function Home() {
  const { tasks, addTask, deleteTask, cycleStatus } = useTasks();
  const [filter, setFilter] = useState<Filter>('all');

  const visible = filter === 'all' ? tasks : tasks.filter(t => t.status === filter);

  const total      = tasks.length;
  const inprogress = tasks.filter(t => t.status === 'inprogress').length;
  const done       = tasks.filter(t => t.status === 'done').length;

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center px-4 py-12">
      <div className="w-full max-w-2xl flex flex-col gap-6">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Task<span className="text-indigo-600">Flow</span>
          </h1>
          <p className="text-gray-500 mt-2 text-sm">업무를 효율적으로 관리하세요</p>
        </div>

        {/* Add Task */}
        <TaskForm onAdd={addTask} />

        {/* Filters */}
        <FilterBar current={filter} onChange={setFilter} />

        {/* Task List */}
        <div className="flex flex-col gap-3">
          {visible.length === 0 ? (
            <p className="text-center text-gray-400 py-16 text-sm">
              {filter === 'all' ? '등록된 업무가 없습니다.' : '해당 상태의 업무가 없습니다.'}
            </p>
          ) : (
            visible.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onDelete={deleteTask}
                onCycle={cycleStatus}
              />
            ))
          )}
        </div>

        {/* Stats */}
        {total > 0 && (
          <p className="text-center text-gray-400 text-xs">
            전체 {total}개 · 진행 중 {inprogress}개 · 완료 {done}개
          </p>
        )}
      </div>
    </main>
  );
}
