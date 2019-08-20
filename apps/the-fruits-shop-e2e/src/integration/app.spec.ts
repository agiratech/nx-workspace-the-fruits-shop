import { getGreeting } from '../support/app.po';

describe('the-fruits-shop', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to the-fruits-shop!');
  });
});
