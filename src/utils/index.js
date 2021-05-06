export const calculateONP = (b) => {
  const calc = (n1, s, n2) => {
    switch (s) {
      case "+":
        return +n1 + +n2;
      case "-":
        return +n1 - +n2;
      case "*":
        return +n1 * +n2;
      case "/":
        return +n1 / +n2;
      default:
        return "";
    }
  };
  const wynik = [];
  let a = b
    .trim()
    .split(/\s+/)
    .filter((v) => v);
  wynik.push([...a]);
  if (a.length < 3) {
    wynik.push(["Za mało znaków"]);
  } else if (a.length % 2 === 0) {
    wynik.push(["Ciąg powinien mieć nieparzystą liczbę znaków!"]);
  } else {
    do {
      const index = a.findIndex((v) => /^[+*/-]$/.test(v));
      if (index <= 1) {
        wynik.push(["Błąd zapisu!"]);
        break;
      }
      let [b, c, d] = a.splice(index - 2, 3);
      a.splice(index - 2, 0, calc(b, d, c));
      wynik.push([...a]);
    } while (a.length > 1);
    if (a.length === 1) {
      wynik.push(["Podana formuła jest poprawna!"]);
    }
  }

  return wynik;
};

export const conversion = (a = "", b = 10, c = 10) => {
  return (parseInt(a, b) || "").toString(c) || "Złe wartości";
};
