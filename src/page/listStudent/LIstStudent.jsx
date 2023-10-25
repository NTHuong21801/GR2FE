import Footer from "../footer/Footer";
import Header from "../header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ListStudent(){
    return(
        <>
            <Header />
            <div className="main">
                <div className="container">
                    <div className="search">
                        <input type="text" placeholder="Tìm kiếm theo tên hoặc MSSV" />
                        <img src="assets/icon/search.png" alt="" />
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>MSSV</th>
                                        <th>Họ và tên</th>
                                        <th>Lớp</th>
                                        <th>Khoa - Viện</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>20194775</td>
                                        <td>Nguyễn Thu Hương</td>
                                        <td>ICT03 - K64</td>
                                        <td>Công nghệ thông tin Global ICT</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>20194775</td>
                                        <td>Nguyễn Thu Hương</td>
                                        <td>ICT03 - K64</td>
                                        <td>Công nghệ thông tin Global ICT</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>20194775</td>
                                        <td>Nguyễn Thu Hương</td>
                                        <td>ICT03 - K64</td>
                                        <td>Công nghệ thông tin Global ICT</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>20194775</td>
                                        <td>Nguyễn Thu Hương</td>
                                        <td>ICT03 - K64</td>
                                        <td>Công nghệ thông tin Global ICT</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>20194775</td>
                                        <td>Nguyễn Thu Hương</td>
                                        <td>ICT03 - K64</td>
                                        <td>Công nghệ thông tin Global ICT</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>20194775</td>
                                        <td>Nguyễn Thu Hương</td>
                                        <td>ICT03 - K64</td>
                                        <td>Công nghệ thông tin Global ICT</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>20194775</td>
                                        <td>Nguyễn Thu Hương</td>
                                        <td>ICT03 - K64</td>
                                        <td>Công nghệ thông tin Global ICT</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>20194775</td>
                                        <td>Nguyễn Thu Hương</td>
                                        <td>ICT03 - K64</td>
                                        <td>Công nghệ thông tin Global ICT</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}