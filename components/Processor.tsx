import { toObject, CSVToObj } from "../utils/toObject";
import { stateFormatter } from "../utils/stateFormatter";

type CSV = HTMLElement & {
  files: Blob[];
};

export const Processor = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const csvFile = document.getElementById("upload") as CSV;
    e.preventDefault();
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
      console.log(rowArr);
      document.write(JSON.stringify(rowArr));
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
