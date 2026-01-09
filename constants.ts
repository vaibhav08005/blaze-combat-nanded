import { Discipline, NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "MANIFESTO", href: "#manifesto" },
  { label: "COMBAT STYLES", href: "#disciplines" },
  { label: "ARENA", href: "#locations" },
  { label: "JOIN THE FIGHT", href: "#locations" }, 
];

export const DISCIPLINES: Discipline[] = [
  {
    id: "01",
    title: "BOXING",
    description: "The sweet science. Precision striking, footwork, and head movement.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "MMA",
    description: "Mixed Martial Arts. The ultimate test of striking and grappling skills.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "MUAY THAI",
    description: "The Art of Eight Limbs. Use fists, elbows, knees, and shins.",
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "CROSSFIT",
    description: "High-intensity conditioning to build explosive power for combat.",
    image: "https://images.unsplash.com/photo-1517963879466-e825c15f99e5?q=80&w=1975&auto=format&fit=crop"
  },
  {
    id: "05",
    title: "KICKBOXING",
    description: "Dynamic striking combining boxing punches with powerful kicks.",
    image: "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?q=80&w=2068&auto=format&fit=crop"
  }
];