import { Outlet } from "react-router-dom";
import Header from '../assets/components/Header'
import Footer from "../assets/components/Footer";

export default function DefaultLayout() {

    return (


        <>
            <Header />
            <Outlet />
            <Footer />

        </>


    );
}