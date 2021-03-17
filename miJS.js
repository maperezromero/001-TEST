'use strict';

function calNumStocks(){//Esta función modifica el input de número de acciones una vez tabulamos en el campo de cantidad a invertir
  const iniPrice = document.querySelector('input[name="initial price"]');
  const investment = document.querySelector('input[name="investment amount"]');
  document.getElementById("number stocks").value=Math.floor(parseFloat(investment.value)/parseFloat(iniPrice.value));
}

function calInvAmount(){//Esta función modifica el input de cantidad a invertir una vez tabulamos en el campo de número de acciones
  const iniPrice = document.querySelector('input[name="initial price"]');
  const numStocks = document.querySelector('input[name="number stocks"]');
  document.getElementById("investment amount").value= parseFloat(numStocks.value) *parseFloat(iniPrice.value);
}

function callNetProfit(){
  const iniPrice = document.querySelector('input[name="initial price"]');
  const investment = document.querySelector('input[name="investment amount"]');
  const numStocks = document.querySelector('input[name="number stocks"]');
  const targetPrice = document.querySelector('input[name="target price"]');
  const profit = ((parseFloat(targetPrice.value)*parseFloat(numStocks.value))-(parseFloat(iniPrice.value)*parseFloat(numStocks.value)))-parseFloat(numStocks.value)*0.01;
  document.getElementById("net profit").value = profit;
}
