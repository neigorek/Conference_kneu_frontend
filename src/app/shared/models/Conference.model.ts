import { Moment } from 'moment';

export class ConferenceModel {
  _id: string;
  name: string;
  title1: string;
  title2: string;
  title3: string;
  organizers: [];
  dataStart: string | Moment | Date;
  dataEnd: string | Moment | Date;
  description: string;
  workVectors: [];
  image: string[];
  organizationPeople: {
    golova: {name: string; posada: string};
    zamGolova: [{name: string; posada: string}];
    zastupnuk: [{name: string; posada: string}];
  };
  programPeople: {
    golova: {name: string; posada: string};
    zamGolova: [{name: string; posada: string}];
    chelenu: [{name: string; posada: string}];
  }
}
