import ApiService from "../../service/service";

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
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },
    async writeDataToListFile(student){
        try{
            var lists = [];
            student.forEach(s => {
                let studentStatus = s.studentStatus == null ? "N/A" : s.studentStatus;
                let thesisName = s.thesisName == null ? "" : s.thesisName;
                let thesisType = s.thesisType == null ? "" : s.thesisType;
                const item = {
                    "studentID": s.mssv,
                    "studentName": s.studentName,
                    "Email": s.studentEmail,
                    "GVHD": s.teacherName,
                    "Lớp": s.className,
                    "Tên đề tài": s.topicName,
                    "birthdate": s.studentBirth,
                    "classid": s.classCode,
                    "courseid": s.courseId,
                    "Điểm hướng dẫn": s.teacherPoint,
                    "Điểm quá trình": s.midtermPoint,
                    "Điểm cuối kỳ": s.finalPoint,
                    "Đồng ý bảo vệ": studentStatus,
                    "name": thesisName,
                    "SectionType": thesisType,
                    "note": thesisName,
                    "Địa điểm": s.studentLocated
                }
                console.log(item);
                lists.push(JSON.stringify(item));
            })
            const data = JSON.stringify({
                "json": lists
            });
            const res = await ApiService.writeDataToListFile(data);
            ExportFile.downloadExcelFromBase64(res.base64, res.fileName)
        }catch(e) {
            console.error(e);
        }
    }
}
export default ExportFile;