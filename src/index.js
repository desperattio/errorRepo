export default class ErrorRepository {
  constructor(errCode, errName) {
    this.errors = new Map();
		this.errors.set(errCode, errName);
	}

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    } else {
      return 'Unknown error';
    }
  }
}