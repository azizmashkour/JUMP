import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

const ClientDetails = (props) => {

  return (
    <fieldset>
        <legend>{props.t('client_details.details')}</legend>
        <p>{props.t('client_details.address')}: <strong> {props.address} </strong></p>
    </fieldset>
  );
};

ClientDetails.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(ClientDetails);
