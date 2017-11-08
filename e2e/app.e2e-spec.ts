import { ClienteSPage } from './app.po';

describe('cliente-s App', function() {
  let page: ClienteSPage;

  beforeEach(() => {
    page = new ClienteSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
