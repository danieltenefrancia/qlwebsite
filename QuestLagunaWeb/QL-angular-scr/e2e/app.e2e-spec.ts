import { QLAngularScrPage } from './app.po';

describe('ql-angular-scr App', function() {
  let page: QLAngularScrPage;

  beforeEach(() => {
    page = new QLAngularScrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
