import { io } from "socket.io-client";
import { atom } from "recoil";
import "moment/locale/ru";
import moment from "moment";
moment.locale("ru");

const url = new URL(window.location.href);
const token = Buffer.from(url.search.slice(1))
  .toString("base64")
  .replace(/[a-z]/gi, (char) =>
    /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()
  );
// const token = "DMTFywnJzxnZx3rVA2vUx3nLDhrPBMDZpsz2A19HChbFAwq9nZGYndaZnIz2A19HCMvFBM90AwzPy2f0Aw9UC19LBMfIBgvKptaMDMTFAxnFyxbWx3vZzxi9mcz2A19PC19MyxzVCML0zt0WjNzRx2XHBMD1ywDLpxj1jNzRx3bSyxrMB3jTpw1VyMLSzv93zwiMDMTFCMvMpw90AgvYjNzRx3rZpte2mJq5mtK3ndKMDMTFDxnLCL9Pzd00mtKXndKWntyMC2LNBJ14uZjqAtGWuuDzntzRx0nMAunbs2vhruX4BLfhvNfmEtbsDKHXtJzfANnv"

export const CLIENT = atom({
  key: "client",
  default: io("ws://localhost:16888", {
    auth: {
      token: token,
      date: moment().format("HH:mm, DD MMM YYYYг."),
    },
    transports: ["websocket"],
    upgrade: true,
    rememberUpgrade: true,
    autoConnect: true,
    reconnectionDelayMax: 2000,
    closeOnBeforeunload: true,
  }),
});

export const TOKEN = atom({ key: "token", default: token });
export const USER_TOKEN = atom({ key: "user_token", default: "" });
