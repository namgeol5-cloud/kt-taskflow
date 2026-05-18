export type Status = 'todo' | 'inprogress' | 'done';

export interface Task {
  id: number;
  title: string;
  status: Status;
  createdAt: number;
}

export const STATUS_META: Record<Status, { label: string; next: Status; color: string }> = {
  todo:       { label: '할 일',   next: 'inprogress', color: 'bg-amber-100 text-amber-700' },
  inprogress: { label: '진행 중', next: 'done',        color: 'bg-blue-100 text-blue-700'  },
  done:       { label: '완료',    next: 'todo',        color: 'bg-green-100 text-green-700' },
};
