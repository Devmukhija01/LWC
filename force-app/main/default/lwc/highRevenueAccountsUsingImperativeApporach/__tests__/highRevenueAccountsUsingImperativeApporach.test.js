import { createElement } from 'lwc';
import HighRevenueAccountsUsingImperativeApporach from 'c/highRevenueAccountsUsingImperativeApporach';

describe('c-high-revenue-accounts-using-imperative-apporach', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-high-revenue-accounts-using-imperative-apporach', {
            is: HighRevenueAccountsUsingImperativeApporach
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});