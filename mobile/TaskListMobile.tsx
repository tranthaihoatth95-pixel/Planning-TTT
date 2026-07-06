import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native'
import { useTaskStore } from '../src/stores/taskStore'

export default function TaskListMobile() {
  const tasks = useTaskStore((state) => state.getTasks())
  const updateTask = useTaskStore((state) => state.updateTask)
  const deleteTask = useTaskStore((state) => state.deleteTask)

  if (tasks.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Chưa có công việc nào</Text>
        <Text style={styles.emptySubtext}>Thêm một công việc mới để bắt đầu!</Text>
      </View>
    )
  }

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item: task }) => (
        <View style={styles.taskCard}>
          <View style={styles.taskHeader}>
            <TouchableOpacity
              onPress={() =>
                updateTask(task.id, {
                  status: task.status === 'completed' ? 'pending' : 'completed',
                })
              }
              style={styles.checkbox}
            >
              <Text style={styles.checkboxText}>
                {task.status === 'completed' ? '✓' : '○'}
              </Text>
            </TouchableOpacity>
            <Text
              style={[
                styles.taskTitle,
                task.status === 'completed' && styles.taskTitleCompleted,
              ]}
            >
              {task.title}
            </Text>
          </View>

          {task.description && (
            <Text style={styles.taskDescription}>{task.description}</Text>
          )}

          <View style={styles.tagsContainer}>
            {task.category && (
              <View style={styles.tag}>
                <Text style={styles.tagText}>{task.category}</Text>
              </View>
            )}
            <View
              style={[
                styles.priorityTag,
                task.priority === 'high'
                  ? styles.priorityHigh
                  : task.priority === 'medium'
                    ? styles.priorityMedium
                    : styles.priorityLow,
              ]}
            >
              <Text style={styles.tagText}>
                {task.priority === 'high'
                  ? 'Cao'
                  : task.priority === 'medium'
                    ? 'Trung bình'
                    : 'Thấp'}
              </Text>
            </View>
            {task.assignee && (
              <View style={styles.assigneeTag}>
                <Text style={styles.tagText}>{task.assignee}</Text>
              </View>
            )}
          </View>

          {task.dueDate && (
            <Text style={styles.dueDate}>
              Hạn: {new Date(task.dueDate).toLocaleDateString('vi-VN')}
            </Text>
          )}

          <TouchableOpacity
            onPress={() => deleteTask(task.id)}
            style={styles.deleteButton}
          >
            <Text style={styles.deleteButtonText}>Xóa</Text>
          </TouchableOpacity>
        </View>
      )}
      scrollEnabled={false}
    />
  )
}

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6b7280',
  },
  emptySubtext: {
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 8,
  },
  taskCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#d1d5db',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxText: {
    fontSize: 16,
    color: '#4f46e5',
  },
  taskTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
  },
  taskTitleCompleted: {
    textDecorationLine: 'line-through',
    color: '#9ca3af',
  },
  taskDescription: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 8,
    marginLeft: 44,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 8,
    marginLeft: 44,
  },
  tag: {
    backgroundColor: '#dbeafe',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  priorityTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  priorityHigh: {
    backgroundColor: '#fee2e2',
  },
  priorityMedium: {
    backgroundColor: '#fef3c7',
  },
  priorityLow: {
    backgroundColor: '#dcfce7',
  },
  assigneeTag: {
    backgroundColor: '#f3e8ff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  tagText: {
    fontSize: 11,
    color: '#374151',
    fontWeight: '500',
  },
  dueDate: {
    fontSize: 11,
    color: '#6b7280',
    marginLeft: 44,
    marginBottom: 8,
  },
  deleteButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 0,
  },
  deleteButtonText: {
    color: '#ef4444',
    fontSize: 12,
    fontWeight: '500',
  },
})
