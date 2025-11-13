import Image from "next/image";
import Link from "next/link";
import { Rss, Lock, GitFork, Cat, LayoutGrid, Cpu, Bot, Rocket, Youtube, User } from "lucide-react";
import { articles } from "./articles";
import { createSlug } from "../utils/slug";

export default function NewsletterPage() {
  // add icons to articles
  const articlesWithIcons = articles.map((article) => {
    let icon = <Rss className="w-4 h-4 mr-2" />;
    switch (article.category) {
      case "Sicurezza IT":
        icon = <Lock className="w-4 h-4 mr-2" />;
        break;
      case "Hardware & Software":
        icon = <GitFork className="w-4 h-4 mr-2" />;
        break;
      case "Curiosità Tech":
        icon = <Cat className="w-4 h-4 mr-2" />;
        break;
      case "Browser & Privacy":
        icon = <LayoutGrid className="w-4 h-4 mr-2" />;
        break;
      case "Robotica & Open Source":
        icon = <Bot className="w-4 h-4 mr-2" />;
        break;
      case "Intelligenza Artificiale":
        icon = <Cpu className="w-4 h-4 mr-2" />;
        break;
      case "Notizie Tech":
        icon = <Youtube className="w-4 h-4 mr-2" />;
        break;
      case "Gaming & VR":
        icon = <Rocket className="w-4 h-4 mr-2" />;
        break;
    }
    return { ...article, icon };
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Intestazione Sezione e Iscrizione */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight mb-3">
          La Nostra Newsletter
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-6">
          Il mondo dell'informatica evolve alla velocità della luce. Ogni giorno nascono nuove tecnologie, si scoprono vulnerabilità di sicurezza e si sviluppano strumenti innovativi che cambiano il modo in cui viviamo e lavoriamo. Restare aggiornati non è solo utile, ma una necessità.
        </p>
                  <div className="bg-gray-100 p-6 rounded-xl shadow-inner inline-flex items-center space-x-3 text-gray-500 font-medium">
                    <Rss className="w-6 h-6" />
                    <span>Iscriviti per non perdere i nostri aggiornamenti!</span>
                    <button
                      disabled
                      className="ml-4 bg-gray-400 text-white py-2 px-5 rounded-full cursor-not-allowed"
                    >
                      Iscriviti
                    </button>
                    <span className="text-sm font-semibold text-gray-600">(Prossimamente)</span>
                  </div>      </div>

      {/* Sezione Articoli */}
      <section className="mb-16">
        <h3 className="text-3xl font-bold text-gray-800 mb-8 border-b border-gray-200 pb-3">
          Ultimi Articoli
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesWithIcons.map((article) => (
            <Link href={`/newsletter/${createSlug(article.title)}`} key={article.title} className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group">
              <div className="relative w-full h-48">
                <Image
                  src={article.imageUrl}
                  alt={`Immagine per l'articolo: ${article.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {article.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">{article.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  {article.icon}
                  <span>{article.category}</span>
                </div>
                {article.author && (
                  <div className="flex items-center text-sm text-gray-500 mt-2">
                    <User className="w-4 h-4 mr-2" />
                    <span>{article.author}</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sezione CTA per Contribuire */}
  <div className="mt-20 text-center bg-white rounded-xl shadow-lg p-8 md:p-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Hai una notizia interessante da condividere?
        </h3>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          La nostra newsletter è aperta ai contributi. Se hai un argomento tech che vuoi esplorare, faccelo sapere!
        </p>
        <a
          href="mailto:commissioneinformaticatosi@gmail.com?subject=Proposta%20Articolo%20Newsletter&body=Ciao%20Commissione%20Informatica,%0D%0A%0D%0Avorrei%20proporre%20un%20articolo%20per%20la%20vostra%20newsletter.%0D%0A%0D%0A**Titolo%20proposto:**%20[Inserire%20qui%20il%20titolo]%0D%0A%0D%0A**Breve%20descrizione:**%20[Inserire%20qui%20una%20breve%20descrizione%20dell'articolo]%0D%0A%0D%0A**Fonti%20(se%20disponibili):**%20[Inserire%20qui%20eventuali%20link%20a%20fonti]%0D%0A%0D%0AGrazie!%0D%0A[Il%20tuo%20nome]"
          className="inline-block bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-indigo-700 transition duration-300 shadow-lg"
        >
          Proponi un Articolo
        </a>
      </div>
    </main>
  );
}
