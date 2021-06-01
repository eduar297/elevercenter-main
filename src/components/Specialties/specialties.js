import React, {useState} from 'react';
import { Link } from "react-router-dom";

import './specialties.css'

import Category_List from './category-list.js';
import Specialty_List from './specialty-list.js';
import Info from './info.js';

export default function Specialties() {
    const [step, setStep] = useState(0)
    const [specialty, setSpecialty] = useState("")

    const content = {
        0: <Category_List setStep={setStep} setSpecialty={setSpecialty}/>,
        1: <Specialty_List setStep={setStep} specialty={specialty}/>,
        2: <Info setStep={setStep}/>,
    }

    return (
        <>
        {content[step]}
        </>
    );
}