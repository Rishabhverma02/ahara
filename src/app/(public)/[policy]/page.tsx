import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { POLICY_SLUGS, getPolicy } from "@/src/data/policies";
import { PolicyView } from "./PolicyView";

type Props = { params: Promise<{ policy: string }> };

// only the known policy slugs exist; everything else 404s
export const dynamicParams = false;
export const generateStaticParams = () => POLICY_SLUGS.map((policy) => ({ policy }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getPolicy((await params).policy);
  return p ? { title: p.title, description: p.summary, alternates: { canonical: `/${p.slug}` } } : {};
}

export default async function PolicyPage({ params }: Props) {
  const policy = getPolicy((await params).policy);
  if (!policy) notFound();
  return <PolicyView policy={policy} />;
}
