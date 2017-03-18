import React, {Component} from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Title from './Title';
import Contact from './Contact'
import Photos from './Photos'
import SvgBox from './SvgBox'
// import img1 from '../images/wallhaven1.jpg'

let obj = {
    title: 'fggrgrrr',
    name: 'fefe'
}
let obj2 = {
    title: 'fefegergr',
    name: 'grgrgr'
}


class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Banner/>
                <Title {...obj}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 card img1" >

                        </div>
                        <div className="col-sm-6 card img2">

                        </div>
                        <div className="col-sm-6 card img3">

                        </div>
                        <div className="col-sm-6 card img4">

                        </div>

                    </div>
                </div>
                <SvgBox/>
                <Title {...obj2}/>
                <Photos/>
                <Contact/>
            </div>
        );
    }
}

export default App;


