# tai32max32-config

A collection of utilities for working with Stellar blockchain.

## Installation

You can install this module via npm: `npm install tai32max32-config`


## Usage

```javascript
const stellarUtils = require('stellar-utils');

// Example usage
(async () => {
  try {
    const accountDetails = await stellarUtils.getAccountDetails('GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
    console.log('Account Details:', accountDetails);

    const xlmPrice = await stellarUtils.getXLMPrice();
    console.log('XLM Price (USD):', xlmPrice);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
```



