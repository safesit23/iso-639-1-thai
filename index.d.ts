declare module "iso-639-1" {
  interface ISO6391 {
    getNameEN: (code: string) => string;
    getNameTH: (code: string) => string;
    getNativeName: (code: string) => string;
    getAllNamesTH: () => Array<string>;
    getAllNamesEN: () => Array<string>;
    getAllNativeNames: () => Array<string>;
    getCode: (name: string) => string;
    getAllCodes: () => Array<string>;
    validate: (code: string) => boolean;
    getLanguages: (codes: Array<string>) => Array<{
      code: string;
      nameTH: string;
      nameEN: string;
      nativeName: string;
    }>;
  }

  let localeCode: ISO6391;

  export default localeCode;
}
