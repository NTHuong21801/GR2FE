import React, { useState } from 'react';
import { readExcelFile } from '../../utils/readExcelFile';

function ExcelReader() {
  const [sheetNames, setSheetNames] = useState([]);
  const [rowData, setRowData] = useState([]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    try {
      const { sheets, data } = await readExcelFile(file);
      setSheetNames(sheets);
      console.log(data);
      setRowData(data);
    } catch (error) {
      console.error('Error reading Excel file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <div>
        <h3>Sheet Names:</h3>
        <ul>
          {sheetNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Row Data:</h3>
        <table>
          <tbody>
            {rowData != null && rowData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.classid}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExcelReader;
