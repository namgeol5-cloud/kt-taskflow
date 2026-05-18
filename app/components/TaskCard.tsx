'use client';

import { Task, STATUS_META } from '../types';

interface Props {
  task: Task;
  onDelete: (id: number) => void;
  onCycle: (id: number) => void;
}

export default function TaskCard({ task, onDelete, onCycle }: Props) {
  const meta = STATUS_META[task.status];

  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm
                    hover:-translate-y-0.5 hover:shadow-md transition-all duration-150 animate-fadeIn">
      <span
        className={`text-base font-medium flex-1 min-w-0 truncate
          ${task.status === 'done' ? 'line-through text-gray-400' : 'text-gray-800'}`}
      >
        {task.title}
      </span>

      <button
        onClick={() => onCycle(task.id)}
        title="클릭하여 상태 변경"
        className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer
                    transition-opacity hover:opacity-70 ${meta.color}`}
      >
        {meta.label}
      </button>

      <button
        onClick={() => onDelete(task.id)}
        title="삭제"
        className="shrink-0 text-gray-300 hover:text-red-500 hover:bg-red-50
                   rounded-lg p-1.5 transition-colors text-base leading-none"
      >
        ✕
      </button>
    </div>
  );
}
