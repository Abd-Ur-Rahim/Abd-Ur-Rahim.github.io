import devthonCert from "../assets/certificates/devthon.webp";
import octwaveCert from "../assets/certificates/octwave.webp";
import aithonCert from "../assets/certificates/aithon.webp";
import devthonMoment from "../assets/achievements/devthon-moment.webp";
import octwaveMoment from "../assets/achievements/octwave-moment.webp";
import startupSparkMoment from "../assets/achievements/startup-spark-moment.webp";

export interface Achievement {
  place: string;
  title: string;
  detail: string;
  org: string;
  period: string;
  team?: string;
  certificate?: string;
  photo?: string;
}

export const achievements: Achievement[] = [
  {
    place: "1st Place",
    title: "Dev{thon} 2.0",
    detail: "Built GoldNest with team Code Mavericks — recognized for innovation in the final round.",
    org: "JISC eduCLaaS & Rotaract Club, University of Moratuwa",
    period: "2025",
    team: "Code Mavericks",
    certificate: devthonCert,
    photo: devthonMoment,
  },
  {
    place: "2nd Runner-Up",
    title: "Octwave 2.0",
    detail: "Placed third among the top AI/ML teams from Sri Lankan universities, across machine learning and computer vision. Partnered with Tortil Inc.",
    org: "IEEE IAS Student Branch Chapter, University of Moratuwa",
    period: "2025",
    team: "VibeCoder",
    certificate: octwaveCert,
    photo: octwaveMoment,
  },
  {
    place: "Finalist",
    title: "Startup Spark 2.0, TECHNO",
    detail: "Pitched GoldNest with team Code Mavericks at the \"Innovate for Impact\" startup competition, held at the BMICH, Colombo.",
    org: "IESL Student Chapter, University of Moratuwa",
    period: "2025",
    team: "Code Mavericks",
    photo: startupSparkMoment,
  },
  {
    place: "Top 30, MVP Stage",
    title: "AITHON 2026",
    detail: "Advanced to the MVP Development Phase with team MatriXplorers, out of 60+ teams — Enterprise AI Innovation Challenge, Hemas Holdings PLC.",
    org: "Hemas Holdings PLC",
    period: "May 2026",
    team: "MatriXplorers",
    certificate: aithonCert,
  },
];
