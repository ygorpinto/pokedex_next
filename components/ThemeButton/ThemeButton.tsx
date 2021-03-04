interface PropsButton {
    func:()=>void;
}

export const ThemeButton = (props:PropsButton) => {
    return (
        <div className="switch">
          <button
          onClick={props.func}>
            <img src="/half-moon.png"/>
          </button>
        </div>
    )
}