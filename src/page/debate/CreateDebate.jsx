import Footer from "../footer/Footer";
import Header from "../header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputDataDebate from "../../service/InputDataDebate";
import FormDebate from "./FormDebate";
const ExcelJS = require("exceljs");
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
const rowCenter = InputDataDebate.RowCenter();
const rowsHeader = InputDataDebate.RowHeader();
const coloringPink = InputDataDebate.ColoringPink();
const coloringYellow = InputDataDebate.ColoringYellow();
const heightFix = InputDataDebate.HeightFix();
const merge = InputDataDebate.Merge();
const rows = InputDataDebate.Rows();
const border = InputDataDebate.Border();
export default function CreateDebate() {
    const exportExcelFile = (myData) => {
        const inputData = InputDataDebate.InputData(myData);
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet('ĐG GV Phản biện');
        sheet.getColumn('E').width = 15
        sheet.getColumn('A').width = 35
        sheet.getColumn('D').width = 20
        sheet.getColumn('F').width = 15
        sheet.getRow(31).height = 120
        heightFix.forEach(f => {
            sheet.getRow(f).height = 50
        })
        if (rowsHeader.length > 0) {
            rowsHeader.forEach((r) => {
                sheet.getCell(r).font = fontSettings;
            });
        }
        if (rows.length > 0) {
            rows.forEach((r) => {
                sheet.getCell(r.row).value = r.value;
            })
        }
        if (merge.length > 0) {
            merge.forEach((m) => {
                sheet.mergeCells(m.start, m.end)
            });
        }
        coloringPink.forEach(c => {
            sheet.getCell(c).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'EFCABF' },
            };
        })
        coloringYellow.forEach(c => {
            sheet.getCell(c).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'EEE8B6' },
            };
        })
        if (inputData.length > 0) {
            inputData.forEach((r) => {
                sheet.getCell(r.row).value = r.value;
            })
        }
        if (border.length > 0) {
            border.forEach(b => {
                sheet.getColumn(b).eachCell({ includeEmpty: true }, (cell, rowNumber) => {
                    if (rowNumber > 14 && rowNumber < 34) {

                        cell.style.border = {
                            top: { style: 'thin' },
                            bottom: { style: 'thin' },
                            left: { style: 'thin' },
                            right: { style: 'thin' },
                        };
                    }
                });
            })
        }
        sheet.eachRow({ includeEmpty: true }, (row) => {
            row.eachCell({ includeEmpty: true }, (cell) => {
                cell.style.alignment = {
                    wrapText: true
                };
            });
        });
        if (rowCenter.length > 0) {
            rowCenter.forEach((c) => {
                sheet.getCell(c).alignment = centerAlignment;
            });
        }
        workbook.xlsx.writeBuffer().then(function (data) {
            const blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });
            const url = window.URL.createObjectURL(blob);
            const anchor = document.createElement("a");
            anchor.href = url;
            anchor.download = "Phiếu phản biện ĐATN.xlsx";
            anchor.click();
            window.URL.revokeObjectURL(url);
        });
    }
    return (
        <>
            <Header />
            <FormDebate handleExportExcelFile={exportExcelFile} />
            <Footer />
        </>
    )
}