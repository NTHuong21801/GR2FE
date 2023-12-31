import Footer from '../footer/Footer'
import Header from '../header/Header'
import FormDivide from './FormDivide';
import './divide.css'
import React from "react";
import InputDataDivide from '../../service/InputDataDivide';
const ExcelJS = require("exceljs");
const Url = process.env.REACT_APP_API_URL;
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
const rowHeaderValue = InputDataDivide.Rows();
const mergeValue = InputDataDivide.Merge();
const rowsHeader = InputDataDivide.RowHeader();
const rowCenter = InputDataDivide.RowCenter();
const rowWrap = InputDataDivide.RowWrap();
const coloringGreen = InputDataDivide.ColoringGreen();
const coloringOrange = InputDataDivide.ColoringOrange();
export default function CreateDidive() {
    const exportExcelFile = (myData) => {
        const inputData = InputDataDivide.InputData(myData);
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet('Phiếu phân công nhiệm vụ');
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
        if (rowHeaderValue.length > 0) {
            rowHeaderValue.forEach((r) => {
                sheet.getCell(r.row).value = r.value;
            })
        }
        if (inputData.length > 0) {
            inputData.forEach((r) => {
                sheet.getCell(r.row).value = r.value;
            })
        }
        if (mergeValue.length > 0) {
            mergeValue.forEach((m) => {
                sheet.mergeCells(m.start, m.end)
            });
        }
        coloringGreen.forEach(c => {
            sheet.getCell(c).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'ABF2C7' },
            };
        })
        coloringOrange.forEach(c => {
            sheet.getCell(c).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FF8000' },
            };
        })
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
    }
    return (
        <>
            <Header />
            <FormDivide handleExportExcelFile={exportExcelFile} />
            <Footer />
        </>
    )
}