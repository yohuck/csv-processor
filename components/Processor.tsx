import { toObject, CSVToObj } from "../utils/toObject";
import { stateFormatter } from "../utils/stateFormatter";
import { download } from "../utils/download";
import { objectToCSV } from "../utils/objectToCSV";

type CSVBlob = Blob & { name: string}

type CSV = HTMLElement & {
  files: CSVBlob[] 
};

export const Processor = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const csvFile = document.getElementById("upload") as CSV;
    const title = csvFile.files[0].name.split(".")[0];
    const input = csvFile.files[0];
    const reader = new FileReader();
    reader.onload = async (event) => {
      let text = "";
      if (event.target != null) {
        text = event.target.result as string;
      }
      const rowArr: CSVToObj[] = toObject(text);
      rowArr.forEach((row) => {
        row["State"] = stateFormatter(row["State"]);
      });
      const csvDL = objectToCSV(rowArr)
      download(`${title}-processed.csv`, csvDL)      
    };
    reader.readAsText(input);
  };

  return (
    <div className="flex flex-col gap-2 items-center text-emerald-500 font-mono">
      <h1 className="text-2xl">Event CSV Processor</h1>
      <form
        onSubmit={onSubmit}
        className=" border-2 border-emerald-500 p-4 gap-2 justify-between flex flex-col max-w-xl"
      >
        <label htmlFor="upload" className="text-lg">
          Upload CSV
        </label>
        <input
          type="file"
          name="upload"
          id="upload"
          className="border-2 border-emerald-500"
        />
        <button
          className="p-2 border-2 hover:bg-neutral-900 border-emerald-500"
          type="submit"
        >
          Process
        </button>
      </form>
    </div>
  );
};
