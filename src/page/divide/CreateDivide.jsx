/* eslint-disable no-unused-vars */
import Footer from '../footer/Footer'
import Header from '../header/Header'
import FormDivide from './FormDivide';
import './divide.css'
import React, { useEffect, useState } from "react";
import ApiService from '../../service/service';
export default function CreateDivide() {
    const [teacher, setTeacher] = useState();
    useEffect(() => {
        ApiService.getTeacherByAccount(localStorage.getItem('accountId'))
            .then(res => {
                setTeacher(res.body);
            })
    }, [])
    const exportExcelFile = (myData) => {
        if (teacher) {
            console.log(myData);
        }

    }
    return (
        <>
            <Header />
            <FormDivide handleExportExcelFile={exportExcelFile} />
            <Footer />
        </>
    )
}