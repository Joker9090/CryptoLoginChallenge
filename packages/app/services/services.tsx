
export class ServiceCryptoApi {
  constructor() {

  }
  GetCryptoPromise(id: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve();
        // reject();
      }, 1000);
    })

  }

  GetCryptosPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve();
        // reject();
      }, 2000);
    })
  }
}

export class ServiceLoginApi {
  emails: string[] = [];
  passwords: string[] = [];
  constructor() {
    this.emails = ['email@email.com','juanmartin.cerruti@gmail.com']
    this.passwords = ['cosmefulanito','12345678']
  }
  doLogin(email: string, password: string) {
    return new Promise((resolve, reject) => {
      let emails = this.emails;
      let passwords = this.passwords;
      setTimeout(() => {
        const emailPos = emails.indexOf(email);
        if (password[emailPos]) {
          if(passwords[emailPos] == password)  resolve({ data: true });
          else resolve({ data: false, message: "Your password is incorrect!" });
        } else resolve({ data: false, message: "This user does not exist!" });
      }, 2000);
    })
  }

}

