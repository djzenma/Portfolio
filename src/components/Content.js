import React from "react"
import "./Styles.css"
import MediaItem from "./MediaItem"
import aucImg from '../resources/AUC Library.jpg'
import topfferImg from '../resources/Topffer.jpg'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const education = [
    {'title': 'Bachelor of Science in Computer Engineering, the American University in Cairo (AUC), Egypt (2020).',
        'GPA': 'GPA: 3.513',
        'alt': 'AUC',
        'src': aucImg
    },
    {'title': 'Baccalauréat français, scientific, specialty: Mathematics, Lycée Privé Rodolphe Töpffer, Geneva, Switzerland (2016).',
        'GPA': 'Average: 14 / 20',
        'alt': 'Topffer',
        'src': topfferImg
    }
];

const work = [
    {'title': 'Software Engineer at the American University in Cairo’s Library (October/2018-present).',
        'desc' : 'Developing an Android and Web App correcting dirty OCR outputs. This app is contributing to the AUC’s project of Digitizing 3000 Arabic books.'
    },
    {'title': 'Teaching Assistant in the American University in Cairo (September/2018-December/2018).',
        'desc': 'Helped students doing their experiments in the Computer Engineering course Digital Logic Design lab.'
    }
];

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {education: true};
    }

    render() {
        const {tabs} = this.props;
        const {background} = this.props;

        const edu = education.map((ed) => {
            return (
                <MediaItem key={ed.alt} imgAlt={ed.alt} imgSrc={ed.src} heading={ed.title} extra={ed.GPA}/>
            );
        });

        const workExp = work.map((exp, index) => {
            return (
                <div key={index} className="p-4">
                    <div className="row">
                        <div>
                            <FontAwesomeIcon className="text-dark"
                                              icon={['fas', 'certificate']} size="lg" style={{height: 2 + "rem"}}/>
                        </div>
                        <div className="col-10">
                            <p className="h4"><span className="compColor">{exp.title}</span></p>
                        </div>
                    </div>
                    <p className="lead"><span className="compColor">{exp.desc}</span></p>
                </div>
            );
        });

        let body;
        if(this.props.section === "Education") {
            body = edu;
        }
        else {
            body = workExp;
        }

        return (
           <div className={background + " p-5"}>
               <div className="container">
                   {/*<div className="card bg-transparent">*/}
                       <div className="card-body">
                           <div className="card" id={tabs[0]}>
                               <div className="card-header">
                                   <h3 className="h3"><span className="compColor">Education</span></h3>
                               </div>
                               <div className="card-body">
                                   {edu}
                               </div>
                           </div> {/* Education Card */}
                           <div className="card mt-5" id={tabs[1]}>
                               <div className="card-header">
                                   <h3 className="h3"><span className="compColor">Work Experience</span></h3>
                               </div>
                               <div className="card-body">
                                   {workExp}
                               </div>
                           </div>  {/* Work Experience Card */}
                       </div>  {/* Content Card Body */}
                   {/*</div> /!* Whole Content Card *!/*/}
               </div> {/* Content Container */}
           </div>
        );
    }
}

export default Content;