"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Search, X } from "lucide-react";
import { useDialog } from "@/src/hooks/useDialog";
import { useUiStore } from "@/src/store/useUiStore";
import { searchProducts } from "@/src/services/catalog";
import { formatINR } from "@/src/lib/pricing";
import { Overlay, Panel, Inner, Form, Suggest, Nothing, Results, Thumb, All } from "./styled";

const SUGGESTIONS = ["Makhana", "Sattu", "High protein", "Cookies", "Chocolate"];

/** Instant product search over the catalogue; Enter opens full results in /shop. */
export const SearchDialog = () => {
  const open = useUiStore((s) => s.panel === "search");
  const close = useUiStore((s) => s.close);
  useDialog(open, close);

  if (!open) return null;
  return <SearchPanel onClose={close} />;
};

function SearchPanel({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const results = searchProducts(q);

  const seeAll = () => {
    if (!q.trim()) return;
    onClose();
    router.push(`/shop?q=${encodeURIComponent(q.trim())}`);
  };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    seeAll();
  };

  return (
    <Overlay onClick={onClose}>
      <Panel role="dialog" aria-modal="true" aria-label="Search products" onClick={(e) => e.stopPropagation()}>
        <Inner>
          <Form onSubmit={submit} role="search">
            <Search size={22} aria-hidden />
            <label htmlFor="site-search" className="sr-only">
              Search products
            </label>
            <input
              id="site-search"
              type="search"
              autoFocus
              autoComplete="off"
              placeholder="What are you craving?"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-controls="search-results"
            />
            <button type="button" onClick={onClose} aria-label="Close search">
              <X size={22} />
            </button>
          </Form>

          {!q.trim() ? (
            <Suggest>
              <span>Popular</span>
              {SUGGESTIONS.map((s) => (
                <button key={s} type="button" onClick={() => setQ(s)}>
                  {s}
                </button>
              ))}
            </Suggest>
          ) : results.length === 0 ? (
            <Nothing>No products match &ldquo;{q}&rdquo;.</Nothing>
          ) : (
            <Results id="search-results">
              {results.map((p) => (
                <li key={p.id}>
                  <Link href={`/shop/${p.slug}`} onClick={onClose}>
                    <Thumb>
                      <Image src={p.image} alt="" fill sizes="56px" />
                    </Thumb>
                    <span>
                      <strong>{p.name}</strong>
                      <small>{p.category}</small>
                    </span>
                    <em>{formatINR(p.price)}</em>
                  </Link>
                </li>
              ))}
              <li>
                <All type="button" onClick={seeAll}>
                  See all results for &ldquo;{q}&rdquo; <ArrowRight size={16} aria-hidden />
                </All>
              </li>
            </Results>
          )}
        </Inner>
      </Panel>
    </Overlay>
  );
}
