<script>
	import { fade } from 'svelte/transition';
	import Input from '../components/input.svelte';
	import TodoList from '../components/todo-list.svelte';
	import Wrapper from '../components/wrapper.svelte';
	import '../global.css';
	let visible = true;
</script>

{#if visible}
	<section class="flex flex-col gap-4 flex-1 relative w-full h-full items-center" transition:fade>
		<Wrapper>
			<Input />
		</Wrapper>
		<Wrapper>
			<TodoList />
		</Wrapper>
	</section>
{/if}
