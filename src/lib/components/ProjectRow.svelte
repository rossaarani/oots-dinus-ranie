<script lang="ts">
	import type { Project } from '$lib/data';

	type Props = {
		project: Project;
		index: number;
	};

	let { project, index }: Props = $props();

	const layoutClasses = ['w1', 'w2', 'w3', 'w4'];
	const layoutClass = $derived(layoutClasses[index % layoutClasses.length]);

	// Stylized accent palettes for editorial preview cards
	const accents = [
		{ border: '#E8553C', bg: 'rgba(232, 85, 60, 0.06)', tag: 'SVELTEKIT' },
		{ border: '#3B82F6', bg: 'rgba(59, 130, 246, 0.06)', tag: 'TAILWIND' },
		{ border: '#10B981', bg: 'rgba(16, 185, 129, 0.06)', tag: 'TYPESCRIPT' },
		{ border: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.06)', tag: 'FULLSTACK' }
	];
	const accent = $derived(accents[index % accents.length]);
</script>

<article class="proj {layoutClass} rev">
	<a
		href={project.href ?? '#kontak'}
		target={project.href ? '_blank' : '_self'}
		rel="noreferrer"
		aria-label="{project.title} — lihat detail proyek"
		class="ph group"
	>
		<span class="coord">{project.coord}</span>

		<!-- Editorial Mockup Preview Frame -->
		<div
			class="card-preview relative flex h-full min-h-[220px] w-full flex-col justify-between overflow-hidden border border-line bg-surface p-6 font-mono select-none sm:min-h-[280px] lg:min-h-[340px] lg:p-8"
			style="background: radial-gradient(circle at 10% 20%, {accent.bg}, transparent 50%), var(--surface);"
		>
			<!-- Top bar of mockup -->
			<div class="flex items-center justify-between border-b border-line pb-3">
				<div class="flex items-center gap-2">
					<span class="inline-block h-2 w-2 rounded-full" style="background-color: {accent.border}"
					></span>
					<span class="text-[10px] tracking-[0.18em] text-muted uppercase"
						>SRC/PROJECT_{String(index + 1).padStart(2, '0')}</span
					>
				</div>
				<span class="text-[10px] tracking-[0.16em] text-muted">{project.year}</span>
			</div>

			<!-- Center visual: Editorial typographic layout & interface abstract -->
			<div class="my-auto py-6">
				<div class="flex items-baseline gap-3">
					<span
						class="font-serif text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl"
					>
						{project.title}
					</span>
				</div>
				<div class="mt-3 flex flex-wrap items-center gap-2">
					<span
						class="border border-line px-2 py-0.5 text-[9px] tracking-[0.16em] text-ink uppercase"
					>
						{accent.tag}
					</span>
					<span class="text-[10px] tracking-[0.14em] text-muted">
						// {project.stack}
					</span>
				</div>
				<div class="mt-4 flex max-w-[420px] flex-col gap-1.5 opacity-60">
					<div class="h-1.5 w-full rounded-sm bg-line"></div>
					<div class="h-1.5 w-4/5 rounded-sm bg-line"></div>
					<div class="h-1.5 w-3/5 rounded-sm bg-line"></div>
				</div>
			</div>

			<!-- Bottom bar with interactive status & view badge -->
			<div
				class="flex items-center justify-between border-t border-line pt-3 text-[10px] tracking-[0.16em]"
			>
				<span class="text-muted">{project.category}</span>
				<span class="flex items-center gap-1.5 font-medium text-verm">
					<span>BUKA PROYEK</span>
					<svg
						width="12"
						height="12"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M7 17 17 7M9 7h8v8" />
					</svg>
				</span>
			</div>
		</div>
	</a>

	<!-- Project Metadata -->
	<div class="pmeta">
		<h3 class="text-ink">{project.title}</h3>
		<span class="ct">{project.category}</span>
		<p class="oc text-muted">
			{project.description}
			<b class="text-ink">— {project.highlight}.</b>
		</p>
	</div>
</article>
