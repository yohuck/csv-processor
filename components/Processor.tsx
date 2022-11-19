import { stateFormatter } from "../utils/state_processor";

type CSV = HTMLElement & {
  files: Blob[];
};

type ReaderReturn = Event & {
  target: CSV;
};

const toJs = (input: string) => {
  return input.split("\r");
};

const splitData = (input: string) => {
  return input.split(",");
};

const removeNewLine = (input: string) => {
  return input.split("\n").join("");
};

export const Processor = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const csvFile = document.getElementById("upload") as CSV;
    e.preventDefault();
    const input = csvFile.files[0];
    const reader = new FileReader();
    reader.onload = async (event: Event) => {
      if (event.target != null && event.target instanceof FileReader) {
        const text = event.target.result as string;
        let rows: string[] = toJs(text);
        rows.splice(0, 1);
        let splitRows = rows.map((row) => splitData(row));
        splitRows.forEach((row) => {
          row[0] = removeNewLine(row[0]);
          row[0] = stateFormatter(row[0]);
        });
        rows = rows.filter((row) => row[0] != "NA");
        document.write(JSON.stringify(rows));
      }
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
