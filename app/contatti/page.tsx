import { Mail, Instagram, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ContattiPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Intestazione Sezione */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight mb-3">
          Resta in Contatto
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Trova tutti i modi per parlare con la Commissione Informatica o per seguire i nostri aggiornamenti.
        </p>
      </div>

      {/* Griglia dei Contatti */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Card 1: Email Ufficiale */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-6 flex items-center justify-between border-l-4 border-indigo-500">
          <div className="flex items-center space-x-4">
            <div className="text-indigo-600 bg-indigo-100 p-3 rounded-full flex-shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Email della Commissione</h3>
              <p className="text-gray-600">Per domande ufficiali, collaborazioni o proposte di progetto.</p>
              <p className="text-sm font-medium text-indigo-500 mt-1">commissioneinformaticatosi@gmail.com</p>
            </div>
          </div>
          <a href="mailto:commissioneinformaticatosi@gmail.com" className="flex-shrink-0 bg-indigo-500 text-white font-semibold py-2 px-4 rounded-full text-sm hover:bg-indigo-600 transition duration-300 flex items-center space-x-1">
            Invia Email
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Card 2: Instagram Commissione */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-6 flex items-center justify-between border-l-4 border-pink-500">
          <div className="flex items-center space-x-4">
            <div className="text-pink-600 bg-pink-100 p-3 rounded-full flex-shrink-0">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Pagina Instagram (Commissione)</h3>
              <p className="text-gray-600">Segui i nostri aggiornamenti, eventi e progetti in tempo reale.</p>
              <p className="text-sm font-medium text-pink-500 mt-1">@commissione_informatica_tosi
              </p>
            </div>
          </div>
          <a href="https://www.instagram.com/commissione_informatica_tosi/?igsh=MWVjb3o1enpsdHdqag%3D%3D#" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-pink-500 text-white font-semibold py-2 px-4 rounded-full text-sm hover:bg-pink-600 transition duration-300 flex items-center space-x-1">
            Seguici
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Card 3: Instagram Presidente */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-6 flex items-center justify-between border-l-4 border-pink-400">
          <div className="flex items-center space-x-4">
            <div className="text-pink-500 bg-pink-100 p-3 rounded-full flex-shrink-0">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Pagina Instagram (Presidente)</h3>
              <p className="text-gray-600">Contatta direttamente il Presidente per questioni istituzionali o urgenti.</p>
              <p className="text-sm font-medium text-pink-400 mt-1">@solferino.tech</p>
            </div>
          </div>
          <a href="https://www.instagram.com/solferino.tech/?igsh=MTdrMGNyODZ4b3Zsbg%3D%3D" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-pink-400 text-white font-semibold py-2 px-4 rounded-full text-sm hover:bg-pink-500 transition duration-300 flex items-center space-x-1">
            Vai al Profilo
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Card 4: Sito Ufficiale Presidente */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-6 flex items-center justify-between border-l-4 border-gray-500">
          <div className="flex items-center space-x-4">
            <div className="text-gray-600 bg-gray-100 p-3 rounded-full flex-shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Sito Ufficiale del Presidente</h3>
              <p className="text-gray-600">Accesso al sito personale o istituzionale del Presidente.</p>
              <p className="text-sm font-medium text-gray-500 mt-1">https://www.solferinotech.com/</p>
            </div>
          </div>
          <a href="https://www.solferinotech.com/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-gray-500 text-white font-semibold py-2 px-4 rounded-full text-sm hover:bg-gray-600 transition duration-300 flex items-center space-x-1">
            Visita il Sito
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>

      {/* Sezione CTA / Mappa (Placeholder) */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Dove ci troviamo?</h3>
        <p className="text-gray-600 mb-6 max-w-4xl mx-auto">
          Puoi trovarci fisicamente nell'aula di Informatica Tosi. Utilizza la mappa per le indicazioni generali.
        </p>
        <div className="rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.0900000000003!2d8.910000000000002!3d45.61000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47868d0000000001%3A0x0000000000000001!2sLiceo%20Scientifico%20Statale%20%22Arturo%20Tosi%22!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}