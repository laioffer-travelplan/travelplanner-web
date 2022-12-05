import React, {Component} from 'react';

class SatelliteList extends Component {
    render() {
        return (
            <div className="point-list-box">
                <div className="btn-container">
                    <button
                        className="save-btn"
                    >save</button>
                </div>
                <hr/>
                <div>Route</div>
                <div> <SavePlan /> </div>
            </div>
        );
    }
}

export default SatelliteList;
