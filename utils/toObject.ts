import { State } from "./stateFormatter";

export type CSVToObj = {
  First_name: string;
  Last_name: string;
  State: State;
  Grad_year: number;
};
// export const inputCSV = "State,Grad_Year,First_Name,Last_Name\nTexas,2024,Waylon,Jennings\nTX,2025,Willie,Nelson\nAlabama,2025,Hank,Williams\nOK,2026,Reba,McEntire\nCanada,2023,Shania,Twain\nTennessee,2024,Dolly,Parton"

export const toObject = (input: string): CSVToObj[] => {
  const [header, ...rows] = input.split("\n");
  const keys = header.split(",");
  const values = rows.map((row) => row.split(","));
  const result = values.map((value) => {
    return value.reduce((acc, curr, i) => {
        if (curr)
        console.log(curr)
      return { ...acc, [keys[i].trim()]: curr.trim() };
    }, {});
  });
  return result as CSVToObj[];
};

type Row = {
  State: State;
  Grad_Year: number;
  First_Name: string;
  Last_Name: string;
};
