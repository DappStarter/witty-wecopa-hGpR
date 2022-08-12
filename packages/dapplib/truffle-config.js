require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture student razor misery unlock gentle light army gather'; 
let testAccounts = [
"0xf65f555805d13c21442c289a9496f4cca0379d340483c0a40d22de9234a3d752",
"0xe3924842ef6776b0c1f8bd1e79b3f8ae20e0f13fd4b3f21cc0c1337ef70d8f0e",
"0x6d2e6b8e95da4d7fb731685891a83025320e9281654e28ace163af23e72cb018",
"0xd308c29453131cd1c974ce8103cc9a42079a3a7b7e17305974c917c4783fb44b",
"0x06420aacd029faf196747dd47ef519dc38f6ec36783e441af4100a0c932ecfa1",
"0xea3df52deb5a3190e241bc7fc0ed10a8c218c82eb8536af66a37fadbcb1d8f02",
"0x4369bd1ffd1bcd983f4ea3bf0fe9faa20fcd3a618dfa71161918b9f58e3bfa1c",
"0xc1f7e24277c8ab1fc029bd6e9bcc3f9a7fb82e8ee5f2b1adc9885c86de525733",
"0x762b2496a90425f9f58c6e1a38250e19d8271c99fd3e77a4466cbd6202996313",
"0xae8dd304ef00f25090708fe703d6e269a1d235ba3840fa5f408a4d925a99b6d5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

