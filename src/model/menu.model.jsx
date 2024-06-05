import SummarizeIcon from '@mui/icons-material/Summarize';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ArticleIcon from '@mui/icons-material/Article';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
const MenuModel = {
    menu(){
        const object = [
            {
                text: 'Phiếu giao nhiệm vụ ĐATN',
                icon: <SummarizeIcon />,
                link: '/divide'
            },
            {
                text: 'Phiếu đánh giá ĐATN',
                icon: <ArticleIcon />,
                link: '/evaluate'
            },
            {
                text: 'Phiếu phản biện ĐATN',
                icon: <InboxIcon />,
                link: '/debate'
            },
            {
                text: 'Danh sách sinh viên',
                icon: <FormatListBulletedIcon />,
                link: '/student'
            },
            {
                text: 'Generate File',
                icon: <AutoAwesomeMotionIcon />,
                link: '/genFile'
            },
            {
                text: 'Upload File',
                icon: <AddIcon />,
                link: '/upload'
            },
        ]
        return object;
    }
};

export default MenuModel;