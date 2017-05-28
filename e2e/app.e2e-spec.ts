import { GeneratorAngular2BoilerplatePage } from './app.po';

describe('generator-angular2-boilerplate App', () => {
  let page: GeneratorAngular2BoilerplatePage;

  beforeEach(() => {
    page = new GeneratorAngular2BoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
