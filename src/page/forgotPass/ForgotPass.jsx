import { useState } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ApiService from '../../service/service';
import Noti from '../component/Noti';
import Loading from '../component/Loading';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';
export default function ForgotPass() {
    const [showErr, setShowErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [noti, setNoti] = useState(false);
    const [loading, setLoading] = useState(false);
    const handCloseNoti = () => {
        setNoti(false)
    }
    const handleChange = (e) => {
        setEmail(e.target.value);
    }
    const handleSend = async () => {
        if (email) {
            setLoading(true);
            const res = await ApiService.forgotPass(email);
            if (res.responseMessage == 'user.not.found') {
                setErrorMessage("Email của bạn không đúng!");
                setShowErr(true);
                setLoading(false);
            } else {
                setShowErr(false);
                setLoading(false);
                setNoti(true);
                setEmail("");
            }
        } else {
            setErrorMessage("Bạn cần nhập email!");
            setShowErr(true);
        }
    }
    return (
        <>
            {loading && <Loading />}
            {noti && <Noti onCloseNoti={handCloseNoti} mess={"Mật khẩu mới đã được gửi về email của bạn!"} />}
            <Container maxWidth="sm">
                <div className='forgotPassDiv'>
                    <Link to="/">
                        <div className='btn-login'><KeyboardBackspaceIcon />Quay lại trang đăng nhập</div>
                    </Link>
                    <Typography variant="h4" align="center" gutterBottom>
                        Enter your email
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="email"
                                label="Enter your email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => handleChange(e)}
                            />
                        </Grid>
                    </Grid>
                    {showErr &&
                        <>
                            <br />
                            <span className="errorMessage">{errorMessage}</span>
                        </>}
                    <br />
                    <div className='btn' onClick={handleSend}>Send to get new pass <SendIcon /> </div>
                </div>
            </Container>
        </>
    )
}