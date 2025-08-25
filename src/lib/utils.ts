import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function yearsSince(from: Date): number {
  const now = new Date();
  let years = now.getFullYear() - from.getFullYear();
  const monthDiff = now.getMonth() - from.getMonth();
  const dayDiff = now.getDate() - from.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    years -= 1;
  }

  return years;
}
