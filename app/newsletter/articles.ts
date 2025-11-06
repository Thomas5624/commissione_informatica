export interface ArticleData {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  content: string;
  publishDate?: string;
  readTime?: string;
}

export const articles: ArticleData[] = [
  {
    title: "Cuffie e auricolari Bluetooth sono hackerabili",
    description: "La vulnerabilità che mette a rischio i tuoi dati e la privacy. Cosa fare per proteggersi.",
    category: "Sicurezza IT",
    imageUrl: "/newsletter/cuffie_hacker.png",
    publishDate: "25 Ottobre 2023",
    readTime: "5 min",
  content: `Alcuni auricolari Bluetooth con chip Airoha, usati da marchi noti come Sony, Jabra e Bose, presentano gravi falle di sicurezza che permettono attacchi senza pairing se l’hacker è in un raggio d'azione di 10 metri circa. Ai cybercriminali basta quindi posizionarsi nelle vicinanze del dispositivo per prenderne il controllo e spiare la vittima.

Un recente studio condotto dal team di ricerca ERNW ha identificato un insieme di vulnerabilità presenti in molti dispositivi audio wireless, legate all'utilizzo di particolari chip Bluetooth prodotti dall'azienda taiwanese Airoha e utilizzati da decine di marchi, tra cui Sony, Marshall, Bose, Jabra e JBL. La falla scoperta permette, in condizioni precise, a un hacker di prendere il controllo delle vostre cuffie senza bisogno di alcuna autenticazione o processo di accoppiamento.

La buona notizia è che questo tipo di attacco richiede competenze avanzate, strumenti specifici e la presenza fisica dell'attaccante nelle vicinanze. La cattiva notizia, però, è che se tutte queste condizioni sono soddisfatte, un malintenzionato potrebbe intercettare ciò che state ascoltando, carpire l'audio dal microfono o, nei casi più gravi, impersonare le vostre cuffie e comandare il vostro smartphone, ad esempio per avviare chiamate senza che ve ne accorgiate.

Ciò che può fare l’hacker una volta preso il controllo delle cuffie include: lettura del contenuto presente in RAM (informazioni sui file audio in riproduzione), controllo del microfono per usarlo come "cimice ambientale" e controllo del dispositivo collegato per avviare chiamate o estrarre dati come cronologia e contatti.

Come capire se le vostre cuffie sono state compromesse? I ricercatori non hanno fornito indicatori definitivi, ma possibili segnali includono consumo anomalo della batteria, surriscaldamento inusuale, malfunzionamenti improvvisi, chiamate mai effettuate o contatti sconosciuti salvati nella rubrica. Per difendersi: verificate se il vostro modello è elencato tra i potenzialmente vulnerabili, installate aggiornamenti firmware quando disponibili e, in ambienti sensibili, valutate l'uso di cuffie cablate.`
  },
  {
    title: "Arduino: Dove Hardware e Software si incontrano",
    description: "Esploriamo il mondo dell'open-source tra componenti fisici e codice.",
    category: "Hardware & Software",
    imageUrl: "/newsletter/arduino.png",
    publishDate: "24 Ottobre 2023",
    readTime: "7 min",
  content: `Hai mai voluto creare un sistema che accenda le luci a un certo orario o con un comando vocale senza usare Alexa? O un radar che rilevi gli oggetti vicini anche al buio? O ancora, coltivare piante con un impianto di irrigazione smart che si regoli in base all’umidità del terreno?

Con Arduino, l’unico limite è la tua immaginazione (e il portafoglio). Questa piattaforma, molto popolare per la sua semplicità, unisce hardware accessibile e software intuitivo, permettendoti di dare vita alle tue invenzioni senza bisogno di essere un esperto e avviandoti al mondo dell’ingegneria.

Arduino è una scheda a microcontrollore open-source in grado di leggere input (come luce, pressione, temperatura, umidità o distanza), elaborare i dati attraverso un programma scritto in C++ e generare output (accendere LED, inviare dati online, attivare motori o allarmi). Esistono diverse versioni, la più utilizzata è Arduino Uno, spesso venduta in kit con componenti essenziali.

Per iniziare basta collegare la scheda al computer e installare l’Arduino IDE, scrivere il codice e caricarlo sulla scheda. È possibile utilizzare simulatori online come Tinkercad per sperimentare senza rischiare di danneggiare i componenti. La community offre molte risorse e librerie pronte all'uso.`
  },
  {
    title: "Acoustic Kitty: il gatto spia",
    description: "La storia bizzarra dell'operazione della CIA per usare gatti per lo spionaggio.",
    category: "Curiosità Tech",
    imageUrl: "/newsletter/acoustic_kitty.jpg",
    publishDate: "23 Ottobre 2023",
    readTime: "6 min",
  content: `Nei primi anni '60, durante la guerra fredda, la CIA addestrò dei gatti perché spiassero i diplomatici sovietici nel progetto noto come Acoustic Kitty. L'idea era di impiantare un trasmettitore radio e un microfono sui gatti, sfruttando la loro abitudine di aggirarsi nei luoghi pubblici per catturare conversazioni di interesse.

Nella pratica, i ricercatori impiantarono dispositivi sul retro del collo e nel condotto uditivo, e cercarono di addestrare i gatti a ripetere suoni. Tuttavia, molti problemi emersero, tra cui l'autonomia delle batterie, la distrazione naturale dei gatti e difficoltà nell'addestramento.

In uno dei test sul campo, il gatto impiegato fu investito da un taxi e morì, contribuendo alla fine delle sperimentazioni. Il progetto fu anche costoso: si dice che la CIA spese milioni per il tentativo, che divenne più noto per le sue difficoltà e il suo lato grottesco che per i risultati ottenuti.`
  },
  {
    title: 'Vivaldi: il browser europeo che sfida i "rapinatori del web"',
    description: "Un'alternativa focalizzata su privacy, personalizzazione e performance.",
    category: "Browser & Privacy",
    imageUrl: "/newsletter/vivaldi.png",
    publishDate: "22 Ottobre 2023",
    readTime: "8 min",
  content: `Vivaldi Technologies ha rilasciato la versione 7.2 del suo browser, che si propone come un’alternativa ai grandi colossi tecnologici. Vivaldi punta a offrire un'esperienza di navigazione senza tracciamento invasivo, proteggendo la privacy degli utenti. Fondato da Jon Stephenson von Tetzchner, ex CEO di Opera, Vivaldi si concentra su personalizzazione, privacy e trasparenza.

La versione 7.2 introduce miglioramenti come una barra degli indirizzi con suggerimenti più intelligenti, caricamenti più rapidi e gestione avanzata delle schede. Tra le caratteristiche chiave: client email integrato, supporto RSS, barra laterale per accesso rapido a segnalibri e funzioni, "tab stacks" per organizzare schede e numerose opzioni di personalizzazione. Vivaldi si pone come scelta indipendente e orientata alla privacy.`
  },
  {
    title: "Il Robot stampato in 3D open source",
    description: "Come la stampa 3D sta democratizzando la robotica con progetti accessibili a tutti.",
    category: "Robotica & Open Source",
    imageUrl: "/newsletter/robot_stampato.jpg",
    publishDate: "21 Ottobre 2023",
    readTime: "7 min",
  content: `Questo robot open source punta a rendere l'automazione di laboratorio accessibile a tutti. Un gruppo di ricercatori ha creato FLUID (Flowing Liquid Utilizing Interactive Device), un sistema robotico open source per automatizzare esperimenti chimici, costruito con stampante 3D e componenti economici.

FLUID ha un design modulare con unità indipendenti che includono siringhe, valvole, motori passo-passo e servomotori. I sensori di fine corsa rilevano i limiti di riempimento e le schede microcontrollori gestiscono il sistema via USB. Il software consente il controllo in tempo reale e la raccolta dati.

Questo approccio offre un'alternativa a basso costo ai robot da laboratorio commerciali, permettendo ai ricercatori di personalizzare e replicare il robot grazie ai file di progettazione condivisi.`
  },
  {
    title: "ChatGPT è davvero così affidabile?",
    description: "Analisi critica sull'accuratezza e i limiti dei grandi modelli linguistici.",
    category: "Intelligenza Artificiale",
    imageUrl: "/newsletter/chatgpt.png",
    publishDate: "20 Ottobre 2023",
    readTime: "9 min",
  content: `ChatGPT è un prototipo di intelligenza artificiale disponibile sul web, basato sulla tecnologia Generative Pre-trained Transformer (GPT). Rilasciato da OpenAI nel 2022, ChatGPT può conversare e generare contenuti testuali. Quando genera risposte, il modello non "cerca" in tempo reale sul web ma produce testi basati sui dati di addestramento, il che può portare a "allucinazioni" o informazioni errate su argomenti rari o recenti.

Secondo valutazioni come il test MMLU, ChatGPT mostra un'accuratezza elevata su molti compiti, ma l'affidabilità varia in base al dominio e all'aggiornamento dei dati. Per usare ChatGPT efficacemente è importante verificare le risposte, usare fonti affidabili e integrare il modello con controlli umani quando necessario.`
  },
  {
    title: "VLC festeggia 20 anni inviando video sulla Luna",
    description: "Un'impresa insolita per celebrare un software open source iconico.",
    category: "Notizie Tech",
    imageUrl: "/newsletter/VLC_Luna.jpg",
    publishDate: "19 Ottobre 2023",
    readTime: "6 min",
  content: `Per celebrare il suo 20° anniversario, il team di VLC ha intrapreso un'iniziativa simbolica e creativa: inviare un video sulla Luna per sottolineare l'innovazione e lo spirito della comunità open source che sostiene il progetto. L'operazione è stata concepita come omaggio e dimostrazione delle possibilità creative offerte dal software open source.

L'iniziativa ha richiesto coordinamento tecnico e creativo e ha attirato l'attenzione della comunità, rafforzando il legame tra gli sviluppatori e gli utenti di VLC.`
  },
  {
    title: "REMspace: Sogno Multiplayer in arrivo?",
    description: "Le ultime novità sul promettente gioco multiplayer in realtà virtuale.",
    category: "Gaming & VR",
    imageUrl: "/newsletter/remspace.jpg",
    publishDate: "18 Ottobre 2023",
    readTime: "5 min",
  content: `Avete mai pensato di poter parlare con qualcuno mentre dormite? REMspace sostiene di aver avviato esperimenti che permettono una forma di comunicazione durante i sogni lucidi, con risultati preliminari promettenti.

In esperimenti controllati, partecipanti sono stati monitorati tramite EEG per entrare in fase REM; a uno veniva trasmessa una parola chiave tramite auricolari, che poi veniva ripetuta nel sogno e registrata. Il secondo partecipante, anch'egli in sogno lucido, riceveva lo stesso stimolo e, al risveglio, entrambi riportavano il messaggio, suggerendo una trasmissione riuscita.

La tecnologia è ancora in fase sperimentale e serve molta cautela: i risultati sono preliminari, ci sono margini di errore e la replicabilità è da verificare. Se confermata, però, la possibilità di comunicare nei sogni aprirebbe scenari sorprendenti per ricerca, apprendimento e intrattenimento.`
  },
  {
  title: "Il computer quantistico D-Wave rivoluziona la scienza",
  description: "Un annuncio su vantaggio quantistico e le implicazioni per la ricerca sui materiali.",
  category: "Ricerca & Quantum",
  imageUrl: "/newsletter/d_wave.png",
  publishDate: "12 Marzo 2025",
  readTime: "6 min",
  content: `Il 12 marzo 2025, D-Wave Quantum Inc. ha annunciato un risultato significativo nel campo del calcolo quantistico: un presunto "vantaggio quantistico" nella simulazione del comportamento dei materiali magnetici utilizzando il processore Advantage2 con oltre 5.000 qubit.

Secondo il team, la simulazione ha richiesto minuti, mentre un supercomputer classico avrebbe impiegato tempi impraticabili. Il metodo sfrutta il quantum annealing, diverso dall'approccio dei computer quantistici universali. L'annuncio ha suscitato attenzione ma anche critiche: alcuni ricercatori sostengono che tecniche classiche ottimizzate possono competere con i risultati quantistici.

il dibattito rimane aperto, ma se confermato il risultato potrebbe accelerare la progettazione di nuovi materiali e avere impatti pratici in elettronica ed energia.`
  }
];
