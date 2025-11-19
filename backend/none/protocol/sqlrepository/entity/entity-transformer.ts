import { ValueTransformer } from 'typeorm';
import * as moment from 'moment';
export class timeDateTransformer implements ValueTransformer {
    to(value:any) {
        let dateN
        if(typeof value == "number" ){
          let valueInt = value;
          dateN = moment( String(valueInt).length==10 ? valueInt*1000 : valueInt  ).utcOffset("+08:00").toDate();
        }
        // else if(typeof value == "string"  ){
        //   let valueInt = parseInt(value);
        //   dateN = moment( String(valueInt).length==10 ? valueInt*1000 : valueInt ).toDate();
        // }
        // else if( value&&value.getDay  ){
        //   dateN = value;
        // }
        else{
          // console.info(value,moment(value).utcOffset("+08:00").toDate(),"==============time");
          return moment(value).utcOffset("+08:00").toDate();
        }
        return dateN;
    }
    from(value) {
      if(!value){return value;}
      return moment(value).format('YYYY-MM-DD HH:mm')
    }
  }

  // export class timeDateOutTransformer implements ValueTransformer {
  //   to(value:any) {
  //     console.log(value);
  //       return value;
  //   }
  //   from(value) {
  //     if(!value){return value;}
  //     return moment(value).format('YYYY-MM-DD HH:mm')
  //   }
  // }

  export class jsonTransformer implements ValueTransformer {
    to(value:any) {
        return JSON.stringify(value);
    }
    from(value) {
      if(!value){return value;}
      return JSON.parse(value);
    }
  }