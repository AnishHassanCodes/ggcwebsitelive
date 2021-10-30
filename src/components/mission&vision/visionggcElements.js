import styled from "styled-components"


export const MVisionContainer = styled.div`
min-height : 100vh;
padding : 5rem calc((100vw - 1300px) / 2);
background: rgb(31,1,1);
background: linear-gradient(90deg, rgba(31,1,1,1) 0%, rgba(213,72,37,1) 0%, rgba(255,218,0,1) 81%);
padding : 9rem calc((100vw - 1500px) / 2);

@media  screen and (max-width : 970px){
    min-height : 70vh;
}


`

export const MVisionImg = styled.img`
max-width: 100%;
height: auto;
position : relative;
border-radius : 10px;
transition: transform .2s;
transition : 0.4s cubic-bezier(0.075,0.82,0.165,1);


`;  

export const MVisionRow = styled.div`
display : flex;
flex-wrap : wrap;

`
export const MVisionColumnS = styled.div`
 width : 50%;
 padding : 0 10px;
 display : flex;
 flex-wrap : wrap;
 
@media  screen and (max-width : 970px){
    width : 100%;   
    text-align: center;
        display: block;
}

`