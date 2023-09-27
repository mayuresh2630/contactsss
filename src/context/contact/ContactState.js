import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import conntactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name:'jill jonhson',
        email: 'jill@gmail.com',
        phone: '111-111-111211',
        type: 'personal'
      },
      {
        id: 1,
        name: 'edward frank',
        email: 'edwardfrank@gmail.com',
        phone: '111-111-110991',
        type: 'professional'
      },
      {
        id: 1,
        name:'adit chopra',
        email: 'aditchopra@gmail.com',
        phone: '111-111-1333111',
        type: 'personal'
      },
      {
        id: 1,
        name:'jonh hash',
        email: 'jonhhash@gmail.com',
        phone: '111-111-1211',
        type: 'professional'
      },
    ],
  };

  const [state, dispatch] = useReducer(conntactReducer, initialState);

  //addding cont

  //delete

  //set current

  //clear current

  //update

  //filter contacts

  // clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
