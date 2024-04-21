<script lang="ts">
	import { doSomething } from "./state.svelte.js";
	let { open = $bindable() }: { open: boolean } = $props();
</script>

<button
	onclick={() =>
		doSomething(
			() => open,
			(v) => (open = v)
		)}>Component Toggle</button
>
