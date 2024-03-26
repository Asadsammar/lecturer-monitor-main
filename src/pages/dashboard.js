// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'


// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'
import AccountCircle from 'mdi-material-ui/AccountCircle'


// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'


const LecturerCard = ({ title, description, status }) => {
  return (
    <Card>
      <CardContent
        sx={{
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
        }}
      >
        <Avatar
          sx={{ width: 50, height: 50, marginBottom: 2.25, color: 'common.white', backgroundColor: 'primary.main' }}
        >
          <AccountCircle sx={{ fontSize: '2rem' }} />
        </Avatar>
        <Typography variant='h6' sx={{ marginBottom: 2.75 }}>
          {title}
        </Typography>

        <Chip label={status} color="primary" />
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={4}>
          <LecturerCard
            title="Lecturer Name"
            description="Lecturer Name"
            status="On break"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <LecturerCard
            title="Lecturer Name"
            description="Lecturer Name"
            status="Lecturer Room"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <LecturerCard
            title="Lecturer Name"
            description="Lecturer Name"
            status="On break"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <LecturerCard
            title="Lecturer Name"
            description="Lecturer Name"
            status="Lecturer Room"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <LecturerCard
            title="Lecturer Name"
            description="Lecturer Name"
            status="In class"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <LecturerCard
            title="Lecturer Name"
            description="Lecturer Name"
            status="In class"
          />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  );
};

export default Dashboard
