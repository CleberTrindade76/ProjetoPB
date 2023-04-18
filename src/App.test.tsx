import { calcularSaqueFGTS, validateForm } from './utils/utils';

describe('calcularSaqueFGTS', () => {
  it('sending the value 10.000,00 it should return two strings "2650" and "00"', () => {
    const balance = "10.000,00";
    const expectedAmount = ["2.650", "00"];
    const actualAmount = calcularSaqueFGTS(balance);
    expect(actualAmount).toEqual(expectedAmount);
  });

  it('sending the value 5.472,13 it should return two strings "1.744" and "43"', () => {
    const balance = "5.472,13";
    const expectedAmount = ["1.744", "43"];
    const actualAmount = calcularSaqueFGTS(balance);
    expect(actualAmount).toEqual(expectedAmount);
  });

  it('sending the value 7.000,00 it should return two strings "2.050" and "00"', () => {
    const balance = "7.000,00";
    const expectedAmount = ["2.050", "00"];
    const actualAmount = calcularSaqueFGTS(balance);
    expect(actualAmount).toEqual(expectedAmount);
  });
});

describe('validateForm', () => {
  it('returns valid true for valid data', async () => {
    const data = {
      name: 'Marcos Felipe',
      phone: '14998138740',
      balance: '1.000,00',
      birthday: '12',
    };
    const validationResult = validateForm(
      data.name,
      data.phone,
      data.balance,
      data.birthday
    );
    expect((await validationResult).valid).toBe(true);
  });

  it('returns valid false for empty name', async () => {
    const data = {
      name: '',
      phone: '14996222043',
      balance: '3.450,00',
      birthday: '1',
    };
    const validationResult = validateForm(
      data.name,
      data.phone,
      data.balance,
      data.birthday
    );
    expect((await validationResult).valid).toBe(false);
    expect((await validationResult).error).toBe(0);
  });

  it('returns valid false for empty phone', async () => {
    const data = {
      name: 'Regina de Souza',
      phone: '',
      balance: '5.680,10',
      birthday: '4',
    };
    const validationResult = validateForm(
      data.name,
      data.phone,
      data.balance,
      data.birthday
    );
    expect((await validationResult).valid).toBe(false);
    expect((await validationResult).error).toBe(1);
  });

  it('returns valid false for empty balance', async () => {
    const data = {
      name: 'Guilherme Rodrigues',
      phone: '14996129695',
      balance: '',
      birthday: '7',
    };
    const validationResult = validateForm(
      data.name,
      data.phone,
      data.balance,
      data.birthday
    );
    expect((await validationResult).valid).toBe(false);
    expect((await validationResult).error).toBe(2);
  });

  it('returns valid false for empty birthday', async () => {
    const data = {
      name: 'Tatiana Salvador',
      phone: '15179102932',
      balance: '8.345,52',
      birthday: '',
    };
    const validationResult = validateForm(
      data.name,
      data.phone,
      data.balance,
      data.birthday
    );
    expect((await validationResult).valid).toBe(false);
    expect((await validationResult).error).toBe(3);
  });
});
