import awsCloud from "../assets/certificates/aws-cloud-foundations.webp";
import awsMicroservices from "../assets/certificates/aws-microservices-cicd.webp";
import ballerinaCert from "../assets/certificates/ballerina.webp";

export interface Certification {
  title: string;
  issuer: string;
  period: string;
  certificate?: string;
  verifyUrl?: string;
}

export const certifications: Certification[] = [
  {
    title: "Microservices and CI/CD Pipeline Builder",
    issuer: "AWS Academy",
    period: "Feb 2026",
    certificate: awsMicroservices,
    verifyUrl: "https://www.credly.com/go/GEDMGnFC",
  },
  {
    title: "Cloud Foundations",
    issuer: "AWS Academy",
    period: "Feb 2026",
    certificate: awsCloud,
    verifyUrl: "https://www.credly.com/go/26S0oe2J",
  },
  {
    title: "Generative AI Mastermind",
    issuer: "Outskills",
    period: "2026",
  },
  {
    title: "Innovate with Ballerina Coding Challenge",
    issuer: "IEEE Student Branch, University of Moratuwa × WSO2",
    period: "May — Oct 2025",
    certificate: ballerinaCert,
  },
];

export interface Involvement {
  org: string;
  detail: string;
}

export const involvement: Involvement[] = [
  {
    org: "Youth Initiative Circle",
    detail:
      "Active volunteer and mentor in a grassroots community initiative dedicated to supporting my home village. Facilitate educational guidance and skill-building activities to empower local youth and foster community development.",
  },
  {
    org: "Majlis ul Islam",
    detail:
      "Assisted with first-year student mentorship, Ramadan logistics, and social media outreach campaigns.",
  },
];
