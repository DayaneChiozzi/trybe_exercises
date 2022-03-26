const myFetch = async () => {
  try {
    const response = await fetch('https://api.coincap.io/v2/assets/');
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

async function currency() {
  const { data } = await myFetch();

  const result = data.map((element) => {
    return {
      name: element.name,
      symbol: element.symbol,
      pryceUsd: element.priceUsd,
    };
  });
  return result;
}

async function filterTen() {
  const result = await currency();

  const fil = await result.filter((_value, index) => index <= 9);

  console.log(fil);
}

filterTen();
