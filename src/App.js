import { useReducer } from 'react';
import { ContainerWrapper } from './components/ContainerWrapper';
import Options from './components/Home/Options';
import OptionContext from './helpers/OptionContext';
import { optionReducer } from './helpers/OptionReducer';
import GameStart from './components/Play/GameStart';
import About from './components/About/About'

function App() {
  const [optionState, optionDispatch] = useReducer(optionReducer, null)
  const providerState = {
    optionState,
    optionDispatch
  }

  return (
    <OptionContext.Provider value={providerState}>
      <ContainerWrapper>
        {!optionState &&
          <Options />
        }
        {optionState === 1 &&
          <GameStart />
        }
        {optionState === 2 &&
          <About />
        }
      </ContainerWrapper>
    </OptionContext.Provider>
  );
}

export default App;
