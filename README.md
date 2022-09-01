## Project in a Nutshell
Dtube is a full stack social media dapp. The dapp lets a user post and receive images to an anonymous network of contributors. There will be a feed of all images. This project uses ethereum to point to images and store them on IPFS and uses polygon as an L2 for this. 

## [Link to project demo](
https://www.youtube.com/watch?v=HwyWN5RslGI)
## Technical Details
**Languages:**
```Solidity, JavaScript, HTML5, CSS3```

**Libraries:** 
```React.js, Web3.js```

**Tools:** 
```IPFS```

**Platforms:** 
```Ethereum, Fleek```

## Networks
1. ```Matic Mumbai Test Network```
2. ```Rinkeby Test Network```
3. ```Ropsten Test Network```
4. ```Goerli Test Network```

## Contracts
` /src/contracts/DTube.sol`

## Development
Open ganache personal blockchain. Don't forget to add private key in MetaMask.

```
ganache-cli
```

Install dependancies

```
npm install
```

Deploy the smart contracts to the blockchain.

```
truffle migrate
```

Start react app.

```
npm start
```
