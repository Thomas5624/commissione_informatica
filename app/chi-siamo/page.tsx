'use client';

import { useState } from 'react';
import Image from "next/image";
import { Zap, Users, Code, BookOpen, ChevronDown } from "lucide-react";

// FAQ data
const faqs = [
  {
    question: "Chi siete?",
    answer: "Siamo un gruppo di studenti del liceo Arturo Tosi, accomunati dalla passione per la tecnologia e l’innovazione. La nostra squadra è formata da ragazzi di tutte le classi, uniti dall’obiettivo di migliorare le competenze tecnologiche all’interno della scuola.",
  },
  {
    question: "Qual è il vostro obiettivo principale?",
    answer: "Il nostro scopo è favorire la crescita delle competenze digitali tra gli studenti e incoraggiare un uso consapevole e creativo della tecnologia. Crediamo che le conoscenze informatiche siano essenziali per il futuro e vogliamo aiutare i nostri compagni a scoprirle e svilupparle.",
  },
  {
    question: "Chi fa parte del vostro team?",
    answer: "Il nostro gruppo è composto da studenti di ogni anno scolastico e da ex-alunni che continuano a collaborare ai progetti. Siamo coordinati da un presidente esperto che lavora con aziende leader nel settore tecnologico, come Microsoft, Google e molte altre.",
  },
  {
    question: "È possibile entrare senza esperienza?",
    answer: "Sì! Accettiamo volentieri nuovi membri che abbiano curiosità e voglia di imparare. Non è necessario essere esperti, ma è fondamentale essere motivati e pronti a crescere.",
  },
  {
    question: "Come unirsi a voi?",
    answer: "Per entrare a far parte del gruppo, è sufficiente compilare il modulo di iscrizione disponibile sul nostro sito. Puoi anche visitare uno dei nostri incontri settimanali o contattarci tramite i nostri canali social.",
  },
];

// Accordion Item Component
function FaqItem({ faq }: { faq: { question: string; answer: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <p className="pt-2 text-gray-600">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ChiSiamoPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Sezione 1: Missione e Identità (Migliorata con layout a due colonne su desktop) */}
      <section className="mb-16 bg-white p-8 md:p-12 rounded-xl shadow-2xl shadow-blue-50/50 transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Testo (Colonna 1/2) */}
          <div className="lg:col-span-2">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2 block">
              La Nostra Identità
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Commissione Informatica Liceo Tosi
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Siamo la Commissione Informatica del Liceo Arturo Tosi, un gruppo di studenti dalle prime alle quinte classi uniti dalla passione per la tecnologia e l’innovazione. La nostra missione è promuovere e valorizzare l’uso delle tecnologie informatiche all’interno della scuola, contribuendo a renderla un luogo sempre più moderno e stimolante. Ogni giorno collaboriamo per creare un ambiente dinamico, in cui ogni studente possa apprendere, sperimentare e scoprire nuovi modi di utilizzare la tecnologia. Crediamo fermamente che essa rappresenti una risorsa fondamentale per il futuro e, per questo, ci impegniamo a svilupparla, migliorarla e adattarla alle esigenze di tutti.
            </p>
          </div>

          {/* Elemento Grafico (Colonna 3) */}
          <div className="lg:col-span-1 flex justify-center items-center relative">
            {/* Sostituisce il vecchio box con un elemento grafico moderno */}
            <div className="w-full max-w-xs h-72 bg-app rounded-2xl shadow-xl flex flex-col justify-center items-center p-6 text-center border-4 border-indigo-200 dark:border-indigo-600 border-dashed">
              <Zap className="w-12 h-12 text-indigo-600 mb-4" />
              <p className="text-xl font-bold text-indigo-800 dark:text-indigo-600">
                Innovazione al Servizio del Liceo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione 2: Cosa Facciamo (Le nostre attività) */}
      <section className="mb-16">
        <h3 className="text-3xl font-bold text-gray-800 mb-8 border-b border-gray-200 pb-3">
          Le nostre attività
        </h3>

        <div className="space-y-12">
          {/* Attività 1: Sviluppo Progetti */}
          <div className="flex flex-col md:flex-row items-start md:space-x-8">
            <div className="flex-shrink-0 text-indigo-600 mb-4 md:mb-0">
              <Code className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Sviluppo Software e Piattaforme
              </h4>
              <p className="text-gray-600">
                Ci occupiamo di una vasta gamma di progetti, dalla{" "}
                <strong className="font-bold">programmazione</strong> alla sicurezza informatica.
                Utilizziamo linguaggi come PHP, Python, JavaScript e framework
                moderni per creare strumenti che migliorano la vita scolastica
                di studenti e docenti. Ci incontriamo in un'aula dedicata per
                coordinare i lavori e raccogliere feedback.
              </p>
            </div>
          </div>

          {/* Attività 2: Workshop e Formazione */}
          <div className="flex flex-col md:flex-row items-start md:space-x-8">
            <div className="flex-shrink-0 text-indigo-600 mb-4 md:mb-0">
              <BookOpen className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Formazione e Condivisione
              </h4>
              <p className="text-gray-600">
                Durante l'anno scolastico organizziamo{" "}
                <strong className="font-bold">workshop, talk e seminari</strong> sia all'interno
                che all'esterno dell'istituto (spesso durante le assemblee
                scolastiche). Questi incontri affrontano temi diversi, dalle
                ultime{" "}
                <strong className="font-bold">tendenze tecnologiche</strong> all'uso di software
                specifici, offrendo a tutti l'opportunità di ampliare le proprie
                conoscenze.
              </p>
            </div>
          </div>

          {/* Attività 3: Supporto Tecnico */}
          <div className="flex flex-col md:flex-row items-start md:space-x-8">
            <div className="flex-shrink-0 text-indigo-600 mb-4 md:mb-0">
              <Users className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Coordinamento e Supporto
              </h4>
              <p className="text-gray-600">
                Oltre allo sviluppo, la Commissione si occupa di fornire
                supporto tecnico e logistico per gli eventi scolastici e le
                necessità informatiche interne. Il nostro obiettivo è garantire
                che l'infrastruttura tecnologica del Liceo Tosi sia sempre{" "}
                <strong className="font-bold">efficiente e funzionante</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Domande Frequenti
        </h3>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} />
          ))}
        </div>
      </section>

      {/* Sezione 3: Invito all'Azione (CTA) */}
      <section className="bg-indigo-600 text-white p-8 md:p-12 rounded-xl text-center shadow-xl">
        <h3 className="text-3xl font-bold mb-4">
          Unisciti alla Commissione Informatica!
        </h3>
        <p className="mb-6 max-w-3xl mx-auto opacity-90">
          Se sei uno studente con la passione per l'informatica e la voglia di
          lasciare un segno nella tua scuola, ti aspettiamo.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300 shadow-lg"
        >
          Scopri Come Partecipare
        </a>
      </section>
    </main>
  );
}