const swRegister = async () => {
  if (!("serviceWorker" in navigator)) {
    console.log("Your browser does not support service worker!");
    return;
  }

  try {
    await navigator.serviceWorker.register("./sw.bundle.js");
    console.log("Service worker registered!");
  } catch (error) {
    console.log("Failed to register service worker:", error);
  }
};

export default swRegister;
