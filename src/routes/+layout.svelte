<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Maharani Rosyadah — Portofolio Siswa 2026</title>
	<meta
		name="description"
		content="Portofolio Maharani Rosyadah, Siswi SMK PPLG. Membangun antarmuka web rapi, cepat, dan sistem informasi sekolah yang fungsional."
	/>
</svelte:head>

{@render children()}
