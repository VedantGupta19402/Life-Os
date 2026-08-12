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
  value: string;
  unit: string;
  status: string;
  statusTone?: "warm";
  icon: LucideIcon;
  iconTone?: "peach";
};

export const metrics: Metric[] = [
  { label: "Sleep", value: "7.2", unit: "h", status: "Good", icon: Moon },
  { label: "Focus", value: "8.4", unit: "/10", status: "High", icon: Crosshair },
  { label: "Mood", value: "7.6", unit: "/10", status: "Positive", icon: Leaf },
  { label: "Exercise", value: "45", unit: "min", status: "Good", icon: Dumbbell },
  { label: "Study", value: "5.2", unit: "h", status: "Great", icon: BookOpen },
  { label: "Screen Time", value: "3.1", unit: "h", status: "Moderate", statusTone: "warm", icon: Smartphone, iconTone: "peach" },
];

export const goals = [
  { label: "Complete DSA course", value: 70, icon: Crosshair },
  { label: "Exercise 4× this week", value: 50, icon: Dumbbell },
  { label: "Build LIFEOS MVP", value: 90, icon: Leaf },
];
