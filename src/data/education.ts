export interface EducationEntry {
  institution: string;
  credential: string;
  detail?: string;
  period: string;
}

export const education: EducationEntry[] = [
  {
    institution: "University of Moratuwa",
    credential: "B.Sc. (Hons) in Engineering — Computer Science Engineering",
    detail: "Specialized stream: Data Science (3rd year)",
    period: "2024 — Present",
  },
  {
    institution: "Zahira College Colombo",
    credential: "G.C.E. Advanced Level — Physical Science Stream",
    detail: "Distinctions in Combined Mathematics, Physics, and Chemistry",
    period: "2009 — 2023",
  },
];
