import md5 from 'js-md5';

const timestamp = Number(new Date());
const PUBLIC_KEY = '7675892e018b4cd58114f8bcc9f4ee08';
const PRIVATE_KEY = '3b2f7c4bbc161584dd4eb3ccdb13fabcdc68f415';
const hash = md5.create();
const reqUrl = 'https://gateway.marvel.com/v1/public/characters';

export async function listHeros() {
  hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

  const response = await fetch(
    `${reqUrl}?ts=${timestamp}&orderBy=name&limit=16&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
  ).then(function (response) {
    return response.json();
  });

  console.log('response', response);
  if (response.code !== 200) throw new Error('Erro ao exibir herois');
  return response.data;
}

export async function getHero(id) {
  const url = `${reqUrl}/${id}?apikey=${PUBLIC_KEY}&ts=${timestamp}&hash=${hash.hex()}`;

  const response = await fetch(url).then(function (response) {
    return response.json();
  });
  console.log('getHero response inside', url, response);
  if (response.code !== 200) throw new Error('Erro ao exibir heroi');
  return response.data;
}
