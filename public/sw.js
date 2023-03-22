// console.warn("Sw From Public");

let cashData = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(cashData)
      .then((cache) => {
        cache.addAll([
          "/static/js/bundle.js",
          "/manifest.json",
          "/logo192.png",
          "/favicon.ico",
          "/index.html",
          "/",
          "/users",
        ]);
      })
      .catch((e) => {
        console.log(e);
      })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches
        .match(event.request)
        .then((result) => {
          if (result) {
            return result;
          }
          let requestUrl = event.request.clone();
          return fetch(requestUrl);
        })
        .catch((e) => {
          console.log(e);
        })
    );
  }
});
