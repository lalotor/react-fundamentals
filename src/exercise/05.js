// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

//*** Normal ***/
// const smallBox = (
//   <div
//     className="box box--small"
//     style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
//   >
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div
//     className="box box--medium"
//     style={{backgroundColor: 'pink', fontStyle: 'italic'}}
//   >
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div
//     className="box box--large"
//     style={{backgroundColor: 'orange', fontStyle: 'italic'}}
//   >
//     large orange box
//   </div>
// )

function App() {
  return (
    //*** Normal ***/
    // <div>
    //   {smallBox}
    //   {mediumBox}
    //   {largeBox}
    // </div>
    //*** Extra Credit 1 ***/
    // <div>
    //   <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
    //     small lightblue box
    //   </Box>
    //   <Box className="box--medium" style={{backgroundColor: 'pink'}}>
    //     medium pink box
    //   </Box>
    //   <Box className="box--large" style={{backgroundColor: 'orange'}}>
    //     large orange box
    //   </Box>
    //   <Box>sizeless box</Box>
    // </div>
    /*** Extra Credit 2 ***/
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

// *** Extra Credit 1 ***
// function Box({style, className, ...additionalProps}) {
//   const defaultProps = {
//     className: `box ${className}`,
//     style: {fontStyle: 'italic', ...style},
//   }
//   return <div {...defaultProps} {...additionalProps} />
// }

// *** Extra Credit 2 ***
function Box({style, size, ...additionalProps}) {
  const sizeClass = size ? `box--${size}` : ''
  const defaultProps = {
    className: `box ${sizeClass}`,
    style: {fontStyle: 'italic', ...style},
  }
  return <div {...defaultProps} {...additionalProps} />
}

export default App
