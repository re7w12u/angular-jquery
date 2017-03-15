import { Ng2BootstrapDatepickerPage } from './app.po';

describe('ng2-bootstrap-datepicker App', function() {
  let page: Ng2BootstrapDatepickerPage;

  beforeEach(() => {
    page = new Ng2BootstrapDatepickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
