import React from 'react';

const Rainbow = (WrappedComponent) => {
  const generateRandomColor = () => {
    const characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
    let color = '#';
    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * 16);
      color += characters[randomIndex];
    }
    return color;
  }

  return props => {
    return (
      <div style={{color: generateRandomColor()}}>
        <WrappedComponent {...props} />
      </div>
    );
  }
}

export default Rainbow;