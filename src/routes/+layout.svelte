<script>
	import Header from '../components/header.svelte';
</script>

<main class="w-screen h-screen bg-brand-gray-600 flex items-center flex-col overflow-y-auto">
	<Header />
	<slot />
</main>
