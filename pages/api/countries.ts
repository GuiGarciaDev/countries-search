import type { NextApiRequest, NextApiResponse } from "next";
const data = require("./data/data.json") as Data;

type Data = [
  {
    name: String;
    topLevelDomain: String[];
    alpha2Code: String;
    alpha3Code: String;
    callingCodes: String[];
    capital: String;
    altSpellings: String[];
    subregion: String;
    region: String;
    population: String;
    latlng: String[];
    demonym: String;
    area: Number;
    timezones: String[];
    borders: String[];
    nativeName: String;
    numericCode: String;
    flags: {
      svg: String;
      png: String;
    };
    currencies: [
      {
        code: String;
        name: String;
        symbol: String;
      }
    ];
    languages: [
      {
        iso639_1: String;
        iso639_2: String;
        name: String;
        nativeName: String;
      },
      {
        iso639_1: String;
        iso639_2: String;
        name: String;
        nativeName: String;
      },
      {
        iso639_1: String;
        iso639_2: String;
        name: String;
        nativeName: String;
      }
    ];
    translations: {
      br: String;
      pt: String;
      nl: String;
      hr: String;
      fa: String;
      de: String;
      es: String;
      fr: String;
      ja: String;
      it: String;
      hu: String;
    };
    flag: String;
    regionalBlocs: [
      {
        acronym: String;
        name: String;
      }
    ];
    cioc: String;
    independent: Boolean;
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data);
}
