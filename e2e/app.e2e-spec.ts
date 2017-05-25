import { WeatherSvgAppPage } from './app.po';

describe('weather-svg-app App', () => {
  let page: WeatherSvgAppPage;

  beforeEach(() => {
    page = new WeatherSvgAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
