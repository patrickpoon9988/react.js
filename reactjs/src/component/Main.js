import React, { useEffect, useState } from 'react'; // this is required if use class
import { PATREC } from './PatRec';
import { KERREC } from './KerRec';
import { TIMREC } from './TimRec';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImgOverlay
} from 'reactstrap';

const Main = () => {
    let [content, setContent] = useState("");

    useEffect(()=>{
        content = fetch("http://localhost:5000/").then(response => response.text()).then(data => setContent(data))
        console.log(content)
    });

    return (
        <div >
            <h4 className="d-flex justify-content-center">Weekly Recommendation / 每週推介</h4>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 border" >
                        <p>try border</p>
                        <p>{content}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Main;
