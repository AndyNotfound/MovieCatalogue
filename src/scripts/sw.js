// import "regenerator-runtime";
// import cacheHelper from "./utils/cache-helper";

// const assetsToCache = [
//   "./",
//   "./icons/maskable_icon.png",
//   "./icons/maskable_icon_x48.png",
//   "./icons/maskable_icon_x72.png",
//   "./icons/maskable_icon_x96.png",
//   "./icons/maskable_icon_x128.png",
//   "./icons/maskable_icon_x192.png",
//   "./icons/maskable_icon_x384.png",
//   "./icons/maskable_icon_x512.png",
//   "./index.html",
//   "./favicon.png",
//   "./app.bundle.js",
//   "./app.webmanifest",
//   "./sw.bundle.js",
// ];

// self.addEventListener("install", (e) => {
//   console.log("Installing service worker ...");
//   cacheHelper.cachingAppShell([...assetsToCache]);
// });

// self.addEventListener("activate", (e) => {
//   console.log("Activating service worker ...");
//   cacheHelper.deleteOldCache();
// });

// self.addEventListener("fetch", (e) => {
//   console.log(e.request);
//   e.respondWith(fetch(e.request));
//   cacheHelper.revalidateCache(e.request);
// });

import { precacheAndRoute } from "workbox-precaching";

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("install", () => {
  console.log("Service Worker: Installed");
  self.skipWaiting();
});

self.addEventListener("push", (event) => {
  console.log("Service Worker: Pushed");

  const dataJson = event.data.json();
  const notification = {
    title: dataJson.title,
    options: {
      body: dataJson.options.body,
      icon: dataJson.options.icon,
      image: dataJson.options.image,
    },
  };
  event.waitUntil(
    self.registration.showNotification(notification.title, notification.options)
  );
});

self.addEventListener("notificationclick", (event) => {
  const clickedNotification = event.notification;
  clickedNotification.close();
  const chainPromise = async () => {
    console.log("Notification has been clicked");
    await self.clients.openWindow("https://www.dicoding.com/");
  };
  event.waitUntil(chainPromise());
});
