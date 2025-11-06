import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Activity, Lightbulb, CheckCircle } from "lucide-react";

export default function Home() {
  const featuredProjects = [
    {
      name: "Gestione Arturiadi",
      description: "Il software per gestire a 360° la competizione sportiva principale del Tosi.",
      image: "/progetti/gestionearturiadi.jpg",
      href: "/progetti"
    },
    {
      name: "RipetitiTosi",
      description: "La piattaforma per gli studenti del Tosi che vogliono dare o ricevere ripetizioni.",
      image: "/progetti/ripetitosi.jpg",
      href: "/progetti"
    },
    {
      name: "Sito CI",
      description: "Il sito che stai navigando, rappresentazione della commissione in tutti i suoi punti.",
      image: "/progetti/sitoci.jpg",
      href: "/progetti"
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative header-bg header-text">
        <div className="absolute inset-0">
          <Image
            src="/progetti/robotgreen.jpg" // Using one of the project images as a background
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Commissione Informatica
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-muted">
            Innoviamo la scuola un progetto alla volta. Scopri le nostre iniziative e unisciti a noi per fare la differenza.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/progetti" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-accent text-white">
              I nostri Progetti
            </Link>
            <Link href="/contatti" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md card">
              Contattaci
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
  <section className="py-20 bg-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Progetti in Evidenza
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted">
              Una selezione dei progetti che mostrano la nostra passione e il nostro impegno.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div key={project.name} className="card rounded-xl shadow-lg overflow-hidden flex flex-col group">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={`Immagine del progetto ${project.name}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-app">{project.name}</h3>
                  <p className="mt-2 text-muted text-sm flex-grow">{project.description}</p>
                  <div className="mt-4">
                    <Link href={project.href} className="font-semibold accent hover:opacity-90">
                      Scopri di più <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-app tracking-tight">
            Chi Siamo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Siamo un gruppo di studenti appassionati di informatica, con la voglia di creare e innovare. La nostra commissione è il punto di riferimento per la tecnologia al Liceo Tosi.
          </p>
          <div className="mt-8">
            <Link href="/chi-siamo" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-accent text-header-text">
              Scopri il Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
