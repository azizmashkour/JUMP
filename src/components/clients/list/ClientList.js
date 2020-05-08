import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import FakeClients from '../../../data/FakeClients';
import ClientDetails from '../details/ClientDetails';
import '../ClientStyles.css';

const ClientList = (props) => {
  const [state, setState] = useState({
    address: null,
    activeClientId: null,
    newData: [],
    noResult: false,
  });

  const hasMount = useRef(false);

  useEffect(() => {
    if (!hasMount.current) {
      // componentDidMount
      setState({newData: FakeClients})
    } else {
      // componentDidUpdate
    }
    return () => {
      // componentWillUnmount
    };
  }, []);

  const handleCheckaddress =(address, clientId)=> {
    setState({
      newData: FakeClients,
      address: address,
      activeClientId: clientId,
    });
  }

  // Search typed keywords from user first and last name,
  // then update the initial clients list state and,
  // display error message when there is no client found with the search query
  const handleSearch =(e)=> {
    const typedWords = e.target.value;
    if (typedWords.trim() !== "") {
      const stateRes =  FakeClients
                          .filter((option) =>
                            option.prenom.toLowerCase().includes((typedWords).toLowerCase()) ||
                            option.nom.toLowerCase().includes((typedWords).toLowerCase()))
                              .map(filteredPerson => (filteredPerson));

      stateRes.length > 0 ? setState({newData: stateRes, noResult: false}) : setState({newData: [], noResult: true});
    } else {
      setState({newData: FakeClients});
    }
  }

  return (
    <div className="table-container">
      <>
        <h1 className="text-center">{props.t('client_list.clients_list')}</h1>
        <form>
          <div className="form-control mb-0">
            <input
              autoComplete="off"
              type="text"
              id="searchClient"
              placeholder={props.t('client_list.search_client')}
              onChange={(e)=>handleSearch(e)}
            />
          </div>
        </form>

        {state.noResult && <div className="text-danger">{props.t('client_list.no_client_found')}</div>}

        <div className="table-responsive">
          <table className="table table-striped table-bordered table-light">
            <thead>
              <tr>
                <th></th>
                <th>{props.t('client_list.last_name')}</th>
                <th>{props.t('client_list.first_name')}</th>
              </tr>
            </thead>
            <tbody>
              {
                state.newData && state.newData.map((client, index) => {
                  return (
                    <tr key={index} className={client.id === state.activeClientId ? "active_client" : ""}
                      onClick={() => handleCheckaddress(client.address, client.id)}>
                      <td className="text-center">
                        <label htmlFor={client.id}>
                          <input className="client-check" id={client.id} type="radio" name="id"
                            checked={client.id === state.activeClientId} readOnly/>
                        </label>
                      </td>
                      <td>{client.prenom}</td>
                      <td>{client.nom}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </>
      {state.address != null && <ClientDetails address={state.address}/>}
    </div>
  );
};

ClientList.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(ClientList);
