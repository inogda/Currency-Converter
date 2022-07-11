import React from "react";
import HeaderVal from "../components/header/HeaderVal";
import useAxiosGet from "../hook/useAxiosGet";
import Layout, {Content, Footer} from "antd/es/layout/layout";
import {Spin} from "antd";
import ValutaForm from "../components/valutaform/ValutaForm";



function Home() {

    // получаем курс валют
    //const { currentLoader, currentUSD, currentEUR, } = OnValuta();

    const { data, error, loaded } = useAxiosGet("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");

    // получаем пользователя из state
    //const valuta = useSelector((state) => state.valuta.rateVal);
    //console.log(valuta);

//debugger;

    // получаем пользователя из state
    //const { token, id} = useSelector(state => state.user);

    if (!loaded) return (
        <Layout className="layout">
            <Spin />
        </Layout>
    )

    if (error) return (
        <Layout className="layout">
            error
        </Layout>
    )

    return (
        <Layout className="layout">

            <HeaderVal />

            <Content>
                <ValutaForm/>
            </Content>
            <Footer className="footer">Footer</Footer>
        </Layout>
    );
}

export default Home;