import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, BookOpen, Users, Activity, Lightbulb, CheckCircle } from "lucide-react";

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

  const activities = [
    {
      title: "Sviluppo Software",
      description: "Creiamo soluzioni software su misura per le esigenze della nostra scuola, utilizzando le tecnologie più moderne e performanti.",
      icon: <Code className="w-10 h-10 text-indigo-600" />
    },
    {
      title: "Formazione e Condivisione",
      description: "Organizziamo workshop, seminari e incontri per diffondere la cultura digitale e condividere le nostre conoscenze con studenti e docenti.",
      icon: <BookOpen className="w-10 h-10 text-indigo-600" />
    },
    {
      title: "Supporto Tecnico",
      description: "Offriamo supporto tecnico per gli eventi scolastici e le infrastrutture informatiche, garantendo che tutto funzioni al meglio.",
      icon: <Users className="w-10 h-10 text-indigo-600" />
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/banner.png"
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
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
            Innoviamo la scuola un progetto alla volta. Scopri le nostre iniziative e unisciti a noi per fare la differenza.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/progetti" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              I nostri Progetti
            </Link>
            <Link href="/contatti" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-100">
              Contattaci
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wider uppercase">La Nostra Missione</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Portare l'Innovazione nella Didattica
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              Il nostro obiettivo è quello di arricchire l'esperienza scolastica attraverso la tecnologia. Sviluppiamo progetti che non solo risolvono problemi pratici, ma che stimolano anche la creatività e la collaborazione tra studenti e docenti. Crediamo in un approccio pratico, dove ogni idea può trasformarsi in un'opportunità di crescita.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Le Nostre Attività
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Dalla programmazione alla formazione, ecco come contribuiamo a migliorare la nostra scuola.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {activities.map((activity) => (
              <div key={activity.title} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
                <div className="mb-4">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{activity.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Progetti in Evidenza
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Una selezione dei progetti che mostrano la nostra passione e il nostro impegno.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            {/* Main Project */}
            <div className="lg:col-span-2 bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col group">
              <div className="relative h-64 w-full">
                <Image
                  src={featuredProjects[0].image}
                  alt={`Immagine del progetto ${featuredProjects[0].name}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800">{featuredProjects[0].name}</h3>
                <p className="mt-3 text-gray-600 flex-grow">{featuredProjects[0].description}</p>
                <div className="mt-6">
                  <Link href={featuredProjects[0].href} className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Scopri di più <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Side Projects */}
            <div className="space-y-8">
              {featuredProjects.slice(1).map((project) => (
                <div key={project.name} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col group">
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
                    <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                    <p className="mt-2 text-gray-600 text-sm flex-grow">{project.description}</p>
                    <div className="mt-4">
                      <Link href={project.href} className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Scopri di più <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Chi Siamo
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Siamo un gruppo di studenti appassionati di informatica, con la voglia di creare e innovare. La nostra commissione è il punto di riferimento per la tecnologia al Liceo Tosi.
          </p>
          <div className="mt-8">
            <Link href="/chi-siamo" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Scopri il Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
