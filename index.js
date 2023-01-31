const result = document.getElementById('result');

const K = 10.81;
const ROE = 13.92;
const B = 296237700000000;
const commonShare = 5969782550;
const preferredShare = 822886700;
const treasuryStock = 0;

const CP = fnCP(K, ROE, B);
const numberOfShares = fnNumberOfShares(commonShare, preferredShare, treasuryStock);
const excessEarning = fnExcessEarning(K, ROE, B);
const w9 = fnW9(K, B, excessEarning);
const w8 = fnW8(K, B, excessEarning);
const SRIM = CP / numberOfShares;
const SRIM_W9 = w9 / numberOfShares;
const SRIM_W8 = w8 / numberOfShares;

result.innerHTML = `<p>SRIM: ${SRIM}</p> <p>SRIM W9: ${SRIM_W9}</p> <p>SRIM W8: ${SRIM_W8}</p>`;

function fnCP(K, ROE, B) {
  return B + (B * (ROE - K)) / K;
}

function fnNumberOfShares(commonShare, preferredShare, treasuryStock) {
  return commonShare - preferredShare - treasuryStock;
}

function fnExcessEarning(K, ROE, B) {
  return B * (ROE - K) / 100;
}

function fnW9(K, B, excessEarning) {
  return B + excessEarning * 0.9 / (1 + (K / 100) - 0.9);
}

function fnW8(K, B, excessEarning) {
  return B + excessEarning * 0.8 / (1 + (K / 100) - 0.8);
}