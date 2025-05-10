# 👍 QuickieDoH Nouveau

***Original by peridoqia.***

Quickie DoH (DNS over HTTPS) is a small webserver you can spin up, it acts as a DoH forwarder, which means it forwards your DoH requests to a real DoH server.
Maybe someday, i'll add the features to make it a standalone server but... for now, this will do!

## How do I use it?

Install node and npm, run `npm i`, modify run.sh to have your DoH url, run it and thats it!

## Whats the point?

Public networks (or school/enterprise networks) often block a lot sites, most of them achieve this blocking by forcing all requests through a DNS server they control!
and then, they just block whatever sites they want to...

BUT THIS IS BAD!!!
This is bad for two reasons!

1. We should be allowed to visit whatever site we want to, it's the open net and censoring it is UNACCEPTABLE!!!
2. Forcing DNS requests through one centralized server is a privacy hazard, and it lets the network operator track your internet activity!

We remedy this solution by using DoH, DoH blends in with normal HTTPS traffic so you can use it as a DNS server and you will be free from blocks and private.

But there is an issue, DoH hostnames are often public, and that means network administrators can just block them. So... this is where QuickieDoH comes in!

You, the user, run Quickie DoH on your server (let's say your servers domain is `coolpeople.land`) and it forwards your DoH requests to a real DoH server!

Client -> `coolpeople.land` -> `Quad9, Google, Cloudflare etc.`

To your network administrator, it looks like you're just visiting `coolpeople.land` and if there's nothing there that is remotely suspicious then there's no reason for them to block it. That way, you get the benefits of normal DoH even on a censored network!

Also one extra benefit:

You can use Google or a Big Tech company's DoH server cause to them, it looks like requests are coming from `coolpeople.land` and if you open your instance to multiple people then they wont know who is who! Which means you are private!

Quickie DoH can't guarantee that it works though, it might not work on networks that are whitelist-only and you probably shouldn't use it at work or you will get into trouble.
We're not liable for any damages or sackings done by this product!
