type SaqueAniversarioResult = {
  valor: number;
}

export function calculateBirthdayWithdrawal(saldo: string, mesAniversario: string): SaqueAniversarioResult {
  const mesAtual = new Date().getMonth();
  const mesLimite = (parseInt(mesAniversario) % 12) + 1; // o mês limite é o próximo mês ao mês de aniversário
  const alq: number = calculatePercentage(mesAtual, mesLimite);
  const parcela: number = calculateFixedAmount(parseFloat(saldo), alq);
  const valor: number = alq * parseFloat(saldo) + parcela;

  return { valor };
}

function calculatePercentage(mesAtual: number, mesLimite: number): number {
  if (mesAtual === mesLimite) {
    return 0.5; // limite do primeiro caso
  } else if (mesAtual > mesLimite && mesAtual <= mesLimite + 6) {
    return 0.4; // segundo caso
  } else if (mesAtual > mesLimite + 6 && mesAtual <= mesLimite + 12) {
    return 0.3; // terceiro caso
  } else if (mesAtual > mesLimite + 12 && mesAtual <= mesLimite + 18) {
    return 0.2; // quarto caso
  } else if (mesAtual > mesLimite + 18 && mesAtual <= mesLimite + 24) {
    return 0.15; // quinto caso
  } else if (mesAtual > mesLimite + 24 && mesAtual <= mesLimite + 36) {
    return 0.1; // sexto caso
  } else {
    return 0.05; // limite do último caso
  }
}

function calculateFixedAmount(saldo: number, alq: number): number {
  if (saldo <= 500) {
    return saldo * 0.5;
  } else if (saldo <= 1000) {
    return 50 + saldo * 0.4;
  } else if (saldo <= 5000) {
    return 150 + saldo * 0.3;
  } else if (saldo <= 10000) {
    return 650 + saldo * 0.2;
  } else if (saldo <= 15000) {
    return 1150 + saldo * 0.15;
  } else if (saldo <= 20000) {
    return 1900 + saldo * 0.1;
  } else {
    return 2900 + saldo * 0.05;
  }
}
 
