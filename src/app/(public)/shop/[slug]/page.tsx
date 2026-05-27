import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_PRODUCTS, getProductBySlug } from "../data/products";
import ProductDetail from "./ProductDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found – Ahara" };

  return {
    title: `${product.name} – Ahara`,
    description: product.description,
  };
}

export function generateStaticParams() {
  return ALL_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
