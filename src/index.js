import LANGUAGES_LIST from './data';

export default class ISO6391 {
  static getLanguages(codes = []) {
    return codes.map(code => ({
      code,
      nameTH: ISO6391.getNameTH(code),
      nameEN: ISO6391.getNameEN(code),
      nativeName: ISO6391.getNativeName(code),
    }));
  }

  static getNameTH(code) {
    return ISO6391.validate(code) ? LANGUAGES_LIST[code].nameTH : '';
  }

  static getNameEN(code) {
    return ISO6391.validate(code) ? LANGUAGES_LIST[code].nameEN : '';
  }

  static getAllNamesEN() {
    return Object.values(LANGUAGES_LIST).map(l => l.nameEN);
  }

  static getAllNamesTH() {
    return Object.values(LANGUAGES_LIST).map(l => l.nameTH);
  }

  static getNativeName(code) {
    return ISO6391.validate(code) ? LANGUAGES_LIST[code].nativeName : '';
  }

  static getAllNativeNames() {
    return Object.values(LANGUAGES_LIST).map(l => l.nativeName);
  }

  static getCode(name) {
    const code = Object.keys(LANGUAGES_LIST).find(code => {
      const language = LANGUAGES_LIST[code];

      return (
        language.nameEN.toLowerCase() === name.toLowerCase() ||
        language.nameTH === name ||
        language.nativeName.toLowerCase() === name.toLowerCase()
      );
    });
    return code || '';
  }

  static getAllCodes() {
    return Object.keys(LANGUAGES_LIST);
  }

  static validate(code) {
    return LANGUAGES_LIST.hasOwnProperty(code);
  }
}
