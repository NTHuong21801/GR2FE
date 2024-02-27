import * as XLSX from 'xlsx';


export async function readExcelFile(file) {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  return new Promise((resolve, reject) => {
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheets = workbook.SheetNames;
      const sheetData = sheetToJsonWithCellInfo(workbook.Sheets[sheets[0]]);
      resolve({ sheets, data: sheetData });
    };
    reader.onerror = (error) => reject(error);
  });
}
function sheetToJsonWithCellInfo(sheet) {
    const range = XLSX.utils.decode_range(sheet['!ref']);
    const json = [];
    
    for (let rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
      const row = {};
      
      for (let colNum = range.s.c; colNum <= range.e.c; colNum++) {
        const cellAddress = XLSX.utils.encode_cell({ r: rowNum, c: colNum });
        const cell = sheet[cellAddress];
        
        // Bổ sung thông tin về cell vào đối tượng JSON
        row[cellAddress] = {
          value: cell ? cell.v : null, // Giá trị của cell
          type: cell ? cell.t : null,  // Loại dữ liệu của cell
        };
      }
      
      json.push(row);
    }
    
    return json;
  }
  
