#!/bin/bash
export QDOH_WEB_PORT=9984
export QDOH_DNS_SERVER="https://dns.nextdns.io/5577fd"
node index.js >/dev/null 2>&1 &
