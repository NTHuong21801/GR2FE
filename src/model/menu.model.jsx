import SummarizeIcon from '@mui/icons-material/Summarize';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/MoveToInbox';
const MenuModel = {
    menu(){
        const object = [
            {
                text: 'Phiếu đánh giá ĐATN',
                icon: <AddIcon />,
                link: '/evaluate'
            },
            {
                text: 'Phiếu giao nhiệm vụ ĐATN',
                icon: <SummarizeIcon />,
                link: '/divide'
            },
            {
                text: 'Phiếu phản biện ĐATN',
                icon: <InboxIcon />,
                link: '/debate'
            },
            {
                text: 'Danh sách sinh viên',
                icon: <InboxIcon />,
                link: '/student'
            },
            {
                text: 'Generate File',
                icon: <InboxIcon />,
                link: '/genFile'
            },
            {
                text: 'Upload File',
                icon: <InboxIcon />,
                link: '/upload'
            },
        ]
        return object;
    }
};

export default MenuModel;