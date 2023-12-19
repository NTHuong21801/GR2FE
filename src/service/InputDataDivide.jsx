const InputDataDivide = {
    InputData(data){
        const object = [
            {
                "row": 'F5',
                "value": data.semester
            },
            {
                "row": 'C8',
                "value": data.fullname
            },
            {
                "row": 'C9',
                "value": data.phone
            },
            {
                "row": 'C10',
                "value": data.grade
            },
            {
                "row": 'I8',
                "value": data.mssv
            },
            {
                "row": 'I9',
                "value": data.mail
            },
            {
                "row": 'D14',
                "value": data.from
            },
            {
                "row": 'I14',
                "value": data.to
            },
            {
                "row": 'A16',
                "value": data.topic
            },
            {
                "row": 'C18',
                "value": data.choice1
            },
            {
                "row": 'C19',
                "value": data.choice2
            },
            {
                "row": 'A21',
                "value": data.choiceAnother
            },
            {
                "row": 'A24',
                "value": data.goalKnowledge
            },
            {
                "row": 'A28',
                "value": data.goalTech
            },
            {
                "row": 'A32',
                "value": data.goalSkill
            },
            {
                "row": 'A34',
                "value": data.goalProduct
            },
            {
                "row": 'A38',
                "value": data.goalIssue
            },
            {
                "row": 'I43',
                "value": data.content1From
            },
            {
                "row": 'K43',
                "value": data.content1To
            },
            {
                "row": 'A45',
                "value": data.content1D
            },
            {
                "row": 'I48',
                "value": data.content2From
            },
            {
                "row": 'K48',
                "value": data.content2To
            },
            {
                "row": 'A50',
                "value": data.content2D
            },{
                "row": 'I53',
                "value": data.content3From
            },
            {
                "row": 'K53',
                "value": data.content3To
            },
            {
                "row": 'A55',
                "value": data.content3D
            },{
                "row": 'I58',
                "value": data.content4From
            },
            {
                "row": 'K58',
                "value": data.content4To
            },
            {
                "row": 'A60',
                "value": data.content4D
            },
            {
                "row": 'I63',
                "value": data.content5From
            },
            {
                "row": 'K63',
                "value": data.content5To
            },
            {
                "row": 'A65',
                "value": data.content5D
            },{
                "row": 'I68',
                "value": data.content6From
            },
            {
                "row": 'K68',
                "value": data.content6To
            },
            {
                "row": 'A70',
                "value": data.content6D
            }
        ]
        return object;
    },
    Rows(){
        const object = [
            {
                "row": "A1",
                "value": "ĐẠI HỌC BÁCH KHOA HÀ NỘI"
            },
            {
                "row": "A2",
                "value": "TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG"
            },
            {
                "row": "A4",
                "value": "PHIẾU GIAO NHIỆM VỤ ĐỒ ÁN TỐT NGHIỆP HỆ KỸ SƯ"
            },
            {
                "row": "E5",
                "value": "KỲ"
            },
            {
                "row": "A7",
                "value": "Thông tin về sinh viên"
            },
            {
                "row": "A8",
                "value": "Họ và tên sinh viên:"
            },
            {
                "row": "A9",
                "value": "Điện thoại liên lạc:"
            },
            {
                "row": "A10",
                "value": "Lớp:"
            },
            {
                "row": "H8",
                "value": "MSSV:"
            },
            {
                "row": "H9",
                "value": "Email:"
            },
            {
                "row": "A11",
                "value": "Thông tin giáo viên hướng dẫn"
            },
            {
                "row": "A12",
                "value": "Họ và tên GVHD:"
            },
            {
                "row": "A13",
                "value": "Đồ án được thực hiện tại:"
            },
            {
                "row": "A14",
                "value": "Thời gian làm ĐATN:"
            },
            {
                "row": "C14",
                "value": "Từ ngày"
            },
            {
                "row": "H14",
                "value": "đến ngày"
            },
            {
                "row": "A15",
                "value": "1. Tên đề tài:"
            },
            {
                "row": "A17",
                "value": "2. Lĩnh vực của đề tài:"
            },
            {
                "row": "A22",
                "value": "3. Mục tiêu của đề tài:"
            },
            {
                "row": "A23",
                "value": "3.1. Kiến thức sinh viên thu nhập được:"
            },
            {
                "row": "A27",
                "value": "3.2. Công nghệ sinh viên thu nhập:"
            },
            {
                "row": "A31",
                "value": "3.3. Kỹ năng sinh viên phát triển được:"
            },
            {
                "row": "A33",
                "value": "3.4. Sản phẩm kỳ vọng:"
            },
            {
                "row": "A37",
                "value": "3.5. Vấn đề thực tiễn đồ án giải quyết:"
            },
            {
                "row": "A41",
                "value": "4. Các nội dũng sẽ thực hiện và kế hoạch triển khai:"
            },
            {
                "row": "A42",
                "value": "Lưu ý: khối lượng yêu cầu đối với đồ án tốt nghiệp hệ kỹ sư là 9(0-0-18-18), i.e. 18 tiết làm việc/tuần trong 17 tuần."
            },
            {
                "row": "A43",
                "value": "Nội dung 1: Tìm hiểu tổng quen về bài toán"
            },
            {
                "row": "A48",
                "value": "Nội dung 2: Tìm hiểu tổng quen về công nghệ liên quan"
            },
            {
                "row": "A53",
                "value": "Nội dung 3: Phân tích thiết kế"
            },
            {
                "row": "A58",
                "value": "Nội dung 4: Xây dựng chương trình"
            },
            {
                "row": "A63",
                "value": "Nội dung 5: Thử nghiệm và đánh giá"
            },
            {
                "row": "A68",
                "value": "Nội dung 6:  Triển khai trong thực tế; và đánh giá, phản hồi của người sử dụng"
            },
            {
                "row": "A75",
                "value": "5. Lời cam đoan của sinh viên đã nhận được nhiệm vụ"
            },
            {
                "row": "H43",
                "value": "từ Tuần"
            },
            {
                "row": "J43",
                "value": "đến Tuần"
            },
            {
                "row": "H48",
                "value": "từ Tuần"
            },
            {
                "row": "J48",
                "value": "đến Tuần"
            },
            {
                "row": "H53",
                "value": "từ Tuần"
            },
            {
                "row": "J53",
                "value": "đến Tuần"
            },
            {
                "row": "H58",
                "value": "từ Tuần"
            },
            {
                "row": "J58",
                "value": "đến Tuần"
            },
            {
                "row": "H63",
                "value": "từ Tuần"
            },
            {
                "row": "J63",
                "value": "đến Tuần"
            },
            {
                "row": "H68",
                "value": "từ Tuần"
            },
            {
                "row": "J68",
                "value": "đến Tuần"
            },
            {
                "row": "A18",
                "value": "- Lựa chọn 1:"
            },
            {
                "row": "A19",
                "value": "- Lựa chọn 2:"
            },
            {
                "row": "A20",
                "value": "- Nếu lĩnh vực không nằm trong danh sách có sẵn, giáo viên hướng dẫn có thể đề xuất:"
            },
            {
                "row": "A44",
                "value": "Chi tiết:"
            },
            {
                "row": "A49",
                "value": "Chi tiết:"
            },
            {
                "row": "A54",
                "value": "Chi tiết:"
            },
            {
                "row": "A59",
                "value": "Chi tiết:"
            },
            {
                "row": "A64",
                "value": "Chi tiết:"
            },
            {
                "row": "A69",
                "value": "Chi tiết (Lưu ý: đây là nội dung bắt buộc với đồ án tốt nghiệp kỹ sư):"
            }
        ]
        return object;
    },
    Merge(){
        const object = [
            {
                "start": "A1",
                "end": "K1"
            },
            {
                "start": "A2",
                "end": "K2"
            },
            {
                "start": "A4",
                "end": "K4"
            },
            {
                "start": "A7",
                "end": "K7"
            },
            {
                "start": "A8",
                "end": "B8"
            },
            {
                "start": "A9",
                "end": "B9"
            },
            {
                "start": "A10",
                "end": "B10"
            },
            {
                "start": "A11",
                "end": "K11"
            },
            {
                "start": "A12",
                "end": "B12"
            },
            {
                "start": "A13",
                "end": "B13"
            },
            {
                "start": "A14",
                "end": "B14"
            },
            {
                "start": "A15",
                "end": "B15"
            },
            {
                "start": "A17",
                "end": "K17"
            },
            {
                "start": "A22",
                "end": "K22"
            },
            {
                "start": "A23",
                "end": "K23"
            },
            {
                "start": "A27",
                "end": "K27"
            },
            {
                "start": "A31",
                "end": "K31"
            },
            {
                "start": "A33",
                "end": "K33"
            },
            {
                "start": "A37",
                "end": "K37"
            },
            {
                "start": "A41",
                "end": "K41"
            },
            {
                "start": "A42",
                "end": "K42"
            },
            {
                "start": "A43",
                "end": "F43"
            },
            {
                "start": "A48",
                "end": "F48"
            },
            {
                "start": "A53",
                "end": "F53"
            },
            {
                "start": "A58",
                "end": "F58"
            },
            {
                "start": "A63",
                "end": "F63"
            },
            {
                "start": "A68",
                "end": "F68"
            },
            {
                "start": "A75",
                "end": "K75"
            },
            {
                "start": "A76",
                "end": "K76"
            },
            {
                "start": "C8",
                "end": "G8"
            },
            {
                "start": "C9",
                "end": "G9"
            },
            {
                "start": "C10",
                "end": "G10"
            },
            {
                "start": "I8",
                "end": "K8"
            },
            {
                "start": "I9",
                "end": "K9"
            },
            {
                "start": "C12",
                "end": "K12"
            },
            {
                "start": "C13",
                "end": "K13"
            },
            {
                "start": "C19",
                "end": "K19"
            },
            {
                "start": "C18",
                "end": "K18"
            },
            {
                "start": "D14",
                "end": "G14"
            },
            {
                "start": "I14",
                "end": "K14"
            },
            {
                "start": "A16",
                "end": "K16"
            },
            {
                "start": "A28",
                "end": "K30"
            },
            {
                "start": "A24",
                "end": "K26"
            },
            {
                "start": "A21",
                "end": "K21"
            },
            {
                "start": "A32",
                "end": "K32"
            },
            {
                "start": "A34",
                "end": "K36"
            },
            {
                "start": "A38",
                "end": "K40"
            },
            {
                "start": "A45",
                "end": "K47"
            },
            {
                "start": "A50",
                "end": "K52"
            },
            {
                "start": "A55",
                "end": "K57"
            },
            {
                "start": "A60",
                "end": "K62"
            },
            {
                "start": "A65",
                "end": "K67"
            },
            {
                "start": "A70",
                "end": "K71"
            },
            {
                "start": "A20",
                "end": "K20"
            },
            {
                "start": "A18",
                "end": "B18"
            },
            {
                "start": "A19",
                "end": "B19"
            },
            {
                "start": "A69",
                "end": "K69"
            }
        ]
        return object;
    },
    RowWrap(){
        const arr = ['A24', 'A28', 'A32', 'A34', 'A38', 'A45', 'A50', 'A55', 'A60', 'A65', 'A70'];
        return arr;
    },
    ColoringGreen(){
        const arr = ['C8', 'C9', 'C10', 'I8', 'I9', 'C12', 'C13', 'D14', 'I14', 'A16', 'A21', 'A24', 'A28', 'A32', 'A34', 'A38', 'A45', 'A50', 'A55', 'A60', 'A65', 'A70', 'F5'];
        return arr;
    },
    ColoringOrange(){
        const arr = ['C18', 'C19', 'I43', 'K43', 'I48', 'K48', 'I53', 'K53', 'I58', 'K58', 'I63', 'K63', 'I68', 'K68'];
        return arr;
    },
    RowHeader(){
        const arr = [1, 2, 4, 7, 11, 15, 17, 22, 41, 43, 48, 53, 58, 63, 68, 75, 85, 87, 92];
        return arr;
    },
    RowCenter(){
        const arr = ['A1', 'A2', 'A3', 'A4', 'E5', 'F5', 'D14', 'I14'];
        return arr;
    },
}
export default InputDataDivide;
