import axios from 'axios';


export default axios.create ({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Erva7o5Z_A5ZkgEiy48g_opci9k3a6ZRuwPUzwpIb3M'
    }
});