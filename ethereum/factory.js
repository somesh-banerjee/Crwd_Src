import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x64fbBbEEAD72e45F759ae21118F9Fa7FC7438E24'
	//'0xeC51EEfAFd01996A3e9185C49A941E3E03a141C4'
);

export default instance;
