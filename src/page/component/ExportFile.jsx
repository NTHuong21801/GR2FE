import ApiService from "../../service/service";
import { useSelector } from "react-redux";
const ExportFile = {
    downloadExcelFromBase64(base64String, fileName) {
        const byteCharacters = atob(base64String);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName; 
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
    },
    downloadZip(zipCode){
        try {
            const byteCharacters = atob(zipCode);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'application/zip' });

            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = "zipFile";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);  // Ensure the element is removed
            URL.revokeObjectURL(url);  // Clean up the URL object
        } catch (error) {
            console.error("Failed to create or download zip file:", error);
        }
    },
    async writeDataToListFile(student, token){
        try{
            var lists = [];
            student.forEach(s => {
                var status = "";
                if(s.studentStatus == "APPROVE"){
                    status = "Đồng ý bảo vệ";
                }else if(s.studentStatus == "APPROVE"){
                    status = "Không đồng ý bảo vệ";
                }else{
                    status = "N/A"
                }
                let thesisName = s.thesisName == null ? "" : s.thesisName;
                let thesisType = s.thesisType == null ? "" : s.thesisType;
                const item = {
                    "StudentID": s.mssv,
                    "studentname": s.studentName,
                    "Email": s.studentEmail,
                    "GVHD": s.teacherName,
                    "Lớp": s.className,
                    "Tên đề tài": s.topicName,
                    "birthdate": s.studentBirth,
                    "classid": s.classCode,
                    "courseid": s.courseId,
                    "Điểm hướng dẫn": s.teacherEvaluatePoint,
                    "Điểm phản biện": s.teacherDebatePoint,
                    "Điểm cuối kỳ": s.finalPoint,
                    "Đồng ý bảo vệ": status,
                    "name": thesisName,
                    "SectionType": thesisType,
                    "note": thesisName,
                    "Địa điểm": s.studentLocated,
                    "phone": s.studentPhone,
                    "termid":s.semester
                }
                lists.push(JSON.stringify(item));
            })
            const data = JSON.stringify({
                "json": lists
            });
            const res = await ApiService.writeDataToListFile(data, token);
            ExportFile.downloadExcelFromBase64(res.base64, res.fileName)
        }catch(e) {
            console.error(e);
        }
    }
}
export default ExportFile;