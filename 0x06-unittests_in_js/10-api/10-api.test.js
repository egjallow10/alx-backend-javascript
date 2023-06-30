const request = require('request');
const chai = require('chai');
const { expect } = chai;

describe('API test', () => {
  describe('POST /login', () => {
    it('returns the welcome message with the provided username', (done) => {
      const options = {
        method: 'POST',
        url: 'http://localhost:7865/login',
        json: { userName: 'Betty' },
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });

  describe('GET /available_payments', () => {
    it('returns the available payment methods', (done) => {
      request(
        'http://localhost:7865/available_payments',
        (error, response, body) => {
          expect(response.statusCode).to.equal(200);
          expect(body).to.deep.equal(
            '{"payment_methods":{"credit_cards":true,"paypal":false}}'
          );
          done();
        }
      );
    });
  });
});
