const pageContent = {
    imgOverview: document.querySelector('[data-content="imgOverview"]'),
    imgInternal: document.querySelector('[data-content="imgInternal"]'),
    imgOverlay: document.querySelector('[data-content="imgOverlay"]'),
    planetTitle: document.querySelector('[data-content="planetTitle"]'),
    overviewDesc: document.querySelector('[data-content="overviewDesc"]'),
    internalDesc: document.querySelector('[data-content="internalDesc"]'),
    surfaceDesc: document.querySelector('[data-content="surfaceDesc"]'),
    overviewLink: document.querySelector('[data-content="overviewLink"]'),
    internalLink: document.querySelector('[data-content="internalLink"]'),
    surfaceLink: document.querySelector('[data-content="surfaceLink"]'),
    rotation: document.querySelector('[data-content="rotation"]'),
    revolution: document.querySelector('[data-content="revolution"]'),
    radius: document.querySelector('[data-content="radius"]'),
    temperature: document.querySelector('[data-content="temperature"]'),



    init: function (planet = 'mercury') {
        selectedPlanet = planet;

        for (const [key, value] of Object.entries(data[selectedPlanet])) {
            const element = document.querySelector('[data-content="' + key + '"]')
            if (key.includes('Link')) {
                element.href = value;
            } else if (key.includes('img')) {
                element.src = 'assets/' + value;
                if (key.includes('imgOverview') || key.includes('imgInternal')) {
                    element.classList.add(data[selectedPlanet]['class'])
                }
            } else if (key.includes('class')) {

            } else {
                element.textContent = value;
            }
        }
    }
}