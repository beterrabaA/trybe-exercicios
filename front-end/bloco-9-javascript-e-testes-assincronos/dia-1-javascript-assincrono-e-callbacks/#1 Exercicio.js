const getPlanet = () => {
    const mars = {
      name: 'Mars',
      distanceFromSun: {
        value: 227900000,
        measurementUnit: 'kilometers',
      },
    };
    setTimeout(() => console.log('Returned planet: ', mars), 4000)
  };
  console.log('batata')
  getPlanet(); // Imprime Marte depois de 4 segundos