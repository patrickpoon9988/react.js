import React, { Component } from 'react';
import { PATREC } from './PatRec';
import { KERREC } from './KerRec';
import { TIMREC } from './TimRec';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImgOverlay
  } from 'reactstrap';


class Main extends Component {
    constructor(props) {
        super(props);

        }
    

    render() {
        return (
            <div >
            <h4 className= "d-flex justify-content-center">Weekly Recommendation / 每週推介</h4>
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4" >
                     <Card>
                         <CardImg src= "assets/images/Maple0002new.jpg"  />
                         
                         <CardTitle>Title: Pro stock analyst</CardTitle>
                         <CardSubtitle>Name: Patrick Poon</CardSubtitle>
                         <CardText>description: Earn 8M+ USD</CardText>
                       
                     </Card>
                    </div>
                    <div className="col-12 col-md-4 ">
                     <Card>
                         <CardImg src= "assets/images/Maple0000.jpg" height= "300" />
                         <CardTitle>Title: All-in legend</CardTitle>
                         <CardSubtitle>Name: Kernel Sze</CardSubtitle>
                         <CardText>description: Sold his dad apartment and earned triple back</CardText>
                     </Card>
                    </div>
                    <div className="col-md-4 ">
                     <Card>
                         <CardImg src= "assets/images/Maple0001new.jpg" height='350' width='250' />
                         <CardTitle>Title: Graphical stock ghost</CardTitle>
                         <CardSubtitle>Name: Timothy Tse</CardSubtitle>
                         <CardText>description: He ordered Tesla to rise its stock price</CardText>
                     </Card>
                    </div>
                </div>
            </div>
            
            </div>
        );
    }
}

export default Main;
