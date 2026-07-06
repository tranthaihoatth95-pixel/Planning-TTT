import React, { useState } from 'react'
import { useTaskStore } from '../stores/taskStore'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import { Calendar, CheckCircle, AlertCircle } from 'lucide-react'

export default function Dashboard() {
  const [showForm, setShowForm] = useState(false)
  const tasks = useTaskStore((state) => state.getTasks())

  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === 'completed').length,
    pending: tasks.filter((t) => t.status === 'pending').length,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Planning TTT</h1>
            <p className="text-gray-600 mt-2">Quản lý công việc & cảnh báo xử lý</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            {showForm ? 'Đóng' : '+ Thêm công việc'}
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Tổng công việc</p>
                <p className="text-3xl font-bold text-gray-800">{stats.total}</p>
              </div>
              <Calendar className="w-12 h-12 text-blue-400" />
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Đã hoàn thành</p>
                <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
              </div>
              <CheckCircle className="w-12 h-12 text-green-400" />
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Chưa xử lý</p>
                <p className="text-3xl font-bold text-orange-600">{stats.pending}</p>
              </div>
              <AlertCircle className="w-12 h-12 text-orange-400" />
            </div>
          </div>
        </div>

        {/* Form */}
        {showForm && (
          <div className="bg-white rounded-lg p-6 shadow-md mb-8">
            <TaskForm onClose={() => setShowForm(false)} />
          </div>
        )}

        {/* Task List */}
        <div className="bg-white rounded-lg shadow-md">
          <TaskList />
        </div>
      </div>
    </div>
  )
}
