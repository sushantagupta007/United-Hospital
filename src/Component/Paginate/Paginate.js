import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';



function Paginate({ data, RenderComponent, dataLimit }) {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    //page parameter here comes from setCurrentPage.
    //What we write inside useState, is got by setCurrentPage Method
    console.log("Data Length",data.length)
    function goToNextPage() {    
        if(currentPage>=data.length){
            console.log("less than 1")
        }
        else(
            setCurrentPage((page) => {
                console.log(page)
                return page + 1
            })
        )
        
    }
    
    console.log("Current Pge",currentPage)
    function goToPreviousPage() {
        if(currentPage===1){
            console.log("less than 1")
        }
        else(
            setCurrentPage((page) => {
            
                console.log(page)
                return page - 1
            })
        )
        
        
    }
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
      };
        console.log(pages)
        
      
   
    return (
    <>{getPaginatedData().map(data=><RenderComponent key={data.id} data={data}></RenderComponent>)}
        <div className="d-flex justify-content-between">
            <button onClick={goToPreviousPage} style={{backgroundColor:"#BFD2F8"}}className="btn rounded-pill"> 
                <FontAwesomeIcon className="primaryTextColor fs-7 me-1" icon={faArrowLeft}></FontAwesomeIcon>
                <span className="primaryTextColor"> Previous Article </span> 
                
            </button>
            <button onClick={goToNextPage}style={{backgroundColor:"#BFD2F8"}}className="btn rounded-pill"> 
                <span className="primaryTextColor me-1">Next Article </span> 
                <FontAwesomeIcon className="primaryTextColor fs-7" icon={faArrowRight}></FontAwesomeIcon>
            </button>
        </div>
    </>    
        
    )          
}
    
    export default Paginate

    //Source: https://academind.com/tutorials/reactjs-pagination