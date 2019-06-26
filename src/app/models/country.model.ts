export class Country {
  
   countryName: string;
   countryId: number;
   nationalFlag?: string;

   constructor(name, id, flag?) {
    this.countryName = name;
    this.countryId = id;
    this.nationalFlag = flag;
   }

}