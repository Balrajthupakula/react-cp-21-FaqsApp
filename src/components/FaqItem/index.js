// Write your code here.


import {Component} from  'react'
import './index.css'

const plusImgUrl="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
const minusImgUrl="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png "

 class FaqItem extends Component{
  state={
    isActive:false
  }
  renderAnswer=()=>{
    const{faqDetail}=this.props 
    const{answerText}=faqDetail
    const {isActive}=this.state

    if(isActive){
        return(
            <div>
                <hr className="hr-line"/>
                <p className="answer-text">{answerText}</p>
            </div>
        )   
    }
    return null
  }

  onToggleIsActive=()=>{
    
    this.setState(prevState=>({
        isActive:!prevState.isActive
    }))
  }
    renderActiveImage=()=>{
        const{isActive}=this.state
        const image=isActive?minusImgUrl:plusImgUrl
        const labelText=isActive?"minus":"plus"

        return(

            <button type="button" onClick={this.onToggleIsActive} className="button">
                <img src={image} alt={labelText} className="name" />
            </button>
        )

    }


    render(){
        const {faqDetail}=this.props 
        const {questionText}=faqDetail
        return(
            <li className="faq-container">
                <div className="question-container">
                    <h1>{questionText}</h1>
                    {this.renderActiveImage()}
                </div>
                {this.renderAnswer()}
            </li>
        )
    }
}

export default FaqItem