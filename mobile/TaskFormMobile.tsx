import React, { useState } from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native'
import { useTaskStore } from '../src/stores/taskStore'

interface TaskFormProps {
  onClose: () => void
}

export default function TaskFormMobile({ onClose }: TaskFormProps) {
  const addTask = useTaskStore((state) => state.addTask)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium' as const,
    assignee: '',
    category: '',
  })

  const handleSubmit = () => {
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
    <ScrollView style={styles.container}>
      <TextInput
        placeholder="Tên công việc *"
        style={styles.input}
        value={formData.title}
        onChangeText={(text) => setFormData({ ...formData, title: text })}
        placeholderTextColor="#9ca3af"
      />

      <TextInput
        placeholder="Mô tả công việc"
        style={[styles.input, styles.textarea]}
        value={formData.description}
        onChangeText={(text) => setFormData({ ...formData, description: text })}
        multiline
        numberOfLines={4}
        placeholderTextColor="#9ca3af"
      />

      <TextInput
        placeholder="Ngày hạn (YYYY-MM-DD)"
        style={styles.input}
        value={formData.dueDate}
        onChangeText={(text) => setFormData({ ...formData, dueDate: text })}
        placeholderTextColor="#9ca3af"
      />

      <View style={styles.row}>
        <TextInput
          placeholder="Người phụ trách"
          style={[styles.input, styles.flex]}
          value={formData.assignee}
          onChangeText={(text) => setFormData({ ...formData, assignee: text })}
          placeholderTextColor="#9ca3af"
        />
        <TextInput
          placeholder="Thể loại"
          style={[styles.input, styles.flex]}
          value={formData.category}
          onChangeText={(text) => setFormData({ ...formData, category: text })}
          placeholderTextColor="#9ca3af"
        />
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Lưu công việc</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
          <Text style={styles.cancelButtonText}>Hủy</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  input: {
    backgroundColor: '#f3f4f6',
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    fontSize: 14,
    color: '#1f2937',
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  flex: {
    flex: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  submitButton: {
    flex: 1,
    backgroundColor: '#4f46e5',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#d1d5db',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#1f2937',
    fontWeight: '600',
    fontSize: 14,
  },
})
