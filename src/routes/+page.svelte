<script>
	import '../global.css';
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

	import Count from '../components/count.svelte';
</script>

<section class="flex flex-col gap-4">
	<h1 class="text-white">Hello Svelte World</h1>
	<Count {count} {addCount} {minusCount} {clearCount} />
</section>
