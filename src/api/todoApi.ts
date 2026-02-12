import { request } from '@/api'
import type { Todo } from '@/types/todo'

export const todoApi = {
	getTodos() {
		return request<Todo[]>('/todos')
	},

	createTodo(todo: Omit<Todo, 'id'>) {
		return request<Todo>('/todos', {
			method: 'POST',
			body: JSON.stringify(todo),
		})
	},

	updateTodo(id: number, todo: Partial<Todo>) {
		return request<Todo>(`/todos/${id}`, {
			method: 'PUT',
			body: JSON.stringify(todo),
		})
	},

	deleteTodo(id: number) {
		return request(`/todos/${id}`, {
			method: 'DELETE',
		})
	},
}