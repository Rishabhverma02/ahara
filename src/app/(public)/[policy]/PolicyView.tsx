"use client";

import Link from "next/link";
import { PageHero } from "@/src/components/ui";
import { POLICIES, type Policy } from "@/src/data/policies";
import { Layout, Side, Article, Draft, Updated } from "./styled";

export function PolicyView({ policy }: { policy: Policy }) {
  const updated = new Date(policy.updated).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: policy.title }]}
        title={policy.title}
        subtitle={policy.summary}
      />
      <Layout>
        <Side aria-label="Policies">
          {POLICIES.map((p) => (
            <Link key={p.slug} href={`/${p.slug}`} aria-current={p.slug === policy.slug ? "page" : undefined}>
              {p.title}
            </Link>
          ))}
        </Side>
        <Article>
          <Draft role="note">
            Draft for review — this page is a template and must be checked by a legal professional before
            launch.
          </Draft>
          <Updated>Last updated {updated}</Updated>
          {policy.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </section>
          ))}
        </Article>
      </Layout>
    </>
  );
}
