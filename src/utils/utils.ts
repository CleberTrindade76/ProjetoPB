export function calcularSaqueFGTS(saldo: string): string[] {
  const saldoSemR: string = saldo.replace("R$ ", ""); 
  // Remove o "R$ " do início da string
  const saldoSemPontos: string = saldoSemR.replace(".", ""); 
  // Remove os pontos que separam as milhares
  const saldoFloat: number = parseFloat(saldoSemPontos.replace(",", ".")); 
  // Transforma o saldo em string para float
  const aliquotas: number[] = [0.5, 0.4, 0.3, 0.2, 0.15, 0.1, 0.05]; 
  // Alíquotas de cada faixa
  const parcelasAdicionais: number[] = [0, 50, 150, 650, 1150, 1900, 2900]; 
  // Parcelas adicionais de cada faixa
  const limites: number[] = [500, 1000, 5000, 10000, 15000, 20000]; 
  // Limites de cada faixa
  let valorSaque: number = 0;

  for (let i = 0; i < limites.length; i++) {
    if (saldoFloat <= limites[i]) {
      valorSaque = saldoFloat * aliquotas[i] + parcelasAdicionais[i];
      break; 
      // Sai do loop assim que encontrar a faixa correta
    } else if (i === limites.length - 1) {
      valorSaque = saldoFloat * aliquotas[i] + parcelasAdicionais[i];
    }
  }

  const valorInteiro: string = Math.floor(valorSaque).toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: 0});
  
  const valorCentavos: string = (valorSaque % 1).toFixed(2).replace("0.", "");

  return [valorInteiro, valorCentavos]; 
  // Retorna um array com a parte inteira e a parte decimal do valor
}

// Função para validar o número de telefone usando uma API externa
async function validatePhoneNumberApi(phoneNumber: string): Promise<boolean> {
  const apiKey = "ec1b7ccf91154cb7a286ed73d4b29eae";
  const url = `https://phonevalidation.abstractapi.com/v1/?api_key=${apiKey}&phone=${phoneNumber}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Error fetching phone validation data. Status: ${response.status}`
      );
    }

    const data = await response.json();
    const isValid = data.valid;

    return isValid;
  } catch (error) {
    return false;
  }
}

// Função para validar o número de telefone usando Regex
function validatePhoneNumber(phone: string): boolean {
  const regex = /^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/;
  return regex.test(phone);
}

// Função para validar o formulário
export async function validateForm(name: string, phone: string, balance: string, birthday: string): Promise<{ valid: boolean, error?: number }> {
  const onlyPhoneNumbers = phone.replace(/[^a-zA-Z0-9]/g, '');
  const isPhoneNumberValidFromApi = await validatePhoneNumberApi(onlyPhoneNumbers);
  const isPhoneNumberValid = validatePhoneNumber(onlyPhoneNumbers);
  
  const values = [name, onlyPhoneNumbers, balance, birthday];

  for (let i = 0; i < values.length; i++) {
    if (values[i].length < 1) {
      return { valid: false, error: i }; 
    }
  }

  if (!isPhoneNumberValid && !isPhoneNumberValidFromApi) {
    return { valid: false, error: 1 }; 
  }

  return { valid: true };
}