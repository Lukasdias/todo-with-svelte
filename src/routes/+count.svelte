<script>
	export let count;
	export let addCount;
	export let minusCount;
	export let clearCount;
</script>

<h2 class="text-white">Count: {count}</h2>
<button
	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	on:click={addCount}>Add</button
>
<button
	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	on:click={minusCount}>Minus</button
>
<button
	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	on:click={clearCount}>Clear</button
>
