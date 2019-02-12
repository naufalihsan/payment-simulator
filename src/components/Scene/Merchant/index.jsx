import React from "react";
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group'
import {withStyles} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Typed from 'react-typed';
import './styles.css';

import Progress from "../../../images/svg/Progress.svg";
import Progress1 from "../../../images/svg/Progress1.svg";
import Progress2 from "../../../images/svg/Progress2.svg";
import Progress3 from "../../../images/svg/Progress3.svg";
import Progress4 from "../../../images/svg/Progress4.svg";


import Seller from "../../../images/svg/Seller.svg";
import Seller1 from "../../../images/svg/Seller1.svg";
import Seller2 from "../../../images/svg/Seller2.svg";
import Seller3 from "../../../images/svg/Seller3.svg";
import Seller4 from "../../../images/svg/Seller4.svg";

import Table from "../../../images/svg/Table.svg";
import UI from "../../../images/svg/UI.svg";

import Leaves from "../../../images/svg/Leaves.svg";
import Leaves1 from "../../../images/svg/Leaves-1.svg";

import Girl from "../../../images/svg/Girl.svg";
import Girl1 from "../../../images/svg/Girl1.svg";

import Tooltips from "../../../images/svg/Tooltips.svg";
import Tooltips1 from "../../../images/svg/Tooltips.svg";

import Check from "../../../images/svg/Check.svg";
import Cross from "../../../images/svg/Cross.svg";

import Receipt from "../../../images/svg/Receipt.svg";
import BigReceipt from "../../../images/svg/BigReceipt.svg";

const styles = theme => ({
    title:{
        position: 'absolute',
        height: '28px',
        left: '2.92%',
        top: '10.78%',

        lineHeight: 'normal',
        fontSize: '28px',
        letterSpacing: '-0.21px',

        color: '#45545B',
    },
    girl: {
        position: 'absolute',
        left: '31.86%',
        right:'56.47%',
        top:'39.12%',
        bottom:'12.91%',
        zIndex:1,
    },
    girl1: {
        position: 'absolute',
        left: '31.86%',
        right: '49.99%',
        top: '39.12%',
        bottom: '12.91%',
        zIndex:1,
    },
    seller: {
        position: 'absolute',
        left: '10.56%',
        right: '10.52%',
        top: '34.67%',
        bottom: '12.01%',
    },
    table: {
        position: 'absolute',
        left: '44.44%',
        right: '37.99%',
        top: '64.67%',
        bottom: '36.91%',
        background: '#FFFFFF',
    },
    leaves: {
        position: 'absolute',
        left: '22.71%',
        right: '53.17%',
        top: '34.72%',
        bottom: '20.98%',
        zIndex: 0
    },
    leaves1: {
        position: 'absolute',
        left: '47.84%',
        right: '18.36%',
        top: '46.5%',
        bottom: '13.41%',
    },
    ui: {
        position: 'absolute',
        left: '62.22%',
        right: '21.18%',
        top: '43.07%',
        bottom: '32.13%'
    },
    progress:{
        position: 'absolute',
        left: '4.17%;',
        right: '3.33%;',
        top: '18.07%;',
        bottom: '76.66%',
    },
    tooltips:{
        position: 'absolute',
        left: '35.83%',
        right: '51.81%',
        top: '35.06%',
        bottom: '60.94%',
    },
    tooltips1:{
        position: 'absolute',
        left: '49.65%',
        right: '37.99%',
        top: '39.06%',
        bottom: '57.79%',
    },
    typing:{
        position: 'absolute',
        left: '35.83%',
        right: '51.81%',
        top: '36.06%',
        bottom: '60.94%',
        color:'#FFFFFF',
        fontSize: '12px',
    },
    typing1:{
        position: 'absolute',
        left: '49.65%',
        right: '37.99%',
        top: '40.06%',
        bottom: '57.79%',
        color:'#FFFFFF',
        fontSize: '12px',
    },
    check :{
        position: 'absolute',
        left: '38.22%',
        right: '61.05%',
        top: '35.5%',
        bottom: '62.61%',
    },
    cross :{
        position: 'absolute',
        left: '44.44%',
        right: '53.76%',
        top: '35.5%',
        bottom: '62.51%',
    },
    receipt : {
        position: 'absolute',
        left: '49.43%',
        right: '48.21%',
        top: '57.44%',
        bottom: '46.24%',
    },
    bigReceipt : {
        position: 'absolute',
        left: '40.9%',
        right: '40.83%',
        top: '39.65%',
        bottom: '19.34%',
    },
    nextButton : {
        position: 'absolute',
        left: '89.9%',
        top: '90.65%',
        minWidth: 75,
        backgroundColor : '#E95054',
        color : '#FFFFFF',
    },
    prevButton : {
        position: 'absolute',
        left: '83.9%',
        top: '90.65%',
        minWidth: 75,
        backgroundColor : '#FAFAFA',
        color : '#E95054',
    }
});

class Merchant extends React.Component {
    state = {
        step : 1,
    };

    handleChange = () => {
        if (this.state.step < 5) {
            this.setState(state => ({step: state.step + 1}));
        }else {
            this.setState(state => ({step: 1}));
        }
    };

    nextStep = () => {
        if (this.state.step < 5) {
            this.setState(state => ({step: state.step + 1}));
        }else {
            this.setState(state => ({step: 1}));
        }
    };

    prevStep = () => {
        if (this.state.step > 0) {
            this.setState(state => ({step: state.step - 1}));
        }else {
            this.setState(state => ({step: 1}));
        }
    };

    sceneStep1 = () => {
        const { classes  } = this.props;
        return(
            <CSSTransitionGroup
                transitionName="step1"
                transitionEnterTimeout={1000}>
                <div>
                    <img src={Progress} className={classes.progress} alt='progress' onClick={this.handleChange} />
                    <img src={Seller} className={classes.seller} alt='seller' />
                    <img src={Table} className={classes.table} alt='table' />
                    <img src={UI} className={classes.ui} alt='ui' />
                    <img src={Leaves} className={classes.leaves}  alt='leaves' />
                    <img src={Leaves1} className={classes.leaves1} alt='leaves1' />
                    <img src={Girl} className={classes.girl} alt='girl'/>
                </div>
            </CSSTransitionGroup>
        )
    };

    sceneStep2 = () => {
        const { classes } = this.props;
        return(
            <CSSTransitionGroup
                transitionName="step1"
                transitionEnterTimeout={1000}>
                <div wait={1000}>
                    <img src={Progress1} className={classes.progress} alt='progress1' onClick={this.handleChange} />
                    <img src={Seller1} className={classes.seller} alt='seller1' />
                    <img src={Table} className={classes.table} alt='table' />
                    <img src={UI} className={classes.ui} alt='ui' />
                    <img src={Leaves} className={classes.leaves}  alt='leaves' />
                    <img src={Leaves1} className={classes.leaves1} alt='leaves1' />
                    <img src={Girl1} className={[classes.girl1,'animated','slideInLeft'].join(' ')} alt='girl'/>
                    <img src={Tooltips} className={classes.tooltips} alt='tooltips' />
                    <Typed
                        strings={['0813827770000']}
                        typeSpeed={100}
                        className={classes.typing}
                    />
                </div>
            </CSSTransitionGroup>
        )
    };

    sceneStep3 = () => {
        const { classes } = this.props;
        return(
            <CSSTransitionGroup
                transitionName="step1"
                transitionEnterTimeout={1000}>
                <div wait={1000}>
                    <img src={Progress2} className={classes.progress} alt='progress2' onClick={this.handleChange} />
                    <img src={Seller2} className={classes.seller} alt='seller2' />
                    <img src={Table} className={classes.table} alt='table' />
                    <img src={UI} className={classes.ui} alt='ui' />
                    <img src={Leaves} className={classes.leaves}  alt='leaves' />
                    <img src={Leaves1} className={classes.leaves1} alt='leaves1' />
                    <img src={Girl1} className={[classes.girl1,'animated','slideInLeft'].join(' ')} alt='girl'/>
                    <img src={Tooltips} className={classes.tooltips} alt='tooltips' />
                    <img src={Check} className={classes.check} alt='check' />
                    <img src={Cross} className={classes.cross} alt='cross' />
                    <img src={Tooltips1} className={[classes.tooltips1,'animated','tada'].join(' ')} alt='tooltips1' />
                    <Typed
                        strings={['0813827770000 a/n ihsan']}
                        typeSpeed={100}
                        className={classes.typing1}
                    />
                </div>
            </CSSTransitionGroup>
        )
    };

    sceneStep4 = () => {
        const { classes } = this.props;
        return(
            <CSSTransitionGroup
                transitionName="step1"
                transitionEnterTimeout={1000}>
                <div wait={1000}>
                    <img src={Progress3} className={classes.progress} alt='progress3' onClick={this.handleChange} />
                    <img src={Seller3} className={classes.seller} alt='seller3' />
                    <img src={Table} className={classes.table} alt='table' />
                    <img src={UI} className={classes.ui} alt='ui' />
                    <img src={Leaves} className={classes.leaves}  alt='leaves' />
                    <img src={Leaves1} className={classes.leaves1} alt='leaves1' />
                    <img src={Girl1} className={[classes.girl1,'animated','slideInLeft'].join(' ')} alt='girl'/>
                    <img src={Tooltips} className={classes.tooltips} alt='tooltips' />
                    <img src={Receipt} className={classes.receipt} alt='receipt' />
                    <Typed
                        strings={['OK !']}
                        typeSpeed={100}
                        className={classes.typing}
                    />
                </div>
            </CSSTransitionGroup>
        )
    };

    sceneStep5 = () => {
        const { classes  } = this.props;
        return(
            <CSSTransitionGroup
                transitionName="step1"
                transitionEnterTimeout={1000}>
                <div>
                    <img src={Progress4} className={classes.progress} alt='progress4' onClick={this.handleChange} />
                    <img src={Seller4} className={classes.seller} alt='seller4' />
                    <img src={BigReceipt} className={[classes.bigReceipt,'animated','fadeInDown'].join(' ')} alt='bigReciept' />
                </div>
            </CSSTransitionGroup>
        )
    };

    render() {
        const { classes } = this.props;
        const { step } = this.state;
        let scene;

        switch(step) {
            case 1 :
                scene = this.sceneStep1();
                break;
            case 2:
                scene = this.sceneStep2();
                break;
            case 3:
                scene = this.sceneStep3();
                break;
            case 4:
                scene = this.sceneStep4();
                break;
            case 5:
                scene = this.sceneStep5();
                break;
            default:
                scene = this.sceneStep1();
                break;
        };

        return(
            <div>
                <Typography component="h3" variant="display3" className={classes.title}>
                    Pembayaran Via Alfamart
                </Typography>
                { scene }
                <Button variant="contained" className={[classes.button,classes.prevButton].join(' ')} onClick={this.prevStep}>
                    Prev
                </Button>
                <Button variant="contained" className={[classes.button,classes.nextButton].join(' ')} onClick={this.nextStep}>
                    Next
                </Button>
            </div>
        )
    }
}

Merchant.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Merchant);