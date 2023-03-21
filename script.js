"use strict";
const number = document.querySelector(".number");
const btnCheck = document.querySelector(".check");

const newNr = Math.floor(Math.random() * 20) + 1;

number.textContent = newNr;
