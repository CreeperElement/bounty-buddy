import React from 'react';
import VisceraImage from '../images/Viscera.png';
import './ProjectCard.css';

export default class ProjectCard extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="card">
                <div className="border tint">
                    <img
                        src={VisceraImage}>
                    </img>
                </div>
            </div>
        );
    }
}