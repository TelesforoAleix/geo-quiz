import geoData from "../data/geoData";

function randomIndex() {
  return Math.floor(Math.random() * geoData.length);
}

function population() {
  let optionId1 = randomIndex();
  let optionId2 = randomIndex();

  while (optionId1 === optionId2) {
    optionId2 = randomIndex();
  }

  const option1 = geoData[optionId1];
  const option2 = geoData[optionId2];

  const question = {
    title: "Quin municipi té més població?",
    option1: option1,
    option2: option2,
    answer: option1.poblacio > option2.poblacio ? option1 : option2,
    explanation: `${option1.municipi} té ${option1.poblacio}, mentres que ${option2.municipi} té ${option2.poblacio}`,
  };

  return question;
}

export default population;
