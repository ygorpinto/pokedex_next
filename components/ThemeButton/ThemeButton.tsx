import { ContainerStyles } from "../Container/ContainerStyles"

interface PropsButton {
    func:()=>void;
}

export const ThemeButton = (props:PropsButton) => {
    return (
      <ContainerStyles>
        <div className="switch">
          <button
          onClick={props.func}>
            <img src="/half-moon.png"/>
          </button>
        </div>
        </ContainerStyles>
    )
}