/**
 * 粽趣城市的靜態網站入口。
 * 網頁與圖片由 Sites 的靜態資源服務提供，保留原有的單檔遊戲邏輯。
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
    return env.ASSETS.fetch(new Request(new URL(pathname, request.url), request));
  },
};
