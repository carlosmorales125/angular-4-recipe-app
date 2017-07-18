import { RecipeAndShoppingAppPage } from './app.po';

describe('recipe-and-shopping-app App', () => {
  let page: RecipeAndShoppingAppPage;

  beforeEach(() => {
    page = new RecipeAndShoppingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
