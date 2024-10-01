import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { format, formatDistance, isBefore, isEqual } from 'date-fns';

function App() {
  const newTheme = createTheme({
    components: {
      MuiDateCalendar: {
        styleOverrides: {
          root: {
            color: '#1565c0',
            borderRadius: '18px',
            borderWidth: '1px',
            borderColor: '#2196f3',
            border: '1px solid',
            backgroundColor: '#90caf9',
          }
        }
      }
    }
  })

  const today = new Date();
  function dateChange(date) {
    const distance = formatDistance(date, today)
    console.log(distance)
    const formatedDate = format(date, "d/M/y");
    console.log(formatedDate,"New")

  }
  function disabledDate(date) {
    return isBefore(date, today) || isEqual(date, today);
  }

  return (
    <div className="App">
      <ThemeProvider theme={newTheme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker orientation="landscape"
            onChange={dateChange}
            value={today}
            shouldDisableDate={disabledDate} />
        </LocalizationProvider>
      </ThemeProvider>

    </div>
  );
}

export default App;
