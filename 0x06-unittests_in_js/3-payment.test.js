const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi function', () => {
  // create the spy
  const utilSpy = sinon.spy(Utils, 'calculateNumber');

  it('validate the usage of the Utils function', () => {
    // run the function with the parameters
    sendPaymentRequestToApi(100, 20);
    expect(utilSpy.calledOnce).to.be.true;
    expect(utilSpy.calledWith('SUM', 100, 20)).to.be.true;
    utilSpy.restore();
  });
});
