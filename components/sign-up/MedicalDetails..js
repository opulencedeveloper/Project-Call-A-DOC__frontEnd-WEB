import DetailsButton from '../UI/DetailsButton';
import styles from './SignUpStyles.module.css';

const pageContent = [
    "Diaherra",
    "COPD",
    "Heart disease",
    "Arthritis",
    "Heart failue",
    "Stroke",
    "High blood presure",
    "Cancer",
    "Arthrithis",
    "Heart Failure",

]


const MedicalDetails = (props) => {

  const medicalButtonHandler = () => {
    console.log('click')
    props.medicalNextStep("4");
  }
  return (
    <form className="mr-auto 2xl:-mr-48">
      <p className="text-xl mb-12 font-medium text-ash2">Medical details (if any)</p>
      <div className="flex flex-col flex-wrap h-auto xl:h-72 ">
      {pageContent.map((content, index) => (
        <div key={index} className=" flex space-x-2 pb-7">
        <input
          type="checkbox"
          id="tickBox"
          className={styles.checkbox}
        />
        <label for="tickBox" className='pt-0.5'>{content}</label>
        
      </div>
      ))}
       <div className="flex space-x-2 pb-7">
       <input
          type="checkbox"
          id="tickBox"
          className={styles.checkbox}
        />
        <label for="tickBox">Others<span className='text-xs font-medium'>(Please specify)</span></label></div>
        </div>
        <p className="text-xl mb-5 font-medium text-ash2">Allergies (if any)</p>
<input type='text' className='border border-ash rounded-md w-full h-32 mb-14'/>
<DetailsButton onClickHandler={medicalButtonHandler} />
    </form>
  );
};

export default MedicalDetails;
