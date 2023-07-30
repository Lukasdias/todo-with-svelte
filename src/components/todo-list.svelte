<script>
	// @ts-nocheck

	import { fade, fly } from 'svelte/transition';
	import '../global.css';
	import { todos } from './../store/store';
	import TodoItem from './todo-item.svelte';
	let clipboard = '/clipboard.png';
</script>

<div
	class="flex flex-col gap-4 flex-1 justify-start items-center relative mt-20 w-full relative overflow-hidden"
	transition:fade
>
	<div class=" flex w-full justify-between items-center">
		<div class="flex items-center">
			<span class="text-sm text-brand-blue font-bold">Tarefas Criadas</span>
			<span
				class="text-sm text-white px-2 flex justify-center items-center rounded-2xl bg-brand-gray-500 font-bold ml-2"
				>{$todos.length}</span
			>
		</div>
		<div class="flex items-center">
			<span class="text-sm text-brand-purple font-bold">Concluídas</span>
			<span
				class="text-sm text-white px-2 flex justify-center items-center rounded-2xl bg-brand-gray-500 font-bold ml-2"
				>{$todos.filter((todo) => todo.done === true).length} de {$todos.length}</span
			>
		</div>
	</div>
	{#if $todos.length === 0}
		<div
			transition:fly={{ x: 100, duration: 250 }}
			class="flex flex-col items-center justify-center w-full border-t border-t-brand-gray-400 rounded-tr-3xl rounded-tl-3xl py-8 px-4"
		>
			<img src={clipboard} alt="clipboard" class="w-14 h-14 mb-4" />
			<span class="text-brand-gray-300 mb-2 font-bold"
				>Você ainda não tem tarefas cadastradas
			</span>
			<span class="text-brand-gray-300">Crie tarefas e organize seus itens a fazer</span>
		</div>
	{/if}
	{#each $todos as todo}
		<TodoItem {...todo} />
	{/each}
</div>
