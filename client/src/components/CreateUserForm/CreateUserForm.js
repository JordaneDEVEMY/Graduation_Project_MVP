/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Box,
} from '@mui/material';
import TextFieldRequiredForm from '../FieldForms/TextFieldRequiredForm/TextFieldRequiredForm';
import EmailFieldForm from '../FieldForms/EmailFieldForm/EmailFieldForm';
import PasswordFieldForm from '../FieldForms/PasswordFieldForm/PasswordFieldForm';
import NumberFieldForm from '../FieldForms/NumberFieldForm/NumberFieldForm';
import DateFieldForm from '../FieldForms/DateFieldForm/DateFieldForm';
import TextFieldForm from '../FieldForms/TextFieldForm/TextFieldForm';

function CreateUserForm() {
  <Box>
    Nom de famille :
    <TextFieldRequiredForm />

    Prénom :
    <TextFieldRequiredForm />

    Email :
    <EmailFieldForm />

    Mot de pass :
    <PasswordFieldForm />

    Numéro de sécurité sociale :
    <NumberFieldForm />

    Date de naissance :
    <DateFieldForm />

    Adresse postale :
    <TextFieldRequiredForm />

    Code Postale :
    <NumberFieldForm />

    Date d'arrivée dans l'entreprise :
    <DateFieldForm />

    Avatar :
    <TextFieldForm />

    Poste occupé :
    <TextFieldRequiredForm />

    Employee Qualification Id (?) :
    <NumberFieldForm />
  </Box>;
}

export default React.memo(CreateUserForm);
