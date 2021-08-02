import * as React from 'react';
import './ProjectCard.css';
import Viscera from "../images/Viscera.png"

interface IProjectCardProps {
    onClick(): void;
}

class ProjectCard extends React.Component<IProjectCardProps> {
    constructor(props: IProjectCardProps) {
        super(props);
    }

    render() {
        const {onClick} = this.props;
        return (
            <div className="card" onClick={onClick}>
                <div className="border tint">
                    <img
                        src={Viscera}>
                    </img>
                </div>
            </div>
        );
    }
}

export default ProjectCard;