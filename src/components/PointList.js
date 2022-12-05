import React, {Component} from 'react';

class SatelliteList extends Component {
    render() {
        return (
            <div className="point-list-box">
                <div className="btn-container">
                    <button
                        className="save-btn"
                    > <SavePlan /> </button>
                </div>
                <hr/>
                <div>Route</div>
              
            </div>
        );
    }
}

export default SatelliteList;
