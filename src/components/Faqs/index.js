// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs=props=>{
    const{faqsList}=props
    console.log(faqsList)

    return(
        <div className="app-container">

            <div className="faqs-container">
                <h1 className="heading">FAQs</h1>
                <ul className="faqs-list">
                {faqsList.map(eachFaq => (
                    <FaqItem key={eachFaq.id} faqDetail={eachFaq} />
                ))}
                </ul>

            </div>
        </div>
        
    )
}

export default Faqs