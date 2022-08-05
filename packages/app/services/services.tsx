
import { CryptoObject } from 'app/models/CryptoObject';
import axios from 'axios';

export type ServiceCryptoApiConfig = {
  headers: any
}
export class ServiceCryptoApi {
  cryptoList: CryptoObject[];
  config: ServiceCryptoApiConfig
  constructor() {
    this.cryptoList = [];
  }
  GetCryptoPromise(asset_id: String) {
    return new Promise((resolve, reject) => {
      const findOne = this.cryptoList.filter(c => c.asset_id == asset_id);
      if (findOne.length > 0) resolve(findOne[0]);
      else reject({ message: "Crypto not found..." });
    })

  }
  saveCryptosAsCache(cryptos) {
    this.cryptoList = cryptos
  }

  SetToken(token: String) {
    this.config = {
      headers: { 'X-CoinAPI-Key': token, }
    }
  }
  GetCryptosPromise() {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}`, this.config)
        .then(res => {
          this.saveCryptosAsCache(res);
          resolve(res.data);
        }).catch(err => { reject({ message: "Limit with the server request" }); })
    })
  }
}

export class ServiceCryptoApi2 {
  cryptoList: CryptoObject[];
  config: ServiceCryptoApiConfig
  constructor() {
    this.cryptoList = [];
  }
  GetCryptoPromise(asset_id: String) {
    return new Promise((resolve, reject) => {
      const findOne = this.cryptoList.filter(c => c.asset_id == asset_id);
      if (findOne.length > 0) resolve(findOne[0]);
      else reject({ message: "Crypto not found..." });
    })
  }
  saveCryptosAsCache(cryptos) {
    this.cryptoList = cryptos
  }

  parseIndividual(geckoResult) {
    return {
      "asset_id": geckoResult.id,
      "name": geckoResult.name,
      "type_is_crypto": 1,
      "image": geckoResult.image,
      "price_usd": geckoResult.high_24h
    }
  }

  SetToken(token: String) {
    console.log("No NEED for Token in this api")
    // no need for token
  }

  GetCryptosPromise() {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL2}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`)
        .then((res) => {
          return res.data.map(this.parseIndividual)
        }).then(res => {
          this.saveCryptosAsCache(res);
          resolve(res);
        }).catch(err => { reject({ message: "Limit with the server request" }); })
    })
  }
}

export class ServiceLoginApi {
  emails: string[] = [];
  passwords: string[] = [];
  constructor() {
    this.emails = ['email@email.com', 'juanmartin.cerruti@gmail.com']
    this.passwords = ['cosmefulanito', '12345678']
  }
  doLogin(email: string, password: string) {
    return new Promise((resolve, reject) => {
      let emails = this.emails;
      let passwords = this.passwords;
      setTimeout(() => {
        const emailPos = emails.indexOf(email);
        if (password[emailPos]) {
          if (passwords[emailPos] == password) resolve({ data: true });
          else resolve({ data: false, message: "Your password is incorrect!" });
        } else resolve({ data: false, message: "This user does not exist!" });
      }, 2000);
    })
  }

}

