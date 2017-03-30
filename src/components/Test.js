/**
 * Created by Carry Wang on 2017/3/22.
 */
import React, {Component} from 'react'
import Parallax from 'react-springy-parallax'
import stars from '../images/stars.svg'

export default class Test extends Component {
    render() {
        const styles = {
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            fontSize: 14,
            lineHeight: '10px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor:'rgba(0,0,0,.5)'
        };

        return (
            <Parallax ref="parallax" pages={3}>

                <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#243B4A' }} />
                <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#ff6291' }} />
                <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
                <Parallax.Layer style={{ backgroundImage: `url(${stars})`,backgroundSize:'cover',height:'inherit'}} />

                <Parallax.Layer
                    offset={0}
                    speed={0.5}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(1)}>
                    Click!
                </Parallax.Layer>

                <Parallax.Layer
                    offset={1}
                    speed={-0.1}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(2)}>
                    Another page ...
                </Parallax.Layer>

                <Parallax.Layer
                    offset={2}
                    speed={0.5}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(0)}>
                    The end.
                </Parallax.Layer>

            </Parallax>
        )
    }
}