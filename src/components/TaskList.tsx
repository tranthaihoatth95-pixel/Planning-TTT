import React from 'react'
import { useTaskStore } from '../stores/taskStore'
import { Trash2, CheckCircle2, Clock } from 'lucide-react'

export default function TaskList() {
  const tasks = useTaskStore((state) => state.getTasks())
  const updateTask = useTaskStore((state) => state.updateTask)
  const deleteTask = useTaskStore((state) => state.deleteTask)

  if (tasks.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500 text-lg">Chưa có công việc nào. Thêm một công việc mới!</p>
      </div>
    )
  }

  return (
    <div className="divide-y">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="p-4 md:p-6 hover:bg-gray-50 transition-colors border-l-4 border-transparent hover:border-indigo-500"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.status === 'completed'}
                  onChange={(e) =>
                    updateTask(task.id, {
                      status: e.target.checked ? 'completed' : 'pending',
                    })
                  }
                  className="w-5 h-5 cursor-pointer"
                />
                <h3
                  className={`text-lg font-semibold ${
                    task.status === 'completed' ? 'line-through text-gray-400' : 'text-gray-800'
                  }`}
                >
                  {task.title}
                </h3>
              </div>
              {task.description && (
                <p className="text-gray-600 mt-2 ml-8 text-sm">{task.description}</p>
              )}
              <div className="flex flex-wrap gap-2 mt-3 ml-8">
                {task.category && (
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    {task.category}
                  </span>
                )}
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    task.priority === 'high'
                      ? 'bg-red-100 text-red-800'
                      : task.priority === 'medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                  }`}
                >
                  {task.priority === 'high'
                    ? 'Cao'
                    : task.priority === 'medium'
                      ? 'Trung bình'
                      : 'Thấp'}
                </span>
                {task.assignee && (
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                    {task.assignee}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              {task.dueDate && (
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  {new Date(task.dueDate).toLocaleDateString('vi-VN')}
                </div>
              )}
              <button
                onClick={() =>
                  deleteTask(task.id)
                }
                className="text-red-500 hover:text-red-700 transition-colors p-2"
                title="Xóa"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
