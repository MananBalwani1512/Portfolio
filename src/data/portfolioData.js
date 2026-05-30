const PORTFOLIO_DATA_URL = "https://raw.githubusercontent.com/MananBalwani1512/Portfolio-Data/refs/heads/master/PortfolioData.json";
const CACHE_KEY = "portfolio-data-v1";
const CACHE_DURATION = 3 * 24 * 60 * 60 * 1000;

export const getPortfolioData = async () => {
  const cachedData = localStorage.getItem(CACHE_KEY);
  const cachedTimestamp = localStorage.getItem(`${CACHE_KEY}-timestamp`);

  if (cachedData && cachedTimestamp) {
    const age = Date.now() - parseInt(cachedTimestamp, 10);
    if (age < CACHE_DURATION) {
      return JSON.parse(cachedData);
    }
  }
  else {
    const response = await fetch(PORTFOLIO_DATA_URL);
    const data = await response.json();
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    localStorage.setItem(`${CACHE_KEY}-timestamp`, Date.now());
    return data;
  }
};



const data = await getPortfolioData();
const {
  personal,
  hero ,
  about,
  skills,
  experience,
  projects,
  achievements,
  certifications,
  contact,
  navigation,
} = data || {};

export { personal, hero, about, skills, experience, projects, achievements, certifications, contact, navigation };
