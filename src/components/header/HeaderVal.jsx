import React, { useState} from 'react';
import "./HeaderVal.css"
import {useSelector} from "react-redux";
import {Menu} from "antd";
import {Header} from "antd/es/layout/layout";

function HeaderVal(props) {

    const { inicial } = props;

    // получаем курс валют из state
    const valuta = useSelector((state) => state.valuta.rateVal);

    const USD = valuta.find(element => { return element.r030 === 840; });
    const EUR = valuta.find(element => { return element.r030 === 978; });

//debugger;

    return (


        <Header theme="light" className="headermy">
            <div className="logo" >
                <img src="img/logo-ih.png" alt="logotip"/>
            </div>

            <div className="header__valuta">
                Курс валют на поточну дату - {USD.txt} {USD.cc}: <b>{USD.rate}</b>, {EUR.txt} {EUR.cc}: <b>{EUR.rate}</b>
            </div>
            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={new Array(4).fill(null).map((_, index) => {
                    const key = index + 1;
                    return {
                        key,
                        label: `nav ${key}`,
                    };
                })}
            />


        </Header>





    );
}

export default HeaderVal;