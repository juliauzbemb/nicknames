export default class Validator {
  validateUsername(name) {
    this.name = name;
    const re = /^[a-zA-Z][\w-]+[a-zA-Z]$/;
    return (this.name.search(re) !== -1 && (!/[\d]{4}/.test(this.name)));
  }
}
