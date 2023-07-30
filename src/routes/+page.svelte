<script>
	// @ts-nocheck

	import { fade } from 'svelte/transition';
	import Input from '../components/input.svelte';
	import TodoItem from '../components/todo-item.svelte';
	import '../global.css';
	import { todos } from './../store/store';
	let visible = true;
</script>

{#if visible}
	<section class="flex flex-col gap-4 flex-1 justify-center items-center relative" transition:fade>
		<Input />
		{#if $todos.length === 0}
			<p class="text-2xl text-white font-bold">No todos</p>
		{/if}
		{#each $todos as todo (todo.id)}
			<TodoItem text={todo.text} done={todo.done} index={todo.id} />
		{/each}
	</section>
{/if}
