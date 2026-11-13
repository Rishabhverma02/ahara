"use client";

import { useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, Leaf, Minus, Plus, ShieldCheck, Star, Truck } from "lucide-react";
import { getProductDetail, getRelatedProducts, type Product } from "@/src/services/catalog";
import { useProductActions } from "@/src/hooks/useProductActions";
import { formatINR, FREE_SHIPPING_THRESHOLD } from "@/src/lib/pricing";
import { Button, ProductCard } from "@/src/components/ui";
import * as S from "./styled";

type Tab = "story" | "taste" | "consume" | "nutrition";

const TABS: { key: Tab; label: string }[] = [
  { key: "story", label: "The story" },
  { key: "taste", label: "Taste & texture" },
  { key: "consume", label: "How to enjoy" },
  { key: "nutrition", label: "Nutrition" },
];

export default function ProductDetail({ product }: { product: Product }) {
  const router = useRouter();
  const tabsId = useId();
  const { addToCart, toggleSaved, saved } = useProductActions(product);
  const detail = getProductDetail(product.id);
  const sizes = detail?.sizes ?? [{ label: "Standard", price: product.price }];
  const cleanLabel = detail?.cleanLabelPromises ?? ["No preservatives", "No artificial colour", "No refined junk"];

  const [sizeIdx, setSizeIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<Tab>("story");
  const [added, setAdded] = useState(false);

  const size = sizes[sizeIdx];
  const [line, flavour] = product.name.split(" – ");
  const related = getRelatedProducts(product);

  const add = () => {
    addToCart({ quantity: qty, size: size.label, price: size.price });
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const buyNow = () => {
    addToCart({ quantity: qty, size: size.label, price: size.price });
    router.push("/cart");
  };

  const onTabKey = (e: React.KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    const next = TABS[(i + dir + TABS.length) % TABS.length];
    setTab(next.key);
    document.getElementById(`${tabsId}-${next.key}`)?.focus();
  };

  return (
    <S.Page>
      <S.Crumbs aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li aria-current="page">{product.name}</li>
        </ol>
      </S.Crumbs>

      <S.Top>
        <S.Gallery>
          <S.MainImage>
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              placeholder="blur"
              sizes="(max-width: 960px) 100vw, 55vw"
            />
            {product.badge && <S.Badge>{product.badge}</S.Badge>}
          </S.MainImage>
        </S.Gallery>

        <S.Info>
          <S.Kicker>
            {product.category} · {product.ingredients.join(", ")}
          </S.Kicker>
          <S.Name>
            {line}
            {flavour && (
              <>
                <br />
                <em>{flavour}</em>
              </>
            )}
          </S.Name>
          <S.Rating>
            <Star size={16} fill="currentColor" strokeWidth={0} aria-hidden />
            <strong>{product.rating.toFixed(1)}</strong>
            <span>· {product.reviewCount} reviews</span>
          </S.Rating>
          <S.Desc>{product.description}</S.Desc>

          <S.Price>
            {formatINR(size.price)}
            {product.originalPrice && sizeIdx === 0 && <s>{formatINR(product.originalPrice)}</s>}
            <small>incl. of all taxes</small>
          </S.Price>

          {sizes.length > 1 && (
            <S.Field>
              <S.Label id={`${tabsId}-size`}>Pack size</S.Label>
              <S.Sizes role="radiogroup" aria-labelledby={`${tabsId}-size`}>
                {sizes.map((s, i) => (
                  <S.Size
                    key={s.label}
                    type="button"
                    role="radio"
                    aria-checked={i === sizeIdx}
                    onClick={() => setSizeIdx(i)}
                  >
                    <strong>{s.label}</strong>
                    <span>{formatINR(s.price)}</span>
                  </S.Size>
                ))}
              </S.Sizes>
            </S.Field>
          )}

          <S.Buy>
            <S.QtyBox>
              <S.QtyBtn type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
                <Minus size={16} />
              </S.QtyBtn>
              <S.QtyValue aria-live="polite">{qty}</S.QtyValue>
              <S.QtyBtn type="button" onClick={() => setQty((q) => Math.min(20, q + 1))} aria-label="Increase quantity">
                <Plus size={16} />
              </S.QtyBtn>
            </S.QtyBox>
            <Button type="button" $size="lg" onClick={add}>
              {added ? "Added ✓" : `Add to cart · ${formatINR(size.price * qty)}`}
            </Button>
            <S.SaveBtn type="button" onClick={toggleSaved} aria-pressed={saved} aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}>
              <Heart size={20} fill={saved ? "currentColor" : "none"} />
            </S.SaveBtn>
          </S.Buy>
          <Button type="button" $variant="outline" $size="lg" $block onClick={buyNow}>
            Buy it now
          </Button>

          <S.Perks>
            <li>
              <Truck aria-hidden />
              <span>
                <strong>{detail?.estimatedDelivery ?? "Delivered in 3–5 days"}</strong>
                Free delivery over {formatINR(FREE_SHIPPING_THRESHOLD)}
              </span>
            </li>
            <li>
              <ShieldCheck aria-hidden />
              <span>
                <strong>Clean label promise</strong>
                {cleanLabel.join(" · ")}
              </span>
            </li>
            <li>
              <Leaf aria-hidden />
              <span>
                <strong>{product.tags.join(" · ")}</strong>
                {product.healthGoals.join(", ")}
              </span>
            </li>
          </S.Perks>
        </S.Info>
      </S.Top>

      <S.Tabs>
        <S.TabList role="tablist" aria-label="Product details">
          {TABS.map((t, i) => (
            <S.TabBtn
              key={t.key}
              id={`${tabsId}-${t.key}`}
              role="tab"
              type="button"
              aria-selected={tab === t.key}
              aria-controls={`${tabsId}-panel`}
              tabIndex={tab === t.key ? 0 : -1}
              onClick={() => setTab(t.key)}
              onKeyDown={(e) => onTabKey(e, i)}
            >
              {t.label}
            </S.TabBtn>
          ))}
        </S.TabList>

        <S.Panel id={`${tabsId}-panel`} role="tabpanel" aria-labelledby={`${tabsId}-${tab}`}>
          {tab === "story" &&
            (detail?.ingredientStory ? (
              <S.Story>
                <h3>{detail.ingredientStory.title}</h3>
                {detail.ingredientStory.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </S.Story>
            ) : (
              <S.Text>Details coming soon.</S.Text>
            ))}
          {tab === "taste" && <S.Text>{detail?.tasteTexture ?? "Details coming soon."}</S.Text>}
          {tab === "consume" && <S.Text>{detail?.howToConsume ?? "Details coming soon."}</S.Text>}
          {tab === "nutrition" &&
            (detail?.nutritionFacts ? (
              <S.Nutrition>
                <caption>Typical values per 100 g</caption>
                <tbody>
                  {detail.nutritionFacts.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </S.Nutrition>
            ) : (
              <S.Text>Details coming soon.</S.Text>
            ))}
        </S.Panel>
      </S.Tabs>

      {related.length > 0 && (
        <S.Related>
          <h2>
            More {product.category.toLowerCase()} <em>you&rsquo;ll like</em>
          </h2>
          <S.RelatedGrid>
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </S.RelatedGrid>
        </S.Related>
      )}
    </S.Page>
  );
}
