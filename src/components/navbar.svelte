<script>
	import { page } from '$app/state';
</script>

<nav class="fixed top-0 z-50 w-full border-b border-white/5 bg-[#080B14]/80 backdrop-blur-sm">
	<div class="container mx-auto flex items-center justify-between px-4 py-4">
		<a
			href="/"
			class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent"
		>
			ARGI
		</a>
		<div class="flex items-center gap-8">
			<a href="#" class="transition hover:text-gray-300">About</a>
			<a href="#" class="transition hover:text-gray-300">Portfolio</a>
			<a href="#" class="transition hover:text-gray-300">Research</a>
			<a
				href="/news"
				class="transition hover:text-gray-300"
				class:active={page.url.pathname === '/news'}
			>
				News
			</a>
			<a href="#" class="transition hover:text-gray-300">Careers</a>
			<button
				class="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 text-white hover:from-blue-600 hover:to-purple-600"
			>
				Try CekatAI
			</button>
		</div>
	</div>
</nav>
