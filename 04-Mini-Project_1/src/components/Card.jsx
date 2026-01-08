// for icons
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
   
      <div className="job-card">
        <div className="job-card-header">
          <div className="company-logo">
            <img  src={props.logo} alt="Airbnb" />
          </div>

          <button className="save-btn">
            <span>Save</span>
            {/* using icon */}
           <Bookmark size={18} strokeWidth={1.2} absoluteStrokeWidth />
          </button>
        </div>

        <div className="job-card-body">
          <div className="company">
            <p className="company-name">{props.company}</p>
            <span className="posted-time">{props.posted}</span>
          </div>
          <h3 className="job-title">{props.title}</h3>

          <div className="job-tags">
            {/* map function for an type becoz it is an array */}
            {props.type.map(function(e ,idx){
                return <span key={idx} className="tag">{e}</span>
            })
            }
          </div>
        </div>

        <div className="job-card-footer">
          <div className="salary-info">
            <h4 className="salary">{props.salary}</h4>
            <p className="location">{props.location}</p>
          </div>

          <button className="apply-btn">Apply now</button>
        </div>
      </div>
  
  );
};

export default Card;
