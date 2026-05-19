/* Minimal className joiner — replaces clsx+twMerge for our scale.
   If we ever need conflict resolution, swap in twMerge. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
