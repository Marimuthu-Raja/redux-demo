import React from 'react'
import {connect} from 'react-redux'


const mapStatetoProps = (state) =>{
  return {
    old:state.oldValue,
    new:state.newValue,
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return {
    addVal:()=>{
      dispatch({
        type:"ADDVAL",
        payload:5
      })
    },
    delVal:()=>{
      dispatch({
        type:"DELVAL",
        payload:''
      })
    }
  }
}

export function App(props){
  return (
    <div>
      Hello World {props.old}
      <button onClick={()=>props.addVal()}>Add Value</button>
    </div>
  )
}
export default connect(mapStatetoProps,mapDispatchtoProps)(App)
