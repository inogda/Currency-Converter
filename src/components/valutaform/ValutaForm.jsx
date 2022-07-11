import React, {useState} from 'react';
import { Form, InputNumber, Select, Space} from "antd";
import {useSelector} from "react-redux";


function ValutaForm(props) {

    const [valUAHLeft, setValUAHLeft] = useState('none')
    const [valUSDLeft, setValUSDLeft] = useState('');
    const [valEURLeft, setValEURLeft] = useState('');
    const [valUAHRight, setValUAHRight] = useState('')
    const [valUSDRight, setValUSDRight] = useState('none');
    const [valEURRight, setValEURRight] = useState('');


    // получаем курс валют из state
    const valuta = useSelector((state) => state.valuta.rateVal);
    const USD = valuta.find(element => { return element.r030 === 840; });
    const EUR = valuta.find(element => { return element.r030 === 978; });

    const [valFirst, setValFirst] = useState(100);
    const [valLast, setValLast]   = useState(USD.rate*100);

    const [valuta1, setValuta1] = useState('USD');
    const [valuta2, setValuta2] = useState('UAH');


    const onFirst = (value) => {
        setValFirst(value);
debugger;
        if(valuta2 === valuta1) { setValFirst(value);
        }else{
            if(valuta2 === "UAH"){ //Math.round(1.005*100)/100
                if(valuta1 === "USD")   { setValLast(Math.round((value*USD.rate)*100)/100); }
                if(valuta1 === "EUR")   { setValLast(Math.round((value*EUR.rate)*100)/100); }
            }
            if(valuta2 === "USD"){
                if(valuta1 === "UAH")   { setValLast(Math.round(((USD.rate/value)*100)*100)/100); }
                if(valuta1 === "EUR")   { setValLast(Math.round((value*(USD.rate/EUR.rate))*100)/100); }
            }
            if(valuta2 === "EUR"){
                if(valuta1 === "UAH")   { setValLast(Math.round((value/EUR.rate)*100)/100); }
                if(valuta1 === "USD")   { setValLast(Math.round((value*(USD.rate/EUR.rate))*100)/100); }
            }
        }
    };

    const onLast = (value) => {
        setValLast(value);
debugger;
        if(valuta1 === valuta2) { setValLast(value);
        }else{
            if(valuta1 === "UAH"){ //Math.round(1.005*100)/100
                if(valuta2 === "USD")   { setValFirst(Math.round((value*USD.rate)*100)/100); }
                if(valuta2 === "EUR")   { setValFirst(Math.round((value*EUR.rate)*100)/100); }
            }
            if(valuta1 === "USD"){
                if(valuta2 === "UAH")   { setValFirst(Math.round((value/USD.rate)*100)/100); }
                if(valuta2 === "EUR")   { setValFirst(Math.round((value*(EUR.rate/USD.rate))*100)/100); }
            }
            if(valuta1 === "EUR"){
                if(valuta2 === "UAH")   { setValFirst(Math.round(((EUR.rate/value)*100)*100)/100); }
                if(valuta2 === "USD")   { setValFirst(Math.round((value*(USD.rate/EUR.rate))*100)/100); }
            }
        }
        //console.log('changed', value);
        //console.log(`selected ${valluta}`);
        //debugger;
    };

    const selectChange1 = (value,option) => {
        setValuta1(value);

        if(value === "UAH") { setValUAHRight('none'); setValUSDRight(''); setValEURRight(''); }
        if(value === "USD") { setValUAHRight(''); setValUSDRight('none'); setValEURRight(''); }
        if(value === "EUR") { setValUAHRight(''); setValUSDRight(''); setValEURRight('none'); }

            debugger;
        if(value === valuta2) { setValFirst(valLast);
        }else{
            if(value === "UAH"){  //Math.round(1.005*100)/100
                if(valuta2 === "USD")   { setValLast(Math.round((valFirst/USD.rate)*100)/100); }
                if(valuta2 === "EUR")   { setValLast(Math.round((valFirst/EUR.rate)*100)/100); }
            }
            if(value === "USD"){
                if(valuta2 === "UAH")   { setValLast(Math.round((USD.rate*valFirst)*100)/100); }
                if(valuta2 === "EUR")   { setValLast(Math.round((valFirst*(USD.rate/EUR.rate))*100)/100); }
            }
            if(value === "EUR"){
                if(valuta2 === "UAH")   { setValLast(Math.round((EUR.rate*valFirst)*100)/100); }
                if(valuta2 === "USD")   { setValLast(Math.round((valFirst*(USD.rate/EUR.rate))*100)/100); }
            }
        }
    };


    const selectChange2 = (value) => {
        setValuta2(value)
debugger;
        if(value === "UAH") { setValUAHLeft('none'); setValUSDLeft(false); setValEURLeft(false); }
        if(value === "USD") { setValUAHLeft(''); setValUSDLeft('none'); setValEURLeft(''); }
        if(value === "EUR") { setValUAHLeft(''); setValUSDLeft(''); setValEURLeft('none'); }

        if(value === valuta1) { setValLast(valFirst);
        }else{
            if(value === "UAH"){    //Math.round(1.005*100)/100
                if(valuta1 === "USD")   { setValFirst(Math.round((valLast/USD.rate)*100)/100); }
                if(valuta1 === "EUR")   { setValFirst(Math.round((valLast/EUR.rate)*100)/100); }
            }
            if(value === "USD"){
                if(valuta1 === "UAH")   { setValFirst(Math.round((USD.rate*valLast)*100)/100); }
                if(valuta1 === "EUR")   { setValFirst(Math.round((valLast*(USD.rate/EUR.rate))*100)/100); }
            }
            if(value === "EUR"){
                if(valuta1 === "UAH")   { setValFirst(Math.round((EUR.rate*valLast)*100)/100); }
                if(valuta1 === "USD")   { setValFirst(Math.round((valLast*(EUR.rate/USD.rate))*100)/100); }
            }
        }
    };



    const selectAfter1 = (

        <Select
            defaultValue={valuta1}
            style={{
                width: 60,
            }}
            onChange={selectChange1}
        >
            <Select.Option key="UAH1" value="UAH" className={valUAHLeft} >₴</Select.Option>
            <Select.Option key="USD1" value="USD" className={valUSDLeft}>$</Select.Option>
            <Select.Option key="EUR1" value="EUR" className={valEURLeft}>€</Select.Option>
        </Select>

    );
    const selectAfter2 = (
        <Select
            defaultValue={valuta2}
            style={{
                width: 60,
            }}
            onChange={selectChange2}
        >
            <Select.Option key="UAH2" value="UAH" className={valUAHRight}>₴</Select.Option>
            <Select.Option key="USD2" value="USD" className={valUSDRight}>$</Select.Option>
            <Select.Option key="EUR2" value="EUR" className={valEURRight}>€</Select.Option>
        </Select>
    );


    return (
        <Form
            className="vform"
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}

            autoComplete="off"
        >
            <h1>Конвертор валют</h1>
            <Space>
                <div> </div>
                <InputNumber
                    className="form-input"
                    type="number"
                    addonAfter={selectAfter1}
                    value={valFirst}
                    onChange={onFirst}
                />
            </Space>

            <img src="/img/strelki.png" alt="image" />

            <Space>
                <div> </div>
                <InputNumber
                    className="form-input"
                    type="number"

                    addonAfter={selectAfter2}

                    value={valLast}
                    onChange={onLast}
                />
            </Space>


        </Form>
    );
};

export default ValutaForm;