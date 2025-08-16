import React from 'react'

const Price = ({oldPrice, newPrice}) => {
    let oldStyles = {
        textDecorationLine:"line-through",
    }

    let newStyles = {
        fontWeight : "700",
    }

    let styles = {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        backgroundColor : "#e0c367",
        height:"40px",
        borderBottomLeftRadius:"15px",
        borderBottomRightRadius:"15px"


    }
  return (
    <div style={styles}>
      <span style={oldStyles}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      
      <span
        style={newStyles}
      >{newPrice}</span>

    </div>
  )
}

export default Price
