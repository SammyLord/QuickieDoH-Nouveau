#!/bin/bash
export QDOH_WEB_PORT=9984
export QDOH_DNS_SERVER="https://dns.nextdns.io/insertYourID"
node index.js >/dev/null 2>&1 &
