import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native'
import { useTaskStore } from '../src/stores/taskStore'
import TaskFormMobile from './TaskFormMobile'
import TaskListMobile from './TaskListMobile'

export default function App() {
  const [showForm, setShowForm] = React.useState(false)
  const tasks = useTaskStore((state) => state.getTasks())
  const { width } = useWindowDimensions()

  // Optimized for foldable devices
  const isFoldable = width > 768

  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === 'completed').length,
    pending: tasks.filter((t) => t.status === 'pending').length,
  }

  return (
    <ScrollView style={[styles.container, isFoldable && styles.containerFoldable]}>
      <View style={styles.header}>
        <Text style={styles.title}>Planning TTT</Text>
        <Text style={styles.subtitle}>Quản lý công việc & cảnh báo xử lý</Text>
      </View>

      {/* Stats */}
      <View style={[styles.statsContainer, isFoldable && styles.statsContainerFoldable]}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{stats.total}</Text>
          <Text style={styles.statLabel}>Tổng công việc</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={[styles.statNumber, styles.statCompleted]}>{stats.completed}</Text>
          <Text style={styles.statLabel}>Đã hoàn thành</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={[styles.statNumber, styles.statPending]}>{stats.pending}</Text>
          <Text style={styles.statLabel}>Chưa xử lý</Text>
        </View>
      </View>

      {/* Add Task Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setShowForm(!showForm)}
      >
        <Text style={styles.addButtonText}>
          {showForm ? 'Đóng' : '+ Thêm công việc'}
        </Text>
      </TouchableOpacity>

      {/* Form */}
      {showForm && (
        <View style={styles.formContainer}>
          <TaskFormMobile onClose={() => setShowForm(false)} />
        </View>
      )}

      {/* Task List */}
      <TaskListMobile />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 12,
  },
  containerFoldable: {
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'column',
    gap: 12,
    marginBottom: 20,
  },
  statsContainerFoldable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    flex: 1,
    minHeight: 80,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  statCompleted: {
    color: '#10b981',
  },
  statPending: {
    color: '#f97316',
  },
  addButton: {
    backgroundColor: '#4f46e5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  formContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
})
