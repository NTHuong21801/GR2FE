
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Merge from '../service/Merge';
import Rows from '../service/Rows';
import FormDivide from './FormDivide';
import InputData from './InputData';
import './divide.css'
import React from "react";
const ExcelJS = require("exceljs");
const Url = process.env.REACT_APP_API_URL;
const rowsHeader = [1, 2, 4, 7, 11, 15, 17, 22, 41, 43, 48, 53, 58, 63, 68, 75, 85, 87, 92];
const rowCenter = ['A1', 'A2', 'A3', 'A4', 'E5', 'F5', 'D14', 'I14']
const rowWrap = ['A24', 'A28', 'A32', 'A34', 'A38', 'A45', 'A50', 'A55', 'A60', 'A65', 'A70'];
const coloringGreen = ['C8', 'C9', 'C10', 'I8', 'I9', 'C12', 'C13', 'D14', 'I14', 'A16', 'A21', 'A24', 'A28', 'A32', 'A34', 'A38', 'A45', 'A50', 'A55', 'A60', 'A65', 'A70', 'F5'];
const coloringOrange = ['C18', 'C19', 'I43', 'K43', 'I48', 'K48', 'I53', 'K53', 'I58', 'K58', 'I63', 'K63', 'I68', 'K68'];
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
export default function CreateDidive() {
    const rowHeaderValue = Rows;
    const mergeValue = Merge;
    const exportExcelFile = (myData) => {
        const inputData = InputData(myData);
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