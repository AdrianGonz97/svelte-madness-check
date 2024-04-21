<script>
	import { noop } from "$lib/foo.js";
	import SomeComponent from "$lib/SomeComponent.svelte";

	let open = $state(false);

	noop();
</script>

<p>Current open status: {open}</p>

<SomeComponent bind:open />

<button onclick={() => (open = !open)}>Parent Toggle</button>
