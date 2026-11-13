/**
 * Shared UI click sound.
 *
 * One lazily-created <audio> element is reused for every play instead of
 * constructing `new Audio()` per click. Kept quiet and reserved for
 * meaningful actions (add to cart, wishlist, place order) — not every tab or
 * stepper press. Visitors who prefer reduced motion get silence too, since
 * they usually want a calmer UI overall.
 */
let audio: HTMLAudioElement | null = null;

export function playClick() {
  if (typeof window === "undefined") return;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
  try {
    if (!audio) {
      audio = new Audio("/audio/click.mp3");
      audio.volume = 0.35;
      audio.preload = "auto";
    }
    audio.currentTime = 0;
    void audio.play().catch(() => {});
  } catch {
    /* audio is decoration — never let it break an interaction */
  }
}
