export const inputCSV = "State,Grad_Year,First_Name,Last_Name\nTexas,2024,Waylon,Jennings\nTX,2025,Willie,Nelson\nAlabama,2025,Hank,Williams\nOK,2026,Reba,McEntire\nCanada,2023,Shania,Twain\NTennessee,2024,Dolly,Parton"

const toObject = (input: string) => {
    const [header, ...rows] = input.split("\n");
    const keys = header.split(",")
    const values = rows.map(row => row.split(","))
    const result = values.map(value => {
        return value.reduce((acc, curr, i) => {
            return { ...acc, [keys[i]]: curr }
        }, {})
    }
    )
    return result
}

console.log(toObject(inputCSV))
