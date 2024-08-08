export function getNumberPokemon(url: string): number {
  const urlParts = url.split('/');
  const number = urlParts[urlParts.length - 2];
  return Number(number);
}
