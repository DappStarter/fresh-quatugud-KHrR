require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space strike rival magic modify guess private army gaze'; 
let testAccounts = [
"0x0fcb31537f898ec1237fd40ffe98732d00d699189bb6ebf8bc3c96ecb1180bd1",
"0x7e6f9175c7d5030989523ad5dc53972fdeab43ba54e454c76d5de715e3be667a",
"0xcc79519ee7b6c04f8816988b0826a7677e05abc39982b8e6a28de870bde41df2",
"0x9a710beeac48313fecffa5b87181e04bbb3d2c97a8528ba02f1eab0c776b8e98",
"0xae25da740e8e2c0cfb4650ef6498b2dc81f5a77a4d75ac67f432bca6d99daaf6",
"0xe28287a5a654eaf3877764a67dc507712b0f9e707bbd580506f24d17cc2d16e7",
"0xa6246ca1e95850d933e4a334e27e3e02d720f4545fb2aff3fdbef4f284c3d9f7",
"0x2f9f789f09dc6f4829a2ad7e1546ae9848f081fc2899866c79b10f8231cca790",
"0xa2e6d5735522b106a521ab0c41b8e307e2f500c559bd36778732abe64b9b958e",
"0x1758518c1da0ccbdc641a2c9243b4e1380902c61e85911b3c9106a4304158e5f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


