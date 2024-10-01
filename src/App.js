import './App.css';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { format, formatDistance, isBefore, isEqual } from 'date-fns';

function App() {

  const today = new Date();
  function dateChange(date) {
    const distance = formatDistance(date,today)
    console.log(distance)
    const formatedDate = format(date, "d/M/y");
    console.log(formatedDate)

  }
  function disabledDate(date) {
    return isBefore(date, today) || isEqual(date,today);
  }
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker orientation="landscape"
          onChange={dateChange}
          value={today}
          shouldDisableDate={disabledDate} />
      </LocalizationProvider>
    </div>
  );
}

export default App;
