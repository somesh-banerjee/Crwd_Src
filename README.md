# Crwd_Src

This a CrowdSourcing app built on ethereum Rinkeby Test network. In this you can create campaigns with campaign details and minimum contribution amount. The contributions are done in ether. For spending the Ether contributed to the campaign, the manager of the campaign create requests. If there is atleast 50% of the contributers approve the request than only the request can be finalized.

## To Run on Locahost
1. Clone the Repo and istall dependencies
```
git clone https://github.com/somesh-banerjee/Crwd_Src.git
cd Crwd_Src
npm install
```
2. Create a [Infura](https://infura.io/) account and create a new project. Now copy the Project ID from settings Tab and paste it in the marked location in `/ethereum/web3.js` and `/ethereum/deploy.js` files.
3. Install metamask in your browser and log into your metasmask account.
4. Run the local webserver with any port
```
node server.js 5000
```
