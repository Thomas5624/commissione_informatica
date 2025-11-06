import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createSlug } from "../../utils/slug";
import { articles } from "../articles";

// For `output: 'export'`, dynamic routes must be statically known.
// generateStaticParams returns an array of params for which Next will
// generate static pages at build time.
export async function generateStaticParams() {
  return articles.map((a) => ({ slug: createSlug(a.title) }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  // params is a promise in Next.js — unwrap it
  const { slug } = await params;
  // Helpful debug info when article not found
  const article = articles.find((a) => createSlug(a.title) === slug);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Articolo non trovato</h1>
  <p className="text-muted mt-2">Lo slug ricevuto era: {slug}</p>
        <div className="mt-4">
          <p className="text-muted">Articoli disponibili:</p>
          <ul className="list-disc list-inside mt-2">
            {articles.map((a) => (
              <li key={a.title}>
                {a.title} (slug: {createSlug(a.title)})
              </li>
            ))}
          </ul>
        </div>
        <Link href="/newsletter" className="accent hover:opacity-80 mt-4 inline-block">
          Torna alla lista degli articoli
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/newsletter" className="inline-flex items-center accent hover:opacity-80 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Torna alla lista degli articoli
      </Link>

      <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
        <Image src={article.imageUrl} alt={article.title} fill className="object-cover" priority />
      </div>

      <header className="mb-8">
        <div className="flex items-center gap-4 text-sm text-muted mb-4">
          {article.publishDate && <time dateTime={article.publishDate}>{article.publishDate}</time>}
          {article.readTime && (
            <>
              <span>•</span>
              <span>{article.readTime} lettura</span>
            </>
          )}
          <span>•</span>
          <span className="accent">{article.category}</span>
        </div>

        <h1 className="text-4xl font-bold text-app mb-4">{article.title}</h1>
        <p className="text-sm text-muted mb-2">Di {article.author ?? "Redazione"}</p>
        <p className="text-xl text-muted">{article.description}</p>
      </header>

      <div className="prose prose-lg max-w-none text-app prose-headings:text-app prose-p:text-muted prose-a:text-accent prose-strong:text-app prose-ul:text-muted prose-ol:text-muted prose-li:text-muted prose-blockquote:text-muted">
        {article.content.split('\n').map((paragraph, idx) => (
          <p key={idx} className="mb-4">{paragraph.trim()}</p>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t card-border">
        <h2 className="text-2xl font-bold text-app mb-4">Ti è piaciuto questo articolo?</h2>
        <p className="text-muted mb-6">Iscriviti alla nostra newsletter per ricevere altri contenuti come questo direttamente nella tua casella di posta.</p>
        <Link href="#subscribe" className="inline-block bg-accent text-white px-6 py-3 rounded-full hover:bg-accent/90 transition duration-300">Iscriviti alla Newsletter</Link>
      </div>
    </article>
  );
}
