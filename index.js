const express = require('express');
const proxy = require('express-http-proxy');
const app = express();

var port = 3000;
if ("QDOH_WEB_PORT" in process.env) {
    port = process.env.QDOH_WEB_PORT;
}

var dns_server = "https://dns.quad9.net/dns-query";
if ("QDOH_DNS_SERVER" in process.env) {
    dns_server = process.env.QDOH_DNS_SERVER;
}

app.use(
    "/",
    proxy(
        dns_server,
        {parseReqBody: false}
    )
);

app.listen(port, () => {
    console.log(`[INFO] Quickie DoH will forward DoH requests to ${dns_server}`);
    console.log(`[INFO] Quickie DoH is ready to receive requests at http://127.0.0.1:${port}/dns-query`);
});
