// @ts-nocheck
import { writable } from 'svelte/store';

function todo() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		add: (todo) => update((todos) => [...todos, todo]),
		remove: (id) => update((todos) => todos.filter((todo) => todo.id !== id)),
		toggle: (id) =>
			update((todos) =>
				todos.map((todo) => (todo.id === id ? { ...todo, done : !todo.done } : todo))
			),
		reset: () => set([]),
	};
}

export const todos = todo();
