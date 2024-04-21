export function doSomething(get: () => boolean, set: (v: boolean) => void) {
	const v = get();
	set(!v);
}
