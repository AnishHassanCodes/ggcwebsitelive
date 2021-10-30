import React from 'react'
import Tilt from 'react-tilt'
import mission from '../../images/Mission.png'
import vision from '../../images/Vision.png'
import {MVisionContainer,MVisionRow,MVisionColumnS,MVisionImg } from './visionggcElements'
function Visionggc() {
    return (
        <>
          <MVisionContainer id="vision">
            <MVisionRow>
              
              <MVisionColumnS>
                <Tilt >
                  <MVisionImg src={mission} alt="img"/>
                </Tilt> 
              </MVisionColumnS>
              <MVisionColumnS>
                <Tilt >
                  <MVisionImg src={vision} alt="img"/>
                </Tilt> 
              </MVisionColumnS>
                          
            </MVisionRow>
          </MVisionContainer>
        </>
    )
}

export default Visionggc
