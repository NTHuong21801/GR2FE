import Footer from "../footer/Footer";
import Header from "../header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import DebateMerge from "../service/DebateMerge";
import DebateInput from "../service/DebateInput";
import FormDebate from "./FormDebate";
const ExcelJS = require("exceljs");
const rowCenter = ['A1', 'A2', 'A4', 'A6', 'A12', 'D13', 'A15', 'D15',
    'E15', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21',
    'F22', 'F23', 'F24', 'F25', 'F26', 'F27', 'F28', 'F29',
    'F30', 'F31', 'F32', 'F33', 'D17', 'D18', 'D19', 'D20',
    'D21', 'E17', 'E18', 'E19', 'E20', 'E21', 'D23', 'D24',
    'D25', 'D26', 'E23', 'E24', 'E25', 'E26', 'E27', 'E28',
    'E29', 'D27', 'D28', 'D31', 'E31', 'D46', 'D47', 'D48'];
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
const rowsHeader = ['A1', 'A2', 'A4', 'D7', 'D8', 'D9', 'D10', 'A12',
    'D13', 'A14', 'A15', 'D15', 'E15', 'F15', 'A16', 'F16', 'A22',
    'F22', 'A27', 'F27', 'A30', 'F30', 'A32', 'F32', 'A33', 'F33',
    'A35', 'A39', 'D42', 'D47']
const coloringPink = ['D7', 'D8', 'D9', 'D10', 'A12', 'D13', 'D17',
    'D18', 'D19', 'D20', 'D21', 'D23', 'D24', 'D25', 'D26', 'D28',
    'D29', 'D31', 'A36', 'A40']
const coloringYellow = ['A16', 'D16', 'E16', 'F16', 'A22', 'D22',
    'E22', 'F22', 'A27', 'D27', 'E27', 'F27', 'A30', 'D30', 'E30', 'F30']
const heightFix = [1, 2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 35, 39, 47, 48]
export default function CreateDebate() {
    const debateMerge = DebateMerge;
    const debateInput = DebateInput;
    const exportExcelFile = () => {
        // const workbook = new ExcelJS.Workbook();
        // const sheet = workbook.addWorksheet('ĐG GV Phản biện');
        // sheet.getColumn('E').width = 15
        // sheet.getColumn('A').width = 35
        // sheet.getColumn('D').width = 20
        // sheet.getColumn('F').width = 15
        // sheet.getRow(15).height = 40
        // heightFix.forEach(f => {
        //     sheet.getRow(f).height = 30
        // })
        // if (rowsHeader.length > 0) {
        //     rowsHeader.forEach((r) => {
        //         sheet.getCell(r).font = fontSettings;
        //     });
        // }

        // if (rowCenter.length > 0) {
        //     rowCenter.forEach((c) => {
        //         sheet.getCell(c).alignment = centerAlignment;
        //     });
        // }
        // if (debateInput.length > 0) {
        //     debateInput.forEach((r) => {
        //         sheet.getCell(r.row).value = r.value;
        //     })
        // }
        // if (debateMerge.length > 0) {
        //     debateMerge.forEach((m) => {
        //         sheet.mergeCells(m.start, m.end)
        //     });
        // }
        // coloringPink.forEach(c => {
        //     sheet.getCell(c).fill = {
        //         type: 'pattern',
        //         pattern: 'solid',
        //         fgColor: { argb: 'EFCABF' },
        //     };
        // })
        // coloringYellow.forEach(c => {
        //     sheet.getCell(c).fill = {
        //         type: 'pattern',
        //         pattern: 'solid',
        //         fgColor: { argb: 'EEE8B6' },
        //     };
        // })
        // workbook.xlsx.writeBuffer().then(function (data) {
        //     const blob = new Blob([data], {
        //         type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        //     });
        //     const url = window.URL.createObjectURL(blob);
        //     const anchor = document.createElement("a");
        //     anchor.href = url;
        //     anchor.download = "download.xlsx";
        //     anchor.click();
        //     window.URL.revokeObjectURL(url);
        // });
    }
    return (
        <>
            <Header />
            <FormDebate handleExportExcelFile={exportExcelFile} />
            <Footer />
        </>
    )
}