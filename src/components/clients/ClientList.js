import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import FakeClients from '../../data/FakeClients';
import ClientDetails from './ClientDetails';
import './ClientStyles.css';

const ClientList = (props) => {
  const [state, setState] = useState({ address: null, ctiveClientId: null });

  const handleCheckaddress =(e, clientId)=> {
      setState({
        address: e.target.value,
        ctiveClientId: clientId,
      });
  }

  return (
    <div className="table-container">
      <>
        <h1 className="text-center">{props.t('client_list.clients_list')}</h1>
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
                FakeClients.map((client, index) => {
                  return (
                    <tr key={index} className={client.id === state.ctiveClientId ? "active_client" : ""}>
                      <td className="text-center">
                        <label htmlFor={client.id}>
                          <input className="client-check" id={client.id} type="radio" name="id" value={client.address} onClick={(e) =>handleCheckaddress(e, client.id)}/>
                        </label>
                      </td>
                      <td>{client.nom}</td>
                      <td>{client.prenom}</td>
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
