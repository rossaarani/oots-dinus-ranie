<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import { projects, services, profile } from '$lib/data';
	import ProjectRow from '$lib/components/ProjectRow.svelte';

	type Theme = 'light' | 'dark';
	type Status = 'idle' | 'loading' | 'success' | 'error';

	let theme: Theme = $state('light');
	let status: Status = $state('idle');
	let activeSection = $state('proyek');

	// Form state
	let fname = $state('');
	let femail = $state('');
	let fmsg = $state('');
	let formError = $state('');
	let newsletterEmail = $state('');
	let newsletterMsg = $state('');

	function handleContactSubmit(e: Event) {
		formError = '';
		if (!fname.trim()) {
			e.preventDefault();
			formError = 'Nama lengkap kamu wajib diisi.';
			return;
		}
		if (!femail.trim() || !femail.includes('@')) {
			e.preventDefault();
			formError = 'Format email belum valid.';
			return;
		}
		if (!fmsg.trim()) {
			e.preventDefault();
			formError = 'Tulis pesan kamu terlebih dahulu.';
			return;
		}
	}

	function handleNewsletter(e: Event) {
		e.preventDefault();
		if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
			newsletterMsg = 'Format alamat email belum valid.';
			return;
		}
		newsletterMsg = 'Membuka email client untuk berlangganan.';
		window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
			'Langganan Catatan Portofolio'
		)}&body=${encodeURIComponent(`Halo Maharani, tolong tambahkan ${newsletterEmail} ke daftar info proyek.`)}`;
	}

	onMount(() => {
		const revObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('in');
						revObserver.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12 }
		);
		document.querySelectorAll('.rev').forEach((el) => revObserver.observe(el));

		const sections = ['hero', 'kompetensi', 'tentang', 'proyek', 'kontak'];
		const navObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				});
			},
			{ rootMargin: '-35% 0px -45% 0px' }
		);
		sections.forEach((id) => {
			const el = document.getElementById(id);
			if (el) navObserver.observe(el);
		});

		return () => {
			revObserver.disconnect();
			navObserver.disconnect();
		};
	});
</script>

<div
	class="paper-grain min-h-dvh bg-paper text-ink transition-colors duration-300 {theme === 'dark'
		? 'dark'
		: ''}"
>
	<!-- Page-wide 12-column hairlines -->
	<div class="cols" aria-hidden="true">
		<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
	</div>

	<!-- Header Nav -->
	<header class="fixed top-0 right-0 left-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
		<div class="hd mx-auto flex h-16 max-w-[1560px] items-center justify-between px-[5vw]">
			<a
				href="#hero"
				aria-label="Maharani Rosyadah Beranda"
				class="logo group flex items-baseline gap-[1px]"
			>
				<span class="l" style="--dy:-3px">M<i class="n">01</i></span>
				<span class="l" style="--dy:2px">A<i class="n">02</i></span>
				<span class="l" style="--dy:-1px">H<i class="n">03</i></span>
				<span class="l" style="--dy:3px">A<i class="n">04</i></span>
				<span class="l" style="--dy:-2px">R<i class="n">05</i></span>
				<span class="l" style="--dy:1px">A<i class="n">06</i></span>
				<span class="l" style="--dy:2px">N<i class="n">07</i></span>
				<span class="l" style="--dy:-2px">I<i class="n">08</i></span>
				<span class="l sp" aria-hidden="true">&nbsp;</span>
				<span class="l" style="--dy:2px">R<i class="n">09</i></span>
				<span class="l" style="--dy:-3px">O<i class="n">10</i></span>
				<span class="l" style="--dy:1px">S<i class="n">11</i></span>
				<span class="l" style="--dy:-2px">Y<i class="n">12</i></span>
				<span class="l" style="--dy:3px">A<i class="n">13</i></span>
				<span class="l" style="--dy:-1px">D<i class="n">14</i></span>
				<span class="l" style="--dy:2px">A<i class="n">15</i></span>
				<span class="l" style="--dy:-2px">H<i class="n">16</i></span>
				<span class="base" aria-hidden="true"></span>
			</a>

			<div class="flex items-center gap-6 lg:gap-10">
				<nav class="editorial-nav hidden items-center gap-7 lg:flex">
					<a href="#proyek" class={activeSection === 'proyek' ? 'act' : ''}> Proyek </a>
					<a href="#kompetensi" class={activeSection === 'kompetensi' ? 'act' : ''}> Kompetensi </a>
					<a href="#tentang" class={activeSection === 'tentang' ? 'act' : ''}> Tentang </a>
					<a href="#kontak" class={activeSection === 'kontak' ? 'act' : ''}> Brief & Kontak </a>
				</nav>

				<button
					type="button"
					aria-label="Ganti tema warna"
					onclick={() => (theme = theme === 'dark' ? 'light' : 'dark')}
					class="flex h-9 items-center gap-2 border border-line px-3 font-mono text-[11px] tracking-[0.14em] text-ink uppercase transition-colors hover:border-ink"
				>
					<span class="inline-block h-2 w-2 rounded-full {theme === 'dark' ? 'bg-verm' : 'bg-ink'}"
					></span>
					<span>{theme === 'dark' ? 'GELAP' : 'TERANG'}</span>
				</button>
			</div>
		</div>
	</header>

	<main id="top">
		<!-- 01 HERO -->
		<section id="hero" class="hero flex min-h-[96vh] flex-col justify-center pt-24 pb-16">
			<span class="folio">01</span>
			<div class="wrap">
				<div
					class="mb-10 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] tracking-[0.22em] text-muted uppercase sm:gap-x-12"
				>
					<span>Siswa SMK 8 Semarang PPLG</span>
					<span>Provinsi jawa tengah, Semarang Indonesia</span>
					<span>Est. 2026</span>
				</div>

				<!-- Tulisan Nama Utama dengan Gradasi Oren ke Putih -->
				<h1 class="hero-h1 text-ink">
					<span class="row">
						<i style="background: linear-gradient(135deg, #c85a32 0%, #ffffff 80%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
							Maharani Rosyadah Najah
						</i>
					</span>
				</h1>

				<!-- Banner GIF 1920x1080 Landscape -->
				<div class="mt-8 overflow-hidden border border-line">
					<img
						src="/images/lando-baner.gif"
						alt="Banner animasi portofolio Maharani Rosyadah"
						class="h-[220px] w-full object-cover object-center sm:h-[320px] lg:h-[420px]"
						loading="eager"
					/>
				</div>

				<div class="py-2">
					<p class="font-mono text-[10.5px] tracking-[1.1px] text-muted uppercase">
						LAB RPL — SMK NEGERI 8 SEMARANG · 2026
					</p>
				</div>

				<div class="mt-14 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
					<div class="flex flex-col gap-6 md:col-span-7 lg:col-span-6">
						<p class="max-w-[46ch] text-[16px] leading-[1.65] text-muted sm:text-[17px]">
							Siswi SMK Negeri 8 Semarang jurusan Pengembangan Perangkat Lunak & Gim (PPLG).
							Berfokus pada perancangan antarmuka modern yang cepat, keterbacaan kode yang bersih,
							dan sistem informasi sekolah yang fungsional.
						</p>

						<div class="flex flex-wrap items-center gap-4 pt-2">
							<a href="#proyek" class="rounded-lg bg-[#c85a32] px-6 py-3 font-mono text-[12px] font-medium tracking-[0.18em] text-[#faf8f5] uppercase transition-all hover:bg-[#b04d2a]">
								Lihat Proyek
							</a>
							<a href="#kontak" class="btn ghost"> Hubungi Saya </a>
						</div>
					</div>
					
					<div class="md:col-span-5 md:text-right lg:col-span-6">
						<div class="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
							Portofolio Siswa
							<b
								class="mt-1 block font-serif text-5xl font-black tracking-tight text-ink sm:text-6xl lg:text-7xl"
							>
								2026
							</b>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- 02 METHOD / KOMPETENSI -->
		<section id="kompetensi" class="border-t border-line">
			<span class="folio">02</span>
			<div class="wrap">
				<div class="kicker rev text-muted">Kompetensi & Metode</div>

				<div class="svc">
					{#each services as svc}
						<div class="row rev group">
							<span class="idx">{svc.code}</span>
							<h3 class="text-ink">{svc.title}</h3>
							<p class="m text-muted">{svc.method}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- 03 STUDIO / TENTANG SAYA -->
		<section id="tentang" class="border-t border-line">
			<span class="folio">03</span>
			<div class="wrap">
				<div class="kicker rev text-muted">Tentang Saya</div>

				<div class="about-grid-2col grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
					<!-- Kolom kiri: Foto Rani rasio 4:5 -->
					<div class="lg:col-span-5">
						<figure class="rev about-portrait max-w-[340px] sm:max-w-[380px]">
							<div class="pf bg-surface aspect-[4/5] overflow-hidden rounded border border-line">
								<img
									src="/images/rani.jpeg"
									alt="Foto profil Maharani Rosyadah"
									class="h-full w-full object-cover object-center"
									loading="lazy"
								/>
							</div>
							<figcaption class="text-ink mt-3 font-mono text-xs">
								Maharani Rosyadah Najah <span class="text-muted">/ SMK PPLG</span>
							</figcaption>
						</figure>
					</div>

					<!-- Kolom kanan: Manifesto text -->
					<div class="manifesto-2col rev flex flex-col gap-4 lg:col-span-7">
						<p class="lead text-ink text-xl font-serif">
							"Membangun hal yang berguna, fungsional, dan terlihat rapi dari baris kode hingga
							antarmuka pengguna."
						</p>
						<p class="body text-muted leading-relaxed">
							{profile.fullBio}
						</p>

						<div class="mt-6 flex flex-col divide-y divide-line border-t border-b border-line">
							{#each profile.facts as fact}
								<div class="flex items-center justify-between gap-4 py-3 text-sm">
									<span class="font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">
										{fact.label}
									</span>
									<span class="font-medium text-ink">{fact.value}</span>
								</div>
							{/each}
						</div>

						<div class="mt-5 flex flex-col gap-2.5">
							<span class="font-mono text-[10.5px] tracking-[0.16em] text-muted uppercase">
								Keahlian & Perkakas
							</span>
							<div class="flex flex-wrap gap-2">
								{#each profile.skills as skill}
									<span
										class="border border-line px-2.5 py-1 font-mono text-[11px] tracking-[0.1em] text-muted"
									>
										{skill}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- 04 WORK / PROYEK -->
		<section id="proyek" class="border-t border-line">
			<span class="folio">04</span>
			<div class="wrap">
				<div class="kicker rev text-muted">Proyek Pilihan — 2024 / 2026</div>

				<div class="work-list">
					{#each projects as project, i (project.title)}
						<ProjectRow {project} index={i} />
					{/each}
				</div>
			</div>
		</section>

		<!-- 05 COMMISSION / BRIEF & KONTAK -->
		<section id="kontak" class="commission border-t border-line py-20">
			<span class="folio">05</span>

			<div class="wrap">
				<div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
					
					<!-- Kolom Kiri: Teks Info Kontak -->
					<div class="lg:col-span-6 flex flex-col gap-6">
						<div class="font-mono text-[11px] tracking-[0.22em] text-[#c85a32] uppercase">
							Kontak
						</div>
						<h2 class="font-serif text-3xl sm:text-4xl text-ink leading-tight">
							Punya pertanyaan atau ingin bekerja sama?
						</h2>
						<p class="text-muted text-[16px] leading-relaxed max-w-[44ch]">
							Kirim pesan langsung lewat formulir di samping atau salin email saya untuk berdiskusi lebih lanjut.
						</p>

						<div class="flex items-center justify-between rounded-lg border border-line bg-surface p-4 max-w-md mt-2">
							<span class="font-mono text-sm text-ink">{profile.email}</span>
							<button
								type="button"
								onclick={() => {
									navigator.clipboard.writeText(profile.email);
									alert('Email disalin ke clipboard!');
								}}
								class="border border-line px-3 py-1.5 font-mono text-[11px] tracking-[0.15em] text-ink uppercase hover:border-ink transition-colors"
							>
								Salin
							</button>
						</div>
					</div>

					<!-- Kolom Kanan: Card Form Kontak -->
					<div class="lg:col-span-6 flex justify-end">
						<div class="w-full max-w-[480px] rounded-2xl border border-line bg-surface p-6 sm:p-8 shadow-sm">
							<form
								method="POST"
								action="?/kirim"
								onsubmit={handleContactSubmit}
								use:enhance={() => {
									status = 'loading';
									return async ({ result, update }) => {
										await update({ reset: result.type === 'success' });
										status = result.type === 'success' ? 'success' : 'error';
										if (result.type === 'success') {
											alert('Pesan berhasil terkirim!');
										}
									};
								}}
								class="flex flex-col gap-5"
							>
								<!-- Input Nama -->
								<div class="flex flex-col gap-1.5">
									<label for="fname" class="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
										Nama
									</label>
									<input
										id="fname"
										name="nama"
										type="text"
										required
										bind:value={fname}
										placeholder="Nama lengkap kamu"
										class="w-full rounded-lg border border-line bg-paper px-4 py-3 text-[14px] text-ink outline-none placeholder:text-muted/40 focus:border-ink transition-all"
									/>
								</div>

								<!-- Input Email -->
								<div class="flex flex-col gap-1.5">
									<label for="femail" class="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
										Email
									</label>
									<input
										id="femail"
										name="email"
										type="email"
										required
										bind:value={femail}
										placeholder="nama@email.com"
										class="w-full rounded-lg border border-line bg-paper px-4 py-3 text-[14px] text-ink outline-none placeholder:text-muted/40 focus:border-ink transition-all"
									/>
								</div>

								<!-- Textarea Pesan -->
								<div class="flex flex-col gap-1.5">
									<label for="fmsg" class="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
										Pesan
									</label>
									<textarea
										id="fmsg"
										name="pesan"
										required
										rows="4"
										bind:value={fmsg}
										placeholder="Tulis pesan kamu di sini"
										class="w-full resize-none rounded-lg border border-line bg-paper px-4 py-3 text-[14px] text-ink outline-none placeholder:text-muted/40 focus:border-ink transition-all"
									></textarea>
								</div>

								{#if formError}
									<p class="font-mono text-[12px] text-red-600">{formError}</p>
								{/if}

								<!-- Tombol Full-Width Oranye (#c85a32) -->
								<button
									type="submit"
									disabled={status === 'loading'}
									class="mt-2 w-full rounded-lg bg-[#c85a32] py-3.5 font-mono text-[12px] font-medium tracking-[0.18em] text-[#faf8f5] uppercase transition-all hover:bg-[#b04d2a] disabled:opacity-50"
								>
									{#if status === 'loading'}
										Mengirim...
									{:else}
										Kirim pesan
									{/if}
								</button>
							</form>
						</div>
					</div>

				</div>
			</div>
		</section>

	
	<!-- Footer -->
	<footer class="border-t border-line py-8">
		<div
			class="mx-auto flex max-w-[1560px] flex-col items-center justify-between gap-4 px-[5vw] font-mono text-[11px] text-muted sm:flex-row"
		>
			<p>© 2026 Maharani Rosyadah Najah — SMK Negeri 8 Semarang PPLG.</p>
			<p>Editorial Minimalist Framework — SvelteKit & Tailwind CSS</p>
		</div>
	</footer>
</div>