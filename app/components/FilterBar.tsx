'use client';

type Filter = 'all' | 'todo' | 'inprogress' | 'done';

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all',        label: '전체'   },
  { value: 'todo',       label: '할 일'  },
  { value: 'inprogress', label: '진행 중' },
  { value: 'done',       label: '완료'   },
];

interface Props {
  current: Filter;
  onChange: (f: Filter) => void;
}

export default function FilterBar({ current, onChange }: Props) {
  return (
    <div className="flex gap-2">
      {FILTERS.map(f => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all
            ${current === f.value
              ? 'bg-indigo-600 border-indigo-600 text-white'
              : 'bg-white border-gray-200 text-gray-500 hover:border-indigo-400 hover:text-indigo-600'
            }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
