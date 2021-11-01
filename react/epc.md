# hoocs

use objects in state if there is multiple like

[state, setState] = useState({
status:"idel",
error:null,
data:null
})

if(error){
setState({error:error, status:"rejected"})
}


# Error boundary 

is for catching error 

class ErrorBoundary extends React.Component{
    state = {error:null}
    static getDerivedStateFormError(error){
        return{error}
    }
    retnder(){
        const {error} = this.state
        if(error){
            return(
                <!-- or component <this.props.FallBackCompoent error={error}> -->
                <div>
            There is error {error.message}
            </div>
            )
        }
        this.props.children
    }
}
and where the error is happining throw error 
think about were to put the error boundry

const [pokemonName, setPokemoneName] = useState('')

<ErrorBoundary> 
<components....>
</ErrorBoundary>

to reset the state of the error boundry use key 

const [pokemonName, setPokemoneName] = useState('')

<ErrorBoundary key={pokemonName}>  add key prop based on state 
<components....>
</ErrorBoundary>

there is an error boundary library react-error-boundary
import {ErrorBoundary} from "react-error-boundary"

function ErorrFallback({error, reserErrorBoundary}){
    return(
        <div>
        <p> {error.message}  </p>
        <button onClick={reserErrorBoundary}>try again </button>
        </div>
    )
}
const handleReset=()=>{
setPokemonName('')
}
<ErrorBoundary resetKeys={pokemonName} onReset={handleReset} FallbackComponent={ErrorFallback}> 

# useCallback

const updateLocalStorage = React.useCallback(
  () => window.localStorage.setItem('count', count),
  [count], // <-- yup! That's a dependency list!
)
React.useEffect(() => {
  updateLocalStorage()
}, [updateLocalStorage])
