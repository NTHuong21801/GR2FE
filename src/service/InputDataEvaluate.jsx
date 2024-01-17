const InputDataEvaluate = {
    RowCenter(){
        const arr = ['A1', 'A2', 'A4', 'A6', 'A12', 'D13', 'A15', 'D15',
        'E15', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21',
        'F22', 'F23', 'F24', 'F25', 'F26', 'F27', 'F28', 'F29',
        'F30', 'F31', 'F32', 'F33', 'D17', 'D18', 'D19', 'D20',
        'D21', 'E17', 'E18', 'E19', 'E20', 'E21', 'D23', 'D24',
        'D25', 'D26', 'E23', 'E24', 'E25', 'E26', 'E27', 'E28',
        'E29', 'E30', 'D27', 'D28', 'D29', 'D30', 'D31', 'D32', 'E32', 
        'E31', 'D46', 'D47', 'D48'];
        return arr;
    },
    RowHeader(){
        const arr = ['A1', 'A2', 'A4', 'D7', 'D8', 'D9', 'D10', 'A12',
        'D13', 'A14', 'A15', 'D15', 'E15', 'F15', 'A16', 'F16', 'A22',
        'F22', 'A27', 'F27', 'A31', 'F31', 'F32', 'A33', 'A34', 'F33',
        'A35', 'A39', 'D42', 'D47'];
        return arr;
    },
    ColoringPink(){
        const arr = ['D7', 'D8', 'D9', 'D10', 'A12', 'D13', 'D17',
        'D18', 'D19', 'D20', 'D21', 'D23', 'D24', 'D25', 'D26', 'D28',
        'D29', 'D30', 'D31', 'A36', 'A40'];
        return arr;
    },
    ColoringYellow(){
        const arr = ['A16', 'D16', 'E16', 'F16', 'A22', 'D22',
        'E22', 'F22', 'A27', 'D27', 'E27', 'F27', 'A31', 'D31', 'E31', 'F31'];
        return arr;
    },
    HeightFix(){
        const arr = [1, 2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 39, 47, 48];
        return arr;    
    },
    Merge(){
        const object = [
            {
                "start": "A1",
                "end": "F1"
            },
            {
                "start": "A2",
                "end": "F2"
            },
            {
                "start": "A4",
                "end": "F5"
            },
            {
                "start": "A6",
                "end": "F6"
            },
            {
                "start": "A7",
                "end": "C7"
            },
            {
                "start": "D7",
                "end": "F7"
            },
            {
                "start": "A8",
                "end": "C8"
            },
            {
                "start": "D8",
                "end": "F8"
            },
            {
                "start": "A9",
                "end": "C9"
            },
            {
                "start": "D9",
                "end": "F9"
            },
            {
                "start": "A10",
                "end": "C10"
            },
            {
                "start": "D10",
                "end": "F10"
            },
            {
                "start": "A11",
                "end": "F11"
            },
            {
                "start": "A12",
                "end": "F12"
            },
            {
                "start": "A13",
                "end": "C13"
            },
            {
                "start": "D13",
                "end": "F13"
            },
            {
                "start": "A14",
                "end": "F14"
            },
            {
                "start": "A15",
                "end": "C15"
            },
            {
                "start": "A16",
                "end": "C16"
            },
            {
                "start": "A17",
                "end": "C17"
            },
            {
                "start": "A18",
                "end": "C18"
            },
            {
                "start": "A19",
                "end": "C19"
            },
            {
                "start": "A20",
                "end": "C20"
            },
            {
                "start": "A21",
                "end": "C21"
            },
            {
                "start": "A22",
                "end": "C22"
            },
            {
                "start": "A23",
                "end": "C23"
            },
            {
                "start": "A24",
                "end": "C24"
            },
            {
                "start": "A25",
                "end": "C25"
            },
            {
                "start": "A26",
                "end": "C26"
            },
            {
                "start": "A27",
                "end": "C27"
            },
            {
                "start": "A28",
                "end": "C28"
            },
            {
                "start": "A29",
                "end": "C29"
            },
            {
                "start": "A30",
                "end": "C30"
            },
            {
                "start": "A31",
                "end": "C31"
            },
            {
                "start": "A32",
                "end": "C32"
            },
            {
                "start": "A33",
                "end": "C33"
            },
            {
                "start": "A34",
                "end": "E34"
            },
            {
                "start": "A35",
                "end": "F35"
            },
            {
                "start": "A36",
                "end": "F38"
            },
            {
                "start": "A39",
                "end": "F39"
            },
            {
                "start": "A40",
                "end": "F45"
            },
            {
                "start": "D46",
                "end": "F46"
            },
            {
                "start": "D47",
                "end": "F47"
            },
            {
                "start": "D48",
                "end": "F48"
            },
            {
                "start": "D49",
                "end": "F49"
            }
        ]
        return object;
    },
    Rows(){
        const object = [
            {
                "row": 'A1',
                "value" :"ĐẠI HỌC BÁCH KHOA HÀ NỘI"
            },
            {
                "row": 'A2',
                "value" :"TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG"
            },
            {
                "row": 'A4',
                "value" :"ĐÁNH GIÁ ĐỒ ÁN TỐT NGHIỆP"
            },
            {
                "row": 'A6',
                "value" :"(Dùng cho giảng viên phản biện, điền thông tin vào phần màu hồng)"
            },
            {
                "row": 'A7',
                "value" :"Giảng viên phản biện:"
            },
            {
                "row": 'A8',
                "value" :"Đơn vị công tác:"
            },
            {
                "row": 'A9',
                "value" :"Họ và tên sinh viên:"
            },
            {
                "row": 'A10',
                "value" :"Mã số sinh viên"
            },
            {
                "row": 'A11',
                "value" :"Tên đồ án:"
            },
            {
                "row": 'A13',
                "value" :"Loại đồ án (nghiên cứu, ứng dụng, hay hỗn hợp cả nghiên cứu và ứng dụng):"		
            },
            {
                "row": 'A14',
                "value" :"A. Đánh giá kết quả thực hiện đồ án của sinh viên:"
            },
            {
                "row": 'A15',
                "value" :"Tiêu chí đánh giá"
            },
            {
                "row": 'D15',
                "value" :"Điểm đánh giá thành phần (thang 10)"
            },
            {
                "row": 'E15',
                "value" :"Trọng số"
            },
            {
                "row": 'F15',
                "value" :"Kết quả"
            },
            {
                "row": 'A16',
                "value" :"1. Chất lượng sản phẩm"
            },
            {
                "row": 'A17',
                "value" :"1.1 Tính độc đáo hoặc tính thời sự của đề tài"
            },
            {
                "row": 'A18',
                "value" :"1.2 Quy mô, khối lượng công việc đã thực hiện"
            },
            {
                "row": 'A19',
                "value" :"1.3 Độ khó, độ phức tạp của vấn đề"
            },
            {
                "row": 'A20',
                "value" :"1.4 Khả năng ứng dụng hoặc giá trị khoa học của giải pháp đề xuất"
            },
            {
                "row": 'A21',
                "value" :"1.5 Độ hoàn thiện của sản phẩm"
            },
            {
                "row": 'E17',
                "value" :0.5
            },
            {
                "row": 'E18',
                "value" :1.0
            },
            {
                "row": 'E19',
                "value" :1.0
            },
            {
                "row": 'E20',
                "value" :0.5
            },
            {
                "row": 'E21',
                "value" :1.0
            },
            {
                "row": 'E23',
                "value" :0.5
            },
            {
                "row": 'E24',
                "value" :2.0
            },
            {
                "row": 'E25',
                "value" :1.0
            },
            {
                "row": 'E26',
                "value" :0.5
            },
            {
                "row": 'E28',
                "value" :0.5
            },
            {
                "row": 'E29',
                "value" :1.0
            },
            {
                "row": 'E30',
                "value" :0.5
            },
            {
                "row": 'E32',
                "value" :0.5
            },
            {
                "row": 'A22',
                "value" :"2. Chất lượng báo cáo"
            },
            {
                "row": 'A23',
                "value" :"2.1 Tính hợp lý của bố cục"
            },
            {
                "row": 'A24',
                "value" :"2.2 Tính đầy đủ và đúng đắn của các nội dung cần trình bày"
            },
            {
                "row": 'A25',
                "value" :"2.3 Văn phong và hình thức trình bày (chính tả, hình vẽ, bảng biểu, thuật ngữ...)"
            },
            {
                "row": 'A26',
                "value" :"2.4 Mức độ tin cậy về nội dung (có đầy đủ tài liệu tham khảo và tham chiếu tới tài liệu)"
            },
            {
                "row": 'A27',
                "value" :"3. Phẩm chất của sinh viên trong quá trình làm đồ án"
            },
            {
                "row": 'A28',
                "value" :"3.1 Tinh thần trách nhiệm, thái độ nghiêm túc"
            },
            {
                "row": 'A29',
                "value" :"3.2 Khả năng làm chủ kiến thức, công nghệ"
            },
            {
                "row": 'A30',
                "value" :"3.3. Sự chủ động, sáng tạo, chấp nhận thách thức trong công việc"
            },
            {
                "row": 'A31',
                "value" :"4. Điểm thưởng"
            },
            {
                "row": 'A32',
                "value" :"Thưởng 5 điểm cho đối tượng là tác giả chính của công bố khoa học là kết quả của đồ án (tối thiểu đã được chấp nhận đăng); hoặc sản phẩm ứng dụng của đồ án đã được triển khai thành công trong thực tế."
            },
            {
                "row": 'A33',
                "value" :"Tổng điểm thang 100 (max 100)"
            },
            {
                "row": 'A34',
                "value" :"Điểm quy đổi về thang 10 (làm tròn đến 0.5)"
            },
            {
                "row": 'A35',
                "value" :"B. Nhận xét chung"
            },
            {
                "row": 'A39',
                "value" :"C. Kết luận"
            },
            {
                "row": 'D48',
                "value" :"Giảng viên phản biện"
            },
            {
                "row": 'D49',
                "value" :"(ký và ghi rõ họ tên)"
            }
        ]
        return object;
    },
    InputData(data){
        const object = [
            {
                "row": 'D7',
                "value": data.teacher
            },
            {
                "row": 'D8',
                "value": data.school
            },
            {
                "row": 'D9',
                "value": data.student
            },
            {
                "row": 'D10',
                "value": data.mssv
            },
            {
                "row": 'A12',
                "value": data.topic
            },
            {
                "row": 'D13',
                "value": data.type
            },
            {
                "row": 'D17',
                "value": data.originally
            },
            {
                "row": 'D18',
                "value": data.scale
            },
            {
                "row": 'D19',
                "value": data.difficult
            },
            {
                "row": 'D20',
                "value": data.skill
            },
            {
                "row": 'D21',
                "value": data.complete
            },
            {
                "row": 'D23',
                "value": data.rational
            },
            {
                "row": 'D24',
                "value": data.accuracy
            },
            {
                "row": 'D25',
                "value": data.style
            },
            {
                "row": 'D26',
                "value": data.reality
            },
            {
                "row": 'D28',
                "value": data.response
            },
            {
                "row": 'D29',
                "value": data.owns
            },
            {
                "row": 'D30',
                "value": data.creative
            },
            {
                "row": 'D32',
                "value": data.point
            },
            {
                "row": 'A36',
                "value": data.comment
            },
            {
                "row": 'D40',
                "value": data.conclusion
            },
            {
                "row": 'F17',
                "value": data.originally * 0.5
            },
            {
                "row": 'F18',
                "value": data.scale
            },
            {
                "row": 'F19',
                "value": data.difficult
            },
            {
                "row": 'F20',
                "value": data.skill * 0.5
            },
            {
                "row": 'F21',
                "value": data.complete
            },
            {
                "row": 'F23',
                "value": data.rational * 0.5
            },
            {
                "row": 'F24',
                "value": data.accuracy * 2
            },
            {
                "row": 'F25',
                "value": data.style
            },
            {
                "row": 'F26',
                "value": data.reality * 0.5
            },
            {
                "row": 'F28',
                "value": data.response * 0.5
            },
            {
                "row": 'F29',
                "value": data.owns
            },
            {
                "row": 'F30',
                "value": data.creative * 0.5
            },
            {
                "row": 'F31',
                "value": data.point
            },
            {
                "row": 'F32',
                "value": data.point
            },
            {
                "row": 'F16',
                "value":  parseFloat(data.originally * 0.5) +  parseFloat(data.scale) +  parseFloat(data.difficult) +  parseFloat(data.skill * 0.5) +  parseFloat(data.complete)
            },
            {
                "row": 'F22',
                "value":  parseFloat(data.rational * 0.5) +  parseFloat(data.accuracy * 2) +  parseFloat(data.style) +  parseFloat(data.reality * 0.5)
            },
            {
                "row": 'F27',
                "value":  parseFloat(data.response * 0.5) +  parseFloat(data.owns) + parseFloat(data.creative * 0.5)
            },
            {
                "row": 'F33',
                "value": parseFloat(data.point) +  parseFloat(data.originally * 0.5) +  parseFloat(data.scale) +  parseFloat(data.difficult) +  parseFloat(data.skill * 0.5) +  parseFloat(data.complete) +  parseFloat(data.rational * 0.5) +  parseFloat(data.accuracy * 2) +  parseFloat(data.style) +  parseFloat(data.reality * 0.5) + parseFloat(data.response * 0.5) +  parseFloat(data.owns) + parseFloat(data.creative * 0.5)
            },
            {
                "row": 'F34',
                "value": (parseFloat(data.point) +  parseFloat(data.originally * 0.5) +  parseFloat(data.scale) +  parseFloat(data.difficult) +  parseFloat(data.skill * 0.5) +  parseFloat(data.complete) +  parseFloat(data.rational * 0.5) +  parseFloat(data.accuracy * 2) +  parseFloat(data.style) +  parseFloat(data.reality * 0.5) + parseFloat(data.response * 0.5) +  parseFloat(data.owns) + parseFloat(data.creative * 0.5)) / 10
            },
        ]
        return object;
    },
    Border(){
        const object = ['A', 'D', 'E', 'F']
        return object;
    }
};
export default InputDataEvaluate;