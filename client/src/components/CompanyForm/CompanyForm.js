/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Autocomplete,
  Box, Button,
  Grid,
  TextField, Typography,
} from '@mui/material';

function CompanyForm({
  companiesList,
  sitesList,
  sitesSelection,
  handleCancel,
  handleSubmit,
}, ref) {
  const theme = useTheme();
  const addType = sitesSelection.length ? 'site' : 'company';
  console.log('addType', addType);
  console.log('sitesSelection', sitesSelection);
  const companyId = sitesSelection.length !== 0
    ? sitesSelection[0].company.company_id
    : null;
  const selectedCompany = companyId !== null
    ? companiesList.filter((company) => company.id === companyId)[0]
    : companiesList[0];
  console.log('selectedCompany', selectedCompany);
  const [company, setCompany] = React.useState(selectedCompany);
  const [sitesFromCompany, setSitesFromCompany] = React.useState(
    sitesSelection.length
      ? sitesSelection
      : sitesList.filter((site) => site.company.company_id === company.id),
  );
  const [site, setSite] = React.useState(sitesFromCompany.length
    ? sitesFromCompany[0]
    : { id: undefined });

  const handleCancelForm = () => {
    handleCancel();
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    handleSubmit({
      id: company.id,
      name: company.name,
      sites: [{
        id: site.id,
        name: site.name,
        assignments: [],
      }],
    });
  };

  React.useEffect(() => {
    setSitesFromCompany(sitesList.filter((item) => item.company.company_id === company.id));
  }, [company]);

  React.useEffect(() => {
    setSite(sitesFromCompany[0]);
  }, [sitesFromCompany]);

  return (
    <Box
      component="form"
      ref={ref}
      sx={{
        bgcolor: theme.palette.background.component,
      }}
      onSubmit={handleSubmitForm}
      tabIndex="-1"
    >
      <Box
        sx={{
          padding: {
            sx: theme.spacing(1),
            md: theme.spacing(2),
          },
        }}
      >
        <Typography variant="h3" sx={{ textAlign: 'center', mb: theme.spacing(3) }}>
          {`Ajouter ${addType === 'company' ? 'une compagnie' : 'un site'}`}
        </Typography>

        <Grid
          container
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12}>
            <Autocomplete
              value={company}
              getOptionLabel={(option) => `${option.name}`}
              onChange={(_event, newValue) => {
                setCompany(newValue);
              }}
              disabled={companyId !== null}
              options={companiesList}
              sx={{ width: '100%' }}
              renderInput={(params) => (
                <TextField {...params} label="Compagnie" required />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              value={site}
              getOptionLabel={(option) => `${option.name}`}
              onChange={(_event, newValue) => {
                setSite(newValue);
              }}
              options={sitesFromCompany}
              sx={{ width: '100%' }}
              renderInput={(params) => (
                <TextField {...params} label="Site" required />
              )}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          borderTop: 1,
          borderTopColor: theme.palette.divider,
          textAlign: 'center',
          padding: {
            sx: theme.spacing(1),
            md: theme.spacing(2),
          },
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            textAlign: 'right',
            justifyContent: 'flex-end',
          }}
        >
          <Grid item>
            <Button
              variant="outlined"
              onClick={handleCancelForm}
              sx={{
                mr: theme.spacing(1),
              }}
            >
              Annuler
            </Button>
          </Grid>
          {' '}
          <Grid item>
            <Button
              type="submit"
              variant="contained"
            >
              Valider
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default React.memo(React.forwardRef(CompanyForm));
