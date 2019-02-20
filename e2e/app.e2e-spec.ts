import { ProjectUIPage } from './app.po';

describe('project-ui App', () => {
  let page: ProjectUIPage;

  beforeEach(() => {
    page = new ProjectUIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
