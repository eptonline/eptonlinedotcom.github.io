self.addEventListener("install", e => {
	e.waitUntil(
		caches.open("static").then(cache => {
			return cache.addAll(["./","./style.css","./script.js","./fevicon/android-chrome-192x192.png","./fevicon/android-chrome-512x512.png","./fevicon/apple-touch-icon.png","./fevicon/favicon-32x32.png","./fevicon/favicon-16x16.png","./fevicon/logo.png","https://eptonline.org/assets/achievements.mp3","https://eptonline.org/assets/wrongs.mp3"])
		})

		);
});

	self.addEventListener("fetch", e => {
		console.log(`Intercepting fatch for : ${e.request.url}`);
	});
