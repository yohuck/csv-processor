import { CSVToObj } from "./toObject";


// converts object to CSV
export function objectToCSV(objArray: CSVToObj[]) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let retStr= "First_Name,Last_Name,State,Grad_Year,Notes\n";
    objArray.forEach(obj => {
    retStr +=`${obj.First_Name},${obj.Last_Name},${obj.State},${obj.Grad_Year}\n`;
    })
    return retStr;
    }
    

