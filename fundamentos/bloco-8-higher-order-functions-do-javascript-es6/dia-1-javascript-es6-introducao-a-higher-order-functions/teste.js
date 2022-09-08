const wakeUp = () => {
  return 'Acordando!!';
}
const getUp = () => {
  return 'Bora tomar café!!';
}
const sleep = () => {
  return 'Partiu dormir!!';
}

const doingThings = (funcao) => {
  console.log((funcao()));
}
// Ao chamar a função doingThings:
doingThings(wakeUp);
doingThings(getUp);
doingThings(sleep);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!