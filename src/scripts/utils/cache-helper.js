import CONFIG from "../globals/config";

const cacheHelper = {
  async cachingAppShell(request) {
    const cache = this._openCache;
    cache.addAll(request);
  },
  async deleteOldCache() {
    const cacheNames = await cache.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE)
      .map((data) => caches.delete(data));
  },
  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      this._fetchRequest(request);
      return response;
    }

    return this._fetchRequest(request);
  },
  async _fetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    await this._addCache(response);
    return response;
  },
  async _addCache(data) {
    const cache = await this._openCache();
    cache.add(data);
  },
  async _openCache() {
    return caches.open(CONFIG.CACHE);
  },
};

export default cacheHelper;
