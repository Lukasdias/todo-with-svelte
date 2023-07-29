<script>
	let count = 0;

	function addCount() {
		count += 1;
	}
	function minusCount() {
		count -= 1;
	}
	function clearCount() {
		count = 0;
	}

	import Count from './+count.svelte';
</script>

<main class="w-screen h-screen bg-slate-900 flex justify-center text-center items-center">
	<section class="flex flex-col gap-4">
		<h1 class="text-white">Hello Svelte World</h1>
		<Count {count} {addCount} {minusCount} {clearCount} />
	</section>
</main>
