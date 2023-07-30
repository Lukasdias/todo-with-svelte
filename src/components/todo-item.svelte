<script>
	import { fade } from 'svelte/transition';
	import { todos } from './../store/store';
	export let id = 0;
	export let text =
		'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.';
	export let done = false;
	function toggleDone() {
		todos.toggle(id);
	}
	function remove() {
		todos.remove(id);
	}
</script>

<div
	class="bg-brand-gray-400 p-4 rounded-xl border-transparent focus:outline-none focus:ring-2 focus:ring-brand-purple-dark focus:ring-opacity-50 border-none focus:border-none focus-within:outline-none duration-200 transition-all w-full items-center flex gap-3"
	transition:fade={{
		delay: 350,
		duration: 200
	}}
>
	<input
		type="checkbox"
		class={'h-6 w-6 rounded-full bg-transparent border-brand-blue border-2 focus:outline-none focus:ring-2 focus:ring-brand-purple-dark focus:ring-opacity-50 transition-all duration-200 checked:bg-brand-purple-dark checked:border-transparent'}
		bind:checked={done}
		on:click={toggleDone}
	/>
	<span class="text-white text-sm w-full">{text}</span>
	<button class="group" on:click={remove}>
		<img src="/trash.svg" alt="trash" class="w-7 h-7 hover:text-brand-purple" />
	</button>
</div>
