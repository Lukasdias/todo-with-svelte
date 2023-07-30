<script>
	// @ts-nocheck
	import { fade } from 'svelte/transition';
	export let text = 'test-todo-component';
	export let done = false;
	let show = true;
</script>

{#if show}
	<div
		class="bg-gray-800 p-4 rounded-md w-30 border-transparent focus:outline-none focus:ring-2 focus:ring-brand-purple-dark focus:ring-opacity-50 border-none focus:border-none focus-within:outline-none duration-200 transition-all"
		class:done
		transition:fade
	>
		<div class="flex items-center gap-2">
			<input
				type="checkbox"
				checked={done}
				class="h-6 w-6 rounded-md border-2 border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple-dark focus:ring-opacity-50"
				on:change={() => {
					done = !done;
				}}
			/>
			<span class="text-white font-bold">{text}</span>
		</div>
	</div>
{/if}
