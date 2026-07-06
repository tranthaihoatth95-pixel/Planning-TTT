import React, { useState } from 'react'
import { useTaskStore } from '../stores/taskStore'

interface TaskFormProps {
  onClose: () => void
}

export default function TaskForm({ onClose }: TaskFormProps) {
  const addTask = useTaskStore((state) => state.addTask)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium' as const,
    assignee: '',
    category: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.title) return

    const newTask = {
      id: Date.now().toString(),
      ...formData,
      status: 'pending' as const,
    }

    addTask(newTask)
    setFormData({
      title: '',
      description: '',
      dueDate: '',
      priority: 'medium',
      assignee: '',
      category: '',
    })
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Tên công việc *"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <input
          type="date"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.dueDate}
          onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
        />
      </div>

      <textarea
        placeholder="Mô tả công việc"
        className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        rows={3}
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.priority}
          onChange={(e) =>
            setFormData({
              ...formData,
              priority: e.target.value as 'low' | 'medium' | 'high',
            })
          }
        >
          <option value="low">Ưu tiên thấp</option>
          <option value="medium">Ưu tiên trung bình</option>
          <option value="high">Ưu tiên cao</option>
        </select>

        <input
          type="text"
          placeholder="Người phụ trách"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.assignee}
          onChange={(e) => setFormData({ ...formData, assignee: e.target.value })}
        />

        <input
          type="text"
          placeholder="Thể loại"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        />
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded font-semibold transition-colors"
        >
          Lưu công việc
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded font-semibold transition-colors"
        >
          Hủy
        </button>
      </div>
    </form>
  )
}
