import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createSlug } from "../../utils/slug";
import { articles } from "../articles";

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: createSlug(article.title),
  }));
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  // Helpful debug info when article not found
  const article = articles.find((a) => createSlug(a.title) === slug);

  if (!article) {
    console.log("Article not found for slug:", slug);
    console.log("Available article slugs:");
    articles.forEach((a) => {
      const generatedSlug = createSlug(a.title);
      console.log(`- ${a.title} (generated slug: ${generatedSlug})`);
    });
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Articolo non trovato</h1>
  <p className="text-gray-600 mt-2">Lo slug ricevuto era: {slug}</p>
        <div className="mt-4">
          <p className="text-gray-600">Articoli disponibili:</p>
          <ul className="list-disc list-inside mt-2">
            {articles.map((a) => (
              <li key={a.title}>
                {a.title} (slug: {createSlug(a.title)})
              </li>
            ))}
          </ul>
        </div>
        <Link href="/newsletter" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">
          Torna alla lista degli articoli
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/newsletter" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Torna alla lista degli articoli
      </Link>

      <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
        <Image src={article.imageUrl} alt={article.title} fill className="object-cover" priority />
      </div>

      <header className="mb-8">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          {article.publishDate && <time dateTime={article.publishDate}>{article.publishDate}</time>}
          {article.readTime && (
            <>
              <span>•</span>
              <span>{article.readTime} lettura</span>
            </>
          )}
          <span>•</span>
          <span className="text-indigo-600">{article.category}</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
        <p className="text-xl text-gray-600">{article.description}</p>
      </header>

      <div className="prose prose-lg max-w-none">
        {article.content.split('\n').map((paragraph, idx) => (
          <p key={idx} className="mb-4">{paragraph.trim()}</p>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ti è piaciuto questo articolo?</h2>
        <p className="text-gray-600 mb-6">Iscriviti alla nostra newsletter per ricevere altri contenuti come questo direttamente nella tua casella di posta.</p>
        <Link href="#subscribe" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300">Iscriviti alla Newsletter</Link>
      </div>
    </article>
  );
}
