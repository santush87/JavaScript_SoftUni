const enumIcon = {
  Sunny: `&#x2600`, // ☀
  "Partly sunny": `&#x26C5`, // ⛅
  Overcast: `&#x2601`, // ☁
  Rain: `&#x2614`, // ☂
  Degrees: `&#176`, // °
};

const forcatContainer = document.getElementById(`forecast`);

function attachEvents() {
  document.getElementById(`submit`).addEventListener(`click`, getWeather);
}

async function getWeather() {
  const url = `http://localhost:3030/jsonstore/forecaster/locations`;
  const townName = document.getElementById(`location`).value;
  try {
    const response = await fetch(url);
    const data = await response.json();

    const info = data.find((s) => s.name === townName);
    creatForcaster(info.code);
  } catch (error) {
    forcatContainer.style.display = `block`;
    forcatContainer.innerText = `Error`;
  }
}
async function creatForcaster(code) {
  const currentSection = document.getElementById(`current`);

  const upcomingContainer = document.getElementById(`upcoming`);

  const urlToday = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
  const urlUpcoming = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

  try {
    const [responseToday, responseUpcoming] = Promise.all([
      fetch(urlToday),
      fetch(urlUpcoming),
    ]);

    const dataToday = await responseToday.json();
    const dataUpcoming = await responseUpcoming.json();

    forcatContainer.style.display = `block`;

    const todayHTMLTemp = createToday(dataToday);
    currentSection.appendChild(todayHTMLTemp);

    const upcomingHTMLTemp = createUpcoming(dataUpcoming);
    upcomingContainer.appendChild(upcomingHTMLTemp);
  } catch (error) {
    forcatContainer.style.display = `block`;
    forcatContainer.innerText = `Error`;
  }
}

function createUpcoming(data) {
  const container = document.createElement(`div`);
  container.classList.add(`forecast-info`);

  for (let i = 0; i < 3; i++) {
    const { condition, high, low } = data.forecast[i];

    const theSpan = document.createElement(`span`);
    theSpan.classList.add(`upcoming`);

    const firstSpanSymbol = document.createElement(`span`);
    firstSpanSymbol.classList.add(`symbol`);
    firstSpanSymbol.innerHTML = enumIcon[condition];
    theSpan.appendChild(firstSpanSymbol);

    const firstSpanTemp = document.createElement(`span`);
    firstSpanTemp.classList.add(`forecast-data`);
    firstSpanTemp.innerHTML = `${low}${enumIcon["Degrees"]}/${high}${enumIcon["Degrees"]}`;
    theSpan.appendChild(firstSpanTemp);

    const firstSpanCondition = document.createElement(`span`);
    firstSpanCondition.classList.add(`forecast-data`);
    firstSpanCondition.innerHTML = condition;
    theSpan.appendChild(firstSpanCondition);

    container.appendChild(theSpan);
  }
  return container;
}

function createToday(data) {
  const { condition, high, low } = data.forecast;
  const conditionerContainer = document.createElement(`div`);
  conditionerContainer.classList.add(`forecasts`);

  const conditionIconSpan = document.createElement(`span`);
  conditionIconSpan.classList.add(`condition`, `symbol`);
  conditionIconSpan.innerHTML = enumIcon[condition];

  const conditionSpan = document.createElement(`span`);
  conditionSpan.classList.add(`condition`);

  const nameSpan = document.createElement(`span`);
  nameSpan.classList.add(`forecast-data`);
  nameSpan.textContent = data.name;

  const tempSpan = document.createElement(`span`);
  tempSpan.classList.add(`forecast-data`);
  tempSpan.innerHTML = `${low}${enumIcon["Degrees"]}/${high}${enumIcon["Degrees"]}`;

  const conditionTxtSpan = document.createElement(`span`);
  conditionTxtSpan.classList.add(`forecast-data`);
  conditionTxtSpan.innerHTML = condition;

  conditionSpan.appendChild(nameSpan);
  conditionSpan.appendChild(tempSpan);
  conditionSpan.appendChild(conditionTxtSpan);

  conditionerContainer.appendChild(conditionIconSpan);
  conditionerContainer.appendChild(conditionSpan);

  return conditionerContainer;
}

attachEvents();
