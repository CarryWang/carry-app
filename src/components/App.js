import React, {Component} from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Title from './Title';
import Contact from './Contact'
import Photos from './Photos'
import SvgBox from './SvgBox'
// import img1 from '../images/wallhaven1.jpg'

let obj = {
    title: 'Cases',
    name: 'Some Example Design Patterns'
}
let obj2 = {
    title: 'Works',
    name: 'Some Works'
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
                        <a className="col-sm-6 card img1" href="https://carrywang.github.io/demo/3dCard/index.html">

                        </a>
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


