export function sonTextosSimilares(texto1, texto2, umbral) {

    function calcularDistanciaLevenshtein(s1, s2) {
      const matriz = Array.from({ length: s1.length + 1 }, (_, i) => Array(s2.length + 1).fill(0));
  
      for (let i = 0; i <= s1.length; i++) {
        matriz[i][0] = i;
      }
  
      for (let j = 0; j <= s2.length; j++) {
        matriz[0][j] = j;
      }
  
      for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
          const costo = s1[i - 1] === s2[j - 1] ? 0 : 1;
          matriz[i][j] = Math.min(
            matriz[i - 1][j] + 1,
            matriz[i][j - 1] + 1,
            matriz[i - 1][j - 1] + costo
          );
        }
      }
  
      return matriz[s1.length][s2.length];
    }
  
    const distancia = calcularDistanciaLevenshtein(texto1.toLowerCase(), texto2.toLowerCase());
    return distancia <= umbral;
  }