import React from "react";
import Rows from "./page/service/Rows";
import Merge from "./page/service/Merge";
const ExcelJS = require("exceljs");
const rowsHeader = [1, 2, 4, 7, 11, 15, 17, 22, 41, 43, 48, 53, 58, 63, 68, 75, 85, 87, 92];
const rowCenter = ['A1', 'A2', 'A3', 'A4', 'E5', 'F5']
const rowWrap = ['A68'];
const fontSettings = {
    name: "Arial",
    family: 4,
    size: 11,
    bold: true,
  };
  
  const centerAlignment = {
    horizontal: 'center',
    vertical: 'middle',
  };
  
  const wrapTextAlignment = {
    wrapText: true,
  };
export default function Test() {
    const mergeValue = Rows;
    const rowHeaderValue = Merge;
    const exportExcelFile = () => {
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet('My Sheet', {
            headerFooter: { firstHeader: "Hello Exceljs", firstFooter: "Hello World" }
        });
        if (rowsHeader.length > 0) {
            rowsHeader.forEach((r) => {
                sheet.getRow(r).font = fontSettings;
            });
        }

        if (rowCenter.length > 0) {
            rowCenter.forEach((c) => {
                sheet.getCell(c).alignment = centerAlignment;
            });
        }

        if (rowWrap.length > 0) {
            rowWrap.forEach((c) => {
                sheet.getCell(c).alignment = wrapTextAlignment;
            });
        }
        sheet.columns = [{ width: 15 }]
        if(mergeValue.length > 0){
            mergeValue.forEach((r) => {
                sheet.getCell(r.row).value = r.value;
            })
        }
        if (rowHeaderValue.length > 0) {
            rowHeaderValue.forEach((m) => {
                sheet.mergeCells(m.start, m.end)
            });
        }
        workbook.xlsx.writeBuffer().then(function (data) {
            const blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });
            const url = window.URL.createObjectURL(blob);
            const anchor = document.createElement("a");
            anchor.href = url;
            anchor.download = "download.xlsx";
            anchor.click();
            window.URL.revokeObjectURL(url);
        });
    };

    return (
        <div style={{ padding: "30px" }}>
            <button
                className="btn btn-primary float-end mt-2 mb-2"
                onClick={exportExcelFile}
            >
                Export
            </button>
        </div>
    );
};