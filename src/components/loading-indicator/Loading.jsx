import React from 'react';
import{BarsLoading, Bar} from'./styled-indicator-components';


const VerticalBarsLoading = ({loading = false}) => {
  return (
    <BarsLoading loading ={loading}  >
        <Bar/><Bar/><Bar/>
    </BarsLoading>
  )
}

export default VerticalBarsLoading