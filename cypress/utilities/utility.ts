class Utility {
  randomNumber(min, max): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  randomNumberAsString(min, max): string {
    return this.randomNumber(min, max).toString();
  }

  printObjectToConsole(object): void {
    console.log(JSON.stringify(object, null, 2));
  }

  printToConsole(text): void {
    if (text === '') {
      text = "''";
    }
    console.log('---> ' + String(text));
  }

  printlnToConsole(text): void {
    if (text === '') {
      text = "''";
    }
    console.log('\n---> ' + String(text));
  }

  async waitTime(value: number) {
    cy.wait(value).then(() => this.printToConsole('Wait for ' + value));
  }

  async generateEmail(skuId = '') {
    return (
      'success+test_user_' +
      Cypress.env('HOST') +
      '_' +
      skuId +
      '_' +
      (await this.generateRandomAlphanumericString(10)) +
      '@simulator.amazonses.com'
    );
  }

  async generateRandomNumber(min, max) {
    return parseInt(Math.random() * (max - min) + min, 10);
  }

  async generateRandomString(length) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let string = '';

    for (let i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  }

  async generateRandomNumericString(length) {
    let string = '';
    const letters = '0123456789';
    for (let i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  }

  async generateRandomAlphanumericString(length) {
    let string = '';
    const letters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  }
}

export default new Utility();
