import React from "react";

export const Processor = (removeHeader: boolean = true) => {
  const onSubmit = (e) => {
    const csvFile = document.getElementById("upload")   
    //prevent default
    e.preventDefault();
    console.log(e);
    const input = csvFile.files[0];
    console.log(input)
    const reader = new FileReader();
    reader.onload = function(event){
        const text = event.target.result;
        const toObject = ( input ) => {
            return input.split('\r')

        }

        const splitData = (input: string) => {
            return input.split(',')
        }

        const removeNewLine = (input: string) => {
            return input.split('\n').join('')
        }
    
        let rows = toObject(text)
        removeHeader && rows.splice(0,1) 
        rows = rows.map(row => splitData(row))
        console.log(rows)
        rows.forEach(row => {
            row[0] = removeNewLine(row[0])
            console.log(row)
        })
        console.log(rows)
        document.write(JSON.stringify(rows));
    }

    reader.readAsText(input)
    };  
    
  return(
    <div className="flex flex-col gap-2 items-center">
        <h1 className='text-4xl text-emerald-500'>Will it parse?</h1>
        <form onSubmit={onSubmit} className="p-4 gap-2 justify-between flex flex-col bg-slate-600 max-w-xl">
            <label htmlFor="upload">Upload CSV</label>
            <input type="file" name="upload" id="upload" className="border-2" />
            <button className="p-2 border-2" type="submit">Submit</button>
        </form>
    </div>
  )
};