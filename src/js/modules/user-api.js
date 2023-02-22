const BASE_URL = 'https://random-user-generator1.p.rapidapi.com';

export function generateUser() {
  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'random-user-generator1.p.rapidapi.com',
    },
  };

  fetch(`${BASE_URL}/locale/id_ID?limit=5`, options)
    .then(res => {
      if (!res.ok) throw new Error('MyError');
      return res.json();
    })
    .catch(err => {
      return null;
    });
}
