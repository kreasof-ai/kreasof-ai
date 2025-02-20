<script lang="ts">
	import Hero from '../components/hero.svelte';
	import Navbar from '../components/navbar.svelte';
</script>

<div
	class="min-h-screen bg-[#080B14] bg-gradient-to-b from-[#080B14] via-[#0F1629] to-[#080B14] text-white"
>
	<div
		class="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
	></div>
	<Navbar />
	<main class="relative">
		<Hero />
		<Hero />
		<Hero />
		<Hero />
		<Hero />
		<Hero />
		<Hero />
		<Hero />
		<Hero />
		<Hero />
		<Hero />
		<!-- <Hero />
		<VideoSection />
		<RunningLogo />
		<AdvancedLab />
		<BusinessPortfolio />
		<Research />
		<WorkWithUs />
		<GetStarted /> -->
	</main>
	<footer class="relative py-6 text-center text-sm text-gray-400">
		<p>All right reserved ©2024</p>
	</footer>
</div>
