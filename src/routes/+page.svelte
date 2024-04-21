<script>
	import { foo } from "$lib/foo.js";
	import SomeComponent from "$lib/SomeComponent.svelte";

	let open = $state(false);

	foo();
</script>

<p>Current open status: {open}</p>

<SomeComponent bind:open />

<button onclick={() => (open = !open)}>Parent Toggle</button>
