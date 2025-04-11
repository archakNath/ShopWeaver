import { create } from "zustand";
import {
  LayoutDashboard,
  TextCursorInput,
  UnfoldVertical,
} from "lucide-react";

// Sub-options definitions
const headerSubOptions = [
  { id: "header-sub1", icon: UnfoldVertical, label: "Header: Sub Section 1" },
  { id: "header-sub2", icon: UnfoldVertical, label: "Header: Sub Section 2" },
  { id: "header-sub3", icon: UnfoldVertical, label: "Header: Sub Section 3" },
];

const heroSubOptions = [
  { id: "hero-sub1", icon: UnfoldVertical, label: "Hero Section: Sub Section 1" },
  { id: "hero-sub2", icon: UnfoldVertical, label: "Hero Section: Sub Section 2" },
  { id: "hero-sub3", icon: UnfoldVertical, label: "Hero Section: Sub Section 3" },
];

const section1SubOptions = [
  { id: "1-sub1", icon: UnfoldVertical, label: "Section 1: Sub Section 1" },
  { id: "1-sub2", icon: UnfoldVertical, label: "Section 1: Sub Section 2" },
  { id: "1-sub3", icon: UnfoldVertical, label: "Section 1: Sub Section 3" },
];

const section2SubOptions = [
  { id: "2-sub1", icon: UnfoldVertical, label: "Section 2: Sub Section 1" },
  { id: "2-sub2", icon: UnfoldVertical, label: "Section 2: Sub Section 2" },
  { id: "2-sub3", icon: UnfoldVertical, label: "Section 2: Sub Section 3" },
];

const section3SubOptions = [
  { id: "3-sub1", icon: UnfoldVertical, label: "Section 3: Sub Section 1" },
  { id: "3-sub2", icon: UnfoldVertical, label: "Section 3: Sub Section 2" },
  { id: "3-sub3", icon: UnfoldVertical, label: "Section 3: Sub Section 3" },
];

const section4SubOptions = [
  { id: "4-sub1", icon: UnfoldVertical, label: "Section 4: Sub Section 1" },
  { id: "4-sub2", icon: UnfoldVertical, label: "Section 4: Sub Section 2" },
  { id: "4-sub3", icon: UnfoldVertical, label: "Section 4: Sub Section 3" },
];

const section5SubOptions = [
  { id: "5-sub1", icon: UnfoldVertical, label: "Section 5: Sub Section 1" },
  { id: "5-sub2", icon: UnfoldVertical, label: "Section 5: Sub Section 2" },
  { id: "5-sub3", icon: UnfoldVertical, label: "Section 5: Sub Section 3" },
];

const subOptionsMap = {
  header: headerSubOptions,
  hero: heroSubOptions,
  "1": section1SubOptions,
  "2": section2SubOptions,
  "3": section3SubOptions,
  "4": section4SubOptions,
  "5": section5SubOptions,
};

export const useStore = create((set) => ({
  // UI states
  headerOpen: false,
  openSubHeader: null,
  subHeaderOpen: true,

  // Sections and their sub-options
  sections: [
    { id: "header", icon: LayoutDashboard, label: "Header" },
    { id: "hero", icon: TextCursorInput, label: "Hero Section" },
    { id: "1", icon: UnfoldVertical, label: "Section 1" },
    { id: "2", icon: UnfoldVertical, label: "Section 2" },
    { id: "3", icon: UnfoldVertical, label: "Section 3" },
    { id: "4", icon: UnfoldVertical, label: "Section 4" },
    { id: "5", icon: UnfoldVertical, label: "Section 5" },
  ],
  subOptions: [],

  // Sub-option map reference
  subOptionsMap,

  // Actions
  setHeaderOpen: (value) => set({ headerOpen: value }),
  setOpenSubHeader: (id) => set((state) => ({
    openSubHeader: id,
    subOptions: subOptionsMap[id] || [],
    subHeaderOpen: true,
  })),
  setSubHeaderOpen: (value) => set({ subHeaderOpen: value }),

  reorderSections: (from, to) =>
    set((state) => {
      const updated = [...state.sections];
      const [moved] = updated.splice(from, 1);
      updated.splice(to, 0, moved);
      return { sections: updated };
    }),

  reorderSubOptions: (from, to) =>
    set((state) => {
      const updated = [...state.subOptions];
      const [moved] = updated.splice(from, 1);
      updated.splice(to, 0, moved);
      return { subOptions: updated };
    }),
}));
