<script>
	// @ts-nocheck

	import { todos } from './../store/store';
	$: console.log($todos);
	let tempTodo = {
		id: 0,
		text: '',
		done: false
	};

	// Your Code
	/*
	on:change={(e) => {
			tempTodo.text = e.target.value;
		}}
		on:keydown={(e) => {
			if (e.key === 'Enter') {
				if (e.target.value === '') return;
				todos.add(e.target.value);
				e.target.value = '';
			}
		}}
	*/
</script>

<div class="-top-8 left-1/2 transform -translate-x-1/2 absolute">
	<form class="flex gap-3">
		<input
			type="text"
			placeholder="Adicione uma nova tarefa"
			bind:value={tempTodo.text}
			class="bg-gray-800 text-white p-4 rounded-md w-30 border-transparent focus:outline-none focus:ring-2 focus:ring-brand-purple-dark focus:ring-opacity-50 border-none focus:border-none focus-within:outline-none duration-200 transition-all"
		/>

		<button
			type="submit"
			class="rounded-2xl p-2 bg-brand-purple flex gap-2 justify-center items-center hover:bg-brand-purple-dark transition-colors duration-200"
			on:click={() => {
				if (tempTodo.text === '') return;
				todos.add({ id: $todos.length + 1, text: tempTodo.text, done: false });
				tempTodo.text = '';
			}}
		>
			<span class="text-white font-bold">Adicionar</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 text-white"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 6v6m0 0v6m0-6h6m-6 0H6"
				/>
			</svg>
		</button>
	</form>
</div>
