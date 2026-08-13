import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Crosshair,
  Dumbbell,
  Leaf,
  Moon,
  Smartphone,
} from "lucide-react";

export type Metric = {
  label: string;
  unit: string;
  icon: LucideIcon;
  iconTone?: "peach";
};

export const metrics: Metric[] = [
  { label: "Sleep", unit: "h", icon: Moon },
  { label: "Focus", unit: "/10", icon: Crosshair },
  { label: "Mood", unit: "/10", icon: Leaf },
  { label: "Exercise", unit: "min", icon: Dumbbell },
  { label: "Study", unit: "h", icon: BookOpen },
  { label: "Screen Time", unit: "h", icon: Smartphone, iconTone: "peach" },
];

export const goals = [
  { label: "Complete DSA course", value: 70, icon: Crosshair },
  { label: "Exercise 4× this week", value: 50, icon: Dumbbell },
  { label: "Build LIFEOS MVP", value: 90, icon: Leaf },
];
