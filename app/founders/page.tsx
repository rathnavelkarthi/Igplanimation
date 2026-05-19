import type { Metadata } from "next";
import FoundersClient from "./FoundersClient";

export const metadata: Metadata = {
  title: "Founders — International Garudas",
  description:
    "Meet the founders of International Garudas: Rathnavel and Siddharthan. A strategic AI systems and software procurement firm engineering intelligence architecture from Chennai.",
  openGraph: {
    title: "Founders — International Garudas",
    description:
      "Rathnavel and Siddharthan — co-directors of International Garudas, engineering AI systems and enterprise software from Chennai.",
    type: "profile",
  },
};

export default function FoundersPage() {
  return <FoundersClient />;
}
