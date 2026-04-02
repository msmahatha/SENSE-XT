import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Peer-reviewed research from Sense-XT Innovations spanning quantum-enhanced biosensing, graphene FET fabrication, and multiplexed pathogen detection.",
};

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
