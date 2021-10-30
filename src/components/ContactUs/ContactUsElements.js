import styled from "styled-components"

export const Container = styled.div`
position: relative;
justify-content : center;
align-items: center;
min-height : 100vh; 
background: #eebb99;
box-sizing : border-box;
display : flex;
&:before {
    content: "";
    position : absolute;
    top: 0;
    left : 0;
    width : 50%;
    height : 100%;
    background: #fff;
  }
`

export const ContactUsContainer = styled.div`
min-width : 1100px;
min-height : 590px;
display : flex;
position : relative;
@media  screen and (max-width : 1300px){
    min-width : 900px;
    min-height : 500px;
}
@media  screen and (max-width : 1070px){
    min-width : 800px;
    min-height : 440px;
}
@media  screen and (max-width : 790px){
    min-width : 700px;
    min-height : 340px;
    flex-direction : column;
}
@media  screen and (max-width : 750px){
    min-width : 600px;
    min-height : 320px;
    flex-direction : column;
}
`

export const ContactUsInfo = styled.div`
position: absolute;
top : 40px;
width : 350px;
height : calc(100% - 80px);
background: #eebb99;
z-index: 1;
padding : 40px;
display : flex;
flex-direction : column;
justify-content : space-between;
box-shadow : 0 20px 20px  rgba(0,0,0,0.2); 
@media  screen and (max-width : 1300px){
    width : 300px;
    height : calc(100% - 120px);
}
@media  screen and (max-width : 1070px){
    width : 250px;
    height : calc(100% - 150px);
    top : 25px;
    
}
@media  screen and (max-width : 790px){
    width : 450px;
    position : relative;
    left : 170px;
    z-index: 0;
}
@media  screen and (max-width : 640px){
    
    position : relative;
    left : 70px;
    z-index: 0;
}
@media  screen and (max-width : 480px){
    width : 350px;
    position : relative;
    z-index: 0;
    right : 1px;
}
@media  screen and (max-width : 380px){
    width : 300px;
}
@media  screen and (max-width : 380px){
    width : 300px;
    padding : 66px;
}
@media  screen and (max-width : 350px){
    width : 280px;
    padding : 89px;
}
`

export const ContactUsdiv = styled.div`


`
export const ContactUsH2 = styled.h2`
font-family : 'Poppins';
color: #000;
font-size: 24px;
font-weight : 500;
@media  screen and (max-width : 1300px){
    font-size: 20px;
}
@media  screen and (max-width : 1070px){
    font-size: 16px;
}
@media  screen and (max-width : 790px){
    font-size: 18px;

}
@media  screen and (max-width : 350px){
    font-size: 14px;
}
`
export const ContactInfoList = styled.ul`
position: relative;
margin : 20px 0;
@media  screen and (max-width : 1070px){
    margin : 15px 0;
}
@media  screen and (max-width : 790px){
    margin : 5px 0;

}
@media  screen and (max-width : 350px){
    margin : 3px 0;
}

`

export const ContactInfoItem = styled.li`
positon : relative;
list-style : none;
display : flex;
margin : 30px  0;
cursor : pointer;
align-items: flex-start;
opacity : 0.5;
&:hover{
    opacity : 1;
}
@media  screen and (max-width : 1070px){
    margin : 20px  0;
}
@media  screen and (max-width : 790px){
    margin : 15px 0;

}
@media  screen and (max-width : 350px){
    margin : 3px 0;
}
`
export const ContactUsSpan = styled.span`
font-family : 'Poppins';
color :  #ec268f;;
@media  screen and (max-width : 1300px){
    font-size: 12px;
}
@media  screen and (max-width : 1070px){
    font-size: 9px;
}
@media  screen and (max-width : 790px){
    font-size: 12px;
}
@media  screen and (max-width : 350px){
    font-size: 8px;
}
}
`
export const ContactUSImg = styled.img`
max-width : 30px;
@media  screen and (max-width : 1300px){
    max-width : 25px;
}
@media  screen and (max-width : 1070px){
    max-width : 21px;
}
@media  screen and (max-width : 790px){
    max-width : 25px;
}
`

export const ContactInfoListS = styled.ul`
position:  relative;
display  :flex;

`

export const ContactInfoItemA = styled.a`
list-style : none;
margin-right : 15px;
text-decoration  :none;
opacity : 0.5;
color : #000;
&:hover{
    opacity : 1;
    transform: scale(1.4);
}
@media  screen and (max-width : 1300px){
    margin-right : 11px;
}
@media  screen and (max-width : 1070px){
    margin-right : 8px;
}

`
export const ContacForm = styled.div`
position : absolute;
padding : 70px 50px;
background : #fff;
margin-left : 150px;
padding-left : 250px;
width : calc(100% - 150px);
height : 100%;
box-shadow : 0 50px 50px  rgba(0,0,0,0.5); 
@media  screen and (max-width : 1070px){
    padding : 40px 20px;
    margin-left : 120px;
    padding-left : 150px;
}
@media  screen and (max-width : 790px){
    padding : 14px 12px;
    position : relative;
    left:  -45px;
    display : flex;
    flex-wrap : wrap;
}
@media  screen and (max-width : 480px){
    width : 390px;
    position : relative;
    z-index: 0;
    left:  1px;
}
@media  screen and (max-width : 440px){
    width : 350px;
    position : relative;
    z-index: 0;
    left:  1px;
}
@media  screen and (max-width : 380px){
    width : 300px;
    left:  1px;
    display : flex;
    flex-wrap : wrap;
    position : relative;
}
@media  screen and (max-width : 350px){
    width : 300px;
    left:  2px;
    display : flex;
    padding : 34px;
    flex-wrap : wrap;
    position : relative;
    
}
`
export const ContactUsH21 = styled.h2`
font-family : 'Poppins';
font-size: 24px;
color : #000;
font-weight : 500;
text-transform: uppercase;

}
@media  screen and (max-width : 1300px){
    font-size: 20px;
}
@media  screen and (max-width : 1070px){
    font-size: 16px;
}
@media  screen and (max-width : 790px){
    font-size: 25px;
    

}
`

export const FormBox = styled.div`
position  :relative;
display  : flex;
justify-content : space-between;
flex-wrap : wrap;
padding-top : 30px;
@media  screen and (max-width : 1070px){
    padding-top : 20px;
}
@media  screen and (max-width : 790px){
    padding-top : 12px;
    
}
`

export const InputBox = styled.div`
width : 47%;
position :  relative;
margin : 0 0 35px 0;
display: flex;
flex-direction: column;
@media  screen and (max-width : 1070px){
    width : 47%;
}
@media  screen and (max-width : 790px){
    width : 43%;
    margin : 0 0 18px 0;
}
@media  screen and (max-width : 480px){
    width : 93%;
    margin : 0 0 18px 0;
}
@media  screen and (max-width : 440px){
    width : 93%;
    margin : 0 0 18px 0;
}

`
export const ContactUsSpan2 = styled.span`
font-family : 'Poppins';
position : absolute;
left : 0;
padding: 5px 0;
font-size : 18px;
font-weight : 300;
color : #333;
transition : 0.5s;
pointer-events : none;
@media  screen and (max-width : 1300px){
    font-size: 12px;
}
@media  screen and (max-width : 1070px){
    font-size: 9px;
}
@media  screen and (max-width : 790px){
    font-size : 14px;
}



`

export const Input = styled.input`
width : 100%;
padding : 5px 0;
margin-right : 2px;
font-family : 'Poppins';
font-size : 18px;
font-weight : 300;
color : #333;
border : none;
resize : none;
border-bottom : 1px solid #777;
outline : none;
&:focus ~ ${ContactUsSpan2} {
   
   transform : translateY(-20px);
   font-size : 12px;
   font-weight : 400;
   letter-spacing: 1px;
   color : #ff568c;
   }
&:valid ~ ${ContactUsSpan2} {  
    transform : translateY(-20px);
   font-size : 12px;
   font-weight : 400;
   letter-spacing: 1px;
   color : #ff568c;
   }
}
`
export const InputBoxBig = styled.div`
width: 100%;
position :  relative;
margin : 0 0 35px 0;
display: flex;
flex-direction: column;

 

`

export const TextArea = styled.textarea`
width : 100%;
padding : 5px 0;
margin-right : 2px;
font-family : 'Poppins';
font-size : 18px;
font-weight : 300;
color : #333;
border : none;
resize : none;
border-bottom : 1px solid #777;
outline : none;
min-height : 120px;
&:focus ~ ${ContactUsSpan2} {
   
    transform : translateY(-20px);
   font-size : 12px;
   font-weight : 400;
   letter-spacing: 1px;
   color : #ff568c;
   
   }
   &:valid ~ ${ContactUsSpan2} {
    transform : translateY(-20px);
   font-size : 12px;
   font-weight : 400;
   letter-spacing: 1px;
   color : #ff568c;
   
  
  }
`

export const Input2 = styled.input.attrs({
    type: 'submit',
  value: 'Submit'
})`
postion : relative;
cursor : pointer;
background: #0f3959;
color : #fff;
border : none;
max-width : 150px;
padding : 12px;
&:hover{
    background : #ff568c;
}

@media  screen and (max-width : 1070px){
    max-width : 100px;
    padding : 8px;
}

`