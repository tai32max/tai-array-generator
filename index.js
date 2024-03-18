const StellarSdk = require('stellar-sdk');
const axios = require('axios');

// Initialize StellarSdk with Horizon server URL
StellarSdk.Network.use(new StellarSdk.Network("stellar"));
const server = new StellarSdk.Server("https://horizon.stellar.org");

/**
 * Function to fetch account details from Stellar network
 * @param {string} publicKey - Public key of the Stellar account
 * @returns {Promise<Object>} - Promise resolving to account details
 */
async function getAccountDetails(publicKey) {
  try {
    const account = await server.loadAccount(publicKey);
    return account;
  } catch (error) {
    throw new Error(`Failed to fetch account details: ${error.message}`);
  }
}

/**
 * Function to fetch latest Stellar Lumens (XLM) price
 * @returns {Promise<number>} - Promise resolving to XLM price
 */
async function getXLMPrice() {
  try {
    const response = await axios.get('https://api.coinbase.com/v2/prices/XLM-USD/spot');
    const price = parseFloat(response.data.data.amount);
    return price;
  } catch (error) {
    throw new Error(`Failed to fetch XLM price: ${error.message}`);
  }
}

module.exports = {
  getAccountDetails,
  getXLMPrice
};
