/**
 * Created by Administrator on 2017/3/31.
 */

let compose = function (f, g) {
    return function (x) {
        return f(g(x));
    };
};

let _compose = (f, g) => x => f(g(x));

let head = function (x) {
    return x[0];
};

let _head = x => x[0];

let reverse = function (arr) {
    return arr.reduce(function (acc, x) {
        return [x].concat(acc);
    }, []);
};

let _reverse = arr => arr.reduce((acc, x) => [x].concat(acc), []);

let last = _compose(_head, _reverse);
let result = last(['jumpkick', 'roundhouse', 'uppercut']);

console.log(result);

import React, {Component} from 'react'

export default class CodeTest extends Component {

    render() {
        return (
            <div>
                test
            </div>
        )
    }

}