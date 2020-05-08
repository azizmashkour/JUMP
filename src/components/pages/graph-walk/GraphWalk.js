import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import Header from '../../layouts/Header';
import { calculateResult } from './utils/Utils';

const GraphWalk = (props) => {
  const [state, setState] = useState({
    value: '',
    userInput: '',
    result: '',
    error: 'Write something',
  });

  const handleChange =(event)=> {
    const { value } = event.target;
    setState({ value });
  }

  const handleSubmit =(event)=> {
    const { value } = state;
    const { input, result, error } = calculateResult(value);
    setState({ userInput: input, result, error });
    event.preventDefault();
  }

  return (
    <>
      <Header />
      <div className="table-container">
        <>
          <h1 className="text-center">{props.t('graph.graph_simulator')}</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-0">
              <input
                autoComplete="off"
                type="text"
                id="searchClient"
                value={state.value}
                placeholder={props.t('graph.add_numbers_to_check')}
                onChange={handleChange}
              />
            </div>
            {!state.error &&
              <p>
                <span>{props.t('graph.result_for_input')} '{state.userInput}' is {JSON.stringify(state.result)}</span>
              </p>
            }
            {state.error &&
              <p className="text-danger">
                {state.error}
              </p>
            }
          </form>
        </>
      </div>

    </>
  );
};

export default withTranslation()(GraphWalk);
