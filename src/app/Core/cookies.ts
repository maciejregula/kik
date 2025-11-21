export const COOKIE_NAME = "preferredWorkshop";

export type Workshop = "krawedzi" | "kola";

export function setWorkshopCookie(value: Workshop) {
  // 1 rok
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=31536000; samesite=lax`;
}
