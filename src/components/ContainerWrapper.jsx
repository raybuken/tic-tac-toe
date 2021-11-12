
import '../App.css'

export const ContainerWrapper = ({children}) => (
    <div className="App">
      <div className="App-container">
        {children}
      </div>
    </div>
)