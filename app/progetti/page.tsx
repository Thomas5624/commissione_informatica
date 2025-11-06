"use client";

import { Activity, Lightbulb, GraduationCap, CheckCircle, Clock, X, Github, Users, Rocket, Code, BookOpen } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Project {
  name: string;
  description: string;
  status: string;
  percentage: number;
  icon: React.ReactNode;
  color: string;
  image: string;
  documentation?: {
    overview: string;
    features: string[];
    techStack: string[];
    team: string[];
    repository?: string;
    liveSite?: string;
  };
}

export default function ProgettiPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      name: "Gestione Arturiadi",
      description: "Il software per gestire a 360° la competizione sportiva principale del Tosi, sia dalla parte spettatori sia dai moderatori.",
      status: "In Corso",
      percentage: 2,
      icon: <Activity className="w-6 h-6" />,
      color: "indigo",
      image: "/progetti/gestionearturiadi.jpg",
      documentation: {
        overview: "Un sistema completo per la gestione delle Arturiadi, che include la registrazione delle squadre, il monitoraggio dei punteggi in tempo reale, e un'interfaccia pubblica per gli spettatori.",
        features: [
          "Dashboard in tempo reale dei punteggi",
          "Sistema di registrazione squadre e partecipanti",
          "Gestione calendario eventi e competizioni",
          "Statistiche dettagliate per ogni squadra",
          "Sistema di notifiche per aggiornamenti importanti"
        ],
        techStack: [
          "Next.js 14",
          "Prisma ORM",
          "PostgreSQL",
          "TailwindCSS",
          "Socket.io per aggiornamenti real-time"
        ],
        team: [
          "Marco Rossi - Project Manager",
          "Luca Bianchi - Frontend Developer",
          "Sofia Verdi - Backend Developer",
          "Alessandro Neri - UI/UX Designer"
        ],
        repository: "https://github.com/ciltosi/gestione-arturiadi",
        liveSite: "https://arturiadi.ciltosi.it"
      }
    },
    {
      name: "RipetitiTosi",
      description: "La piattaforma pensata per gli studenti del Liceo Tosi che vogliono dare o ricevere ripetizioni in modo semplice, veloce e organizzato.",
      status: "In Sviluppo",
      percentage: 5,
      icon: <Lightbulb className="w-6 h-6" />,
      color: "green",
      image: "/progetti/ripetitosi.jpg",
    },
    {
      name: "Plantosi",
      description: "Il sito dove puoi trovare tutte le piante presenti al Tosi.",
      status: "Completato",
      percentage: 100,
      icon: <CheckCircle className="w-6 h-6" />,
      color: "blue",
      image: "/progetti/sitopiante.jpg",
    },
    {
      name: "Robot Green",
      description: "Stiamo progettando e costruendo un robot ”green”, il suo scopo infatti sarà quello di raccogliere l’immondizia e differenziarla tramite sensori appositi.",
      status: "Completato",
      percentage: 100,
      icon: <CheckCircle className="w-6 h-6" />,
      color: "blue",
      image: "/progetti/robotgreen.jpg",
    },
    {
      name: "Fantarturiadi",
      description: "Il Fantacalcio delle Arturiadi l'app perfetta per gli appassionati di sport.",
      status: "Completato",
      percentage: 100,
      icon: <CheckCircle className="w-6 h-6" />,
      color: "blue",
      image: "/progetti/fantarturiadi.png",
    },
    {
      name: "Sito CI",
      description: "Il sito rappresenterà la commissione in tutti i suoi punti, dai progetti, ai membri alle iscrizioni per i nuovi interessati.",
      status: "Completato",
      percentage: 100,
      icon: <CheckCircle className="w-6 h-6" />,
      color: "blue",
      image: "/progetti/sitoci.jpg",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Intestazione Sezione */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-3">
          I Nostri Progetti
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Scopri tutte le iniziative completate, in corso di sviluppo e le idee
          future del team CILTOsi.
        </p>
      </div>

      {/* Griglia Progetti (Nuova UX) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="card rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden flex flex-col">
            <div className="relative h-40 w-full">
              <Image
                src={project.image}
                alt={`Immagine del progetto ${project.name}`}
                fill
                priority
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6 flex-grow">
              {/* Icona e Stato */}
              <div className="flex justify-between items-start mb-4">
                <div className="accent bg-accent/10 p-3 rounded-full">
                  {project.icon}
                </div>
                <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${
                  project.percentage === 100 
                    ? 'bg-green-500/10 text-green-500' 
                    : 'bg-yellow-500/10 text-yellow-500'
                }`}>
                  <Clock className="w-3 h-3 mr-1" /> {project.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2">
                {project.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>

              {/* Progresso */}
              <div className="mt-4">
                <div className="flex justify-between text-sm font-medium text-muted-foreground mb-1">
                  <span>Progresso</span>
                  <span className="accent">{project.percentage}%</span>
                </div>
                <div className="w-full bg-muted/20 rounded-full h-2.5">
                  <div
                    className="bg-accent h-2.5 rounded-full"
                    style={{ width: `${project.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Azione */}
            <div className="p-6 pt-0 card-border">
              <button 
                onClick={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
                className="w-full bg-accent text-white font-semibold py-2.5 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg cursor-pointer no-underline"
              >
                {project.percentage === 100 ? 'Guarda la Documentazione' : 'Visualizza Repository'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Backdrop con sfumatura e blur */}
          <div className="absolute inset-0 bg-background/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out animate-fadeIn" />
          
          {/* Modal Content */}
          <div 
            onClick={e => e.stopPropagation()}
            className="card rounded-2xl max-w-3xl w-full max-h-[90vh] relative animate-modalOpen overflow-hidden flex flex-col"
          >
            {/* Header sticky */}
            <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-md border-b card-border px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">{selectedProject.name}</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-muted/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-muted" />
              </button>
            </div>
            
            {/* Contenuto scrollabile */}
            <div className="overflow-y-auto flex-1">
              <div className="p-6">
                {/* Immagine principale con overlay gradiente */}
                <div className="relative h-72 w-full mb-8 rounded-xl overflow-hidden group">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>

                {/* Overview con bordo e sfondo */}
                <div className="mb-8 p-6 card rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                    <BookOpen className="w-5 h-5 accent" />
                    Overview
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.documentation?.overview}
                  </p>
                </div>

                {/* Features con stile card */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                    <Rocket className="w-5 h-5 accent" />
                    Funzionalità
                  </h3>
                    <div className="grid gap-3">
                    {selectedProject.documentation?.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 card rounded-lg hover:border-accent/20 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                        <p className="text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack con design moderno */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                    <Code className="w-5 h-5 accent" />
                    Stack Tecnologico
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.documentation?.techStack.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Team con cards */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                    <Users className="w-5 h-5 accent" />
                    Team
                  </h3>
                  <div className="grid gap-3">
                    {selectedProject.documentation?.team.map((member, index) => (
                      <div key={index} className="p-4 card rounded-lg hover:border-accent/20 transition-colors">
                          <p className="text-muted-foreground">{member}</p>
                        </div>
                    ))}
                  </div>
                </div>

                {/* Links con stile moderno */}
                <div className="flex gap-4">
                  {selectedProject.documentation?.repository && (
                    <a
                      href={selectedProject.documentation.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-app text-accent rounded-xl hover:bg-app/90 transition-colors shadow-sm hover:shadow-md cursor-pointer no-underline"
                    >
                      <Github className="w-5 h-5" />
                      Repository
                    </a>
                  )}
                  {selectedProject.documentation?.liveSite && (
                    <a
                      href={selectedProject.documentation.liveSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 btn-primary rounded-xl transition-colors shadow-sm hover:shadow-md"
                    >
                      <Rocket className="w-5 h-5" />
                      Visita il Sito
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sezione CTA / Contribuisci */}
  <div className="mt-20 text-center card rounded-xl shadow-lg p-8 md:p-12">
        <h3 className="text-3xl font-bold text-foreground mb-4">
          Hai un'idea per un nuovo progetto?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Siamo sempre alla ricerca di nuove iniziative per la nostra scuola.
          Unisciti a noi o proponi la tua idea!
        </p>
        {/** mailto precompilata per proporre un'idea */}
        <a
          href={"mailto:commissione@ciltosi.it?subject=" + encodeURIComponent("Proposta progetto - Commissione Informatica") + "&body=" + encodeURIComponent(
            "Buongiorno, scrivo per proporre un idea per un nuovo progetto che potrebbe essere sviluppato dalla Commissione Informatica. La mia proposta è la seguente:\n\n[Inserisci qui la descrizione della tua idea]\n\nRitengo che questo progetto possa portare valore aggiunto alla comunità scolastica perché...\n\nIn attesa di un vostro gentile riscontro, vi ringrazio per l'attenzione.\n\nCordiali saluti,\n[Il tuo nome]"
          )}
          className="inline-block bg-orange text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-orange/90 transition duration-300 shadow-lg"
        >
          Proponi un'Idea
        </a>
      </div>
    </main>
  );
}