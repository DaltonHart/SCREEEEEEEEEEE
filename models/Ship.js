class Ship {
  constructor(data) {
    this.firepower = data. alliance;
    this.shipType = data.shipType;
    this.alliance = data.alliance;
    this.id = this.#generateId();
  }

	/**
   * @description This is a private method that returns an unique id
   * @param {number} len
   * @returns string
   */

  #generateId(len = 10) {
    const characters = "qwertyuio1p2a3s4d5f6g7h8j9k0lzxcvbnm";
    let uid = "";

    for (let count = 0; count < len; count++) {
      const character = Math.floor(Math.random() * characters.length);
      uid += characters[character];
    }

    return uid;
  }
}

class Collection {
  #Model;
  #items;
  constructor(model, startingData) {
    this.#Model = model;
    this.#items = startingData.map(item => new this.#Model(item));
  }

  /**
   * @description Will return an array with all items availible in this.items
   * @returns array
   */

  find() {
    return this.#items;
  }

  /**
   * @description Will return item match with the itemId
   * @param { string } itemId
   * @param { function } callBack Will return error or item
   * @returns function;
   */
  findById(itemId, callBack) {
    if (!itemId) return console.log("missing id in first argument");

    if (typeof callBack !== "function") {
      return console.log("missing function in second argument");
    }

    const item = this.#items.find(({ id }) => id === itemId);
    let error;

    if (!item) {
      error = { message: `item can't be found` };
    }

    return callBack(error, item);
  }
}

module.exports = new Collection(Product, []);