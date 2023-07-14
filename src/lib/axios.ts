import { default as axios_ } from "axios";
import { SocksProxyAgent } from "socks-proxy-agent";

// export http_proxy = http://127.0.0.1:1087;export https_proxy=http://127.0.0.1:1087;export ALL_PROXY=socks5://127.0.0.1:1080

const httpsAgent = new SocksProxyAgent("socks5://100.69.159.102:9999");

const httpAgent = httpsAgent;

const axios = axios_.create({
  baseURL: "https://claude.ai/api/",
  httpsAgent,
  httpAgent,
});

export default axios;
