import React from 'react';
import BattleButtonStyles from './BattleButtonStyles'

const BattleButton = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <BattleButtonStyles>
            <a href={href} onClick={onClick} ref={ref}>
            <button><img src="1732452.png"/></button>
            </a>
        </BattleButtonStyles>
      </a>
    )
  })

export default BattleButton;