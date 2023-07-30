<script>
	// @ts-nocheck

	import { v4 as uuidv4 } from 'uuid';

	import { todos } from './../store/store';
	let tempTodo = {
		id: 0,
		text: '',
		done: false
	};
	function pushTodo() {
		if (tempTodo.text === '') return;
		todos.add({
			id: uuidv4(),
			text: tempTodo.text,
			done: false
		});
		tempTodo.text = '';
	}
	let plus = '/plus.svg';
</script>

<div class=" flex gap-3 -top-8 left-1/2 transform -translate-x-1/2 absolute w-full">
	<input
		type="text"
		placeholder="Adicione uma nova tarefa"
		class="bg-brand-gray-500 w-full text-white p-4 rounded-md ring-offset-2 ring-0 ring-offset-transparent ring-transparent focus:ring-offset-brand-purple outline-none transition-all duration-200 focus:ring-2 focus:ring-brand-purple focus:outline-none focus:border-transparent"
		bind:value={tempTodo.text}
		on:keydown={(e) => {
			if (e.key === 'Enter') {
				if (e.target.value === '') return;
				pushTodo();
				e.target.value = '';
			}
		}}
	/>

	<button
		class="rounded-2xl p-4 bg-brand-blue-dark flex justify-center items-center hover:bg-brand-blue transition-colors duration-200"
		on:click={() => {
			if (tempTodo.text === '') return;
			pushTodo();
			tempTodo.text = '';
		}}
	>
		<span class="text-white font-bold">Criar</span>
		<img src={plus} alt="plus" class="w-6 ml-2" />
	</button>
</div>
