import React, {Component} from 'react';

class CounterItem extends Component{
    render(){
        let {col, CText, pdescription,icon} = this.props;
        return(
            <div className={`col-md-3 col-sm-6 ${col}`}>
                 <div className="counter_item text-center wow fadeInUp" data-wow-delay="0.1s">
                    <i className={`icon-${icon}`}></i>
                    <h3 className="t_color" data-countup>{CText}</h3>
                    <p>{pdescription}</p>
                </div>
            </div>
        )
    }
}
export default CounterItem;