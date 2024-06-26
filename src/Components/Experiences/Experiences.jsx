import Title from '../../MiniComponents/Title/title';
import './Experiences.css';

function Experiences() {
  return (
    <div className="Experiences" id='Experiences'>
      <Title title={'Experience'}/>
      <div className="Experiences_Container">
        <div className="experience">
          <div className="date">
            <span> JUNE 2023 - JULY 2023</span>
          </div>
          <div className="experience_content">
            <h3>IO Academy</h3>
            <h2>WordPress Developer - Intern</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
