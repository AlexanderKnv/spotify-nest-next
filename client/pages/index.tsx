import React from 'react';
// import {Button} from "@material-ui/core";
import Navbar from "../components/Navbar";
// import MainLayout from "../layouts/MainLayout";

const Index = () => {
    return (
        <>
            {/* <MainLayout> */}
                <Navbar/>
                <div className="center">
                    <h1>Welcome!</h1>
                    <h3>Here are the best tracks!</h3>
                </div>
            {/* </MainLayout> */}

            <style jsx>
                {`
                    .center {
                        margin-top: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                `}
            </style>
        </>
    );
};

export default Index;
