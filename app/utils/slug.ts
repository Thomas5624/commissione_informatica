export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD') // Normalizza i caratteri accentati
    .replace(/[\u0300-\u036f]/g, '') // Rimuove i diacritici
    .replace(/[^\w\s-]/g, '') // Rimuove caratteri speciali
    .replace(/\s+/g, '-') // Sostituisce spazi con trattini
    .replace(/-+/g, '-') // Rimuove trattini multipli
    .trim(); // Rimuove spazi iniziali e finali
}
