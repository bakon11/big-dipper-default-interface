import { gql } from '@apollo/client';

/**
 * Initial helper to get all existing validators and their address
 */
export const VALIDATORS_ADDRESS_LIST_RAW = `
  query Validators {
    validator {
      validator_info {
        self_delegate_address
        operator_address
      }
      validator_description {
        moniker
        identity
      }
    }
  }
`;