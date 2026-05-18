'use client';

import { useState } from 'react';

interface Props {
  onAdd: (title: string) => void;
}

export default function TaskForm({ onAdd }: Props) {
  const [value, setValue] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const title = value.trim();
    if (!title) return;
    onAdd(title);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 bg-white rounded-2xl p-5 shadow-sm">
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="새 업무를 입력하세요..."
        className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none
                   focus:border-indigo-500 transition-colors text-gray-800 placeholder-gray-400"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 active:scale-95
                   text-white text-sm font-semibold rounded-xl transition-all"
      >
        추가
      </button>
    </form>
  );
}
