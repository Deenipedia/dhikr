'use strict';
/* **********************************************************

==================== START FUNCTIONALITY ====================
/////////////////////////////////////////////////////////////

1.) Needs to read my Google Calender to find available dates.
  • Automatically block dates within 48 hours from today.
  • For those blocked days, give the option to contact me.

2.) Show the available dates and times in a Calender-like frame, per month.
  • Dates should be clickable, after clicking, show the day in detail.
  • Show for every day the specific possible timeframes, on the hour 
    (So 14.00, 15.00, 16.00 etc.).

3.) Multiple events, including price and details.
  • Each event has a different timespan.
  • Option to include location.

4.) Write new events to my Google Calender.
  • Block 1,5 hour around the scheduled event for traveling.
  • Block the day and time from the available dates.

/////////////////////////////////////////////////////////////
===================== END FUNCTIONALITY =====================

********************************************************** */

/////////////////////////////////////////////////////////////
/* *********************** SETTINGS ********************** */
/////////////////////////////////////////////////////////////

// Predefining variables
let newTableCol,
  newTableItem,
  newSpan,
  inactiveDays,
  activeDays,
  newTableRow,
  today,
  year,
  month,
  day,
  weekday,
  monthName,
  firstDay,
  daysInMonth,
  date,
  eventsContainer,
  eventsTitle,
  eventsList,
  eventsItem,
  currentDay,
  eventItemLeft,
  eventName,
  eventDate,
  eventTag,
  dayNumber,
  selectedDay;

// Set the days of the week
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Set labels for the days of the week
const day_label = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Set the months
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Set the current date, year, month and day
today = new Date();
year = today.getFullYear();
month = today.getMonth();
day = today.getDay();
weekday = days[day];

// Get the number of days in that month
daysInMonth = function (month, year) {
  return 32 - new Date(year, month, 32).getDate();
};

/////////////////////////////////////////////////////////////
/* ********************** ADD TO DOM ********************* */
/////////////////////////////////////////////////////////////

function showCalendar(month, year) {
  // Get the starting day of the month
  firstDay = new Date(year, month).getDay();

  monthName = months[month];

  // Get the DOM elements for table header, body and title
  const th = document.getElementsByClassName('calendar-table__header')[0];
  const tb = document.getElementsByClassName('calendar-table__body')[0];
  const calenderTitle = document.getElementsByClassName('calendar-container__title')[0];

  // Setting current monthname in the calendar title
  calenderTitle.textContent = ' ';
  th.innerHTML = ' ';
  tb.innerHTML = ' ';
  calenderTitle.textContent = `${monthName} ${year}`;

  // Create a new table row inside table header
  const newTableRowDOTW = document.createElement('div');
  newTableRowDOTW.classList.add('calendar-table__row');
  th.appendChild(newTableRowDOTW);

  // Print the dayslabels of the week to the calendar
  for (let i = 0; i < day_label.length; i++) {
    const newTableCol = document.createElement('div');
    newTableCol.classList.add('calendar-table__col');
    newTableRowDOTW.appendChild(newTableCol);
    newTableCol.textContent = day_label[i];
  }

  // Print the actual days of the month to the calendar
  date = 1;
  for (let i = 0; i < 6; i++) {
    // Create a new table row inside table body
    newTableRow = document.createElement('div');
    newTableRow.classList.add('calendar-table__row');

    // Create individual cells, filling them with data
    for (let j = 0; j < 7; j++) {
      // IF firstday of the month is less than current day, skip the day
      if (i === 0 && j < firstDay) {
        // Creating new table col
        newTableCol = document.createElement('div');
        newTableCol.classList.add('calendar-table__col');
        newTableCol.classList.add('calendar-table__inactive');
        newTableRow.appendChild(newTableCol);

        // Creating new table item
        newTableItem = document.createElement('div');
        newTableItem.classList.add('calendar-table__item');
        newTableCol.appendChild(newTableItem);

        // Adding values to newly created items
        newSpan = document.createElement('span');
        newTableItem.appendChild(newSpan);
        inactiveDays = document.createTextNode('');
        newSpan.appendChild(inactiveDays);
      }

      // IF date is bigger than amount of days in month set days inactive
      else if (date > daysInMonth(month, year)) {
        // Creating new table col
        newTableCol = document.createElement('div');
        newTableCol.classList.add('calendar-table__col');
        newTableCol.classList.add('calendar-table__inactive');
        newTableRow.appendChild(newTableCol);

        // Creating new table item
        newTableItem = document.createElement('div');
        newTableItem.classList.add('calendar-table__item');
        newTableCol.appendChild(newTableItem);

        // Adding values to newly created items
        newSpan = document.createElement('span');
        newTableItem.appendChild(newSpan);
        inactiveDays = document.createTextNode('');
        newSpan.appendChild(inactiveDays);
      }

      // IF date is excisting in the month, fill the date in the calendar
      else {
        // Creating new table col
        newTableCol = document.createElement('div');
        newTableCol.classList.add('calendar-table__col');
        newTableCol.classList.add(date);
        newTableRow.appendChild(newTableCol);

        // Creating new table item
        newTableItem = document.createElement('div');
        newTableItem.classList.add('calendar-table__item');
        newTableItem.setAttribute('id', `${date}`);
        newTableCol.appendChild(newTableItem);

        // Adding values to newly created items
        newSpan = document.createElement('span');
        newTableItem.appendChild(newSpan);
        activeDays = document.createTextNode(date);
        newSpan.appendChild(activeDays);

        // IF the day is TODAY, fill the value differently
        if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
          newTableCol.classList.add('calendar-table__today');
        }

        // IF date is before TODAY, set the days inactive.
        if (date < today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
          newTableCol.classList.add('calendar-table__inactive');
        }

        // IF month is before CURRENT month but has the same year, set days inactive
        else if (month < today.getMonth() && year === today.getFullYear()) {
          newTableCol.classList.add('calendar-table__inactive');
        }

        // IF year is before CURRENT year, set days inactive
        else if (year < today.getFullYear()) {
          newTableCol.classList.add('calendar-table__inactive');
        }
        // Add events to the days
        date++;
      }
    }
    tb.appendChild(newTableRow);
  }
  createEventsPerDay(year, month, monthName);
}

// Set the next month
function nextMonth() {
  if (month < 11) {
    month++;
    showCalendar(month, year);
  } else {
    month = 0;
    year++;
    showCalendar(month, year);
  }
}

function previousMonth() {
  if (month > 0) {
    month--;
    showCalendar(month, year);
  } else {
    month = 11;
    year--;
    showCalendar(month, year);
  }
}

window.onload = showCalendar(month, year);

const next = document.getElementsByClassName('calendar-container__btn--right')[0];
const prev = document.getElementsByClassName('calendar-container__btn--left')[0];
eventsContainer = document.getElementsByClassName('events-container')[0];
next.addEventListener('click', nextMonth);
prev.addEventListener('click', previousMonth);

//eventsContainer.style.display = "none";
// Function to show available times for date
function showTimeSlot(date, time, d) {
  // Set the title above the timeslots area
  eventsTitle = document.createElement('span');
  eventsTitle.classList.add('events__title');
  eventsContainer.appendChild(eventsTitle);
  eventsTitle.textContent = 'Beschikbare tijden';
  newTableCol = document.getElementsByClassName(`calendar-table__col ${d}`)[0];
  newTableCol.classList.add('calendar-table__event');

  // Create eventslist
  eventsList = document.createElement('ul');
  eventsList.classList.add('events__list');
  eventsContainer.appendChild(eventsList);

  // Create eventsitem
  eventsItem = document.createElement('li');
  eventsItem.classList.add('events__item');
  eventsList.appendChild(eventsItem);

  // Create eventitemleft
  eventItemLeft = document.createElement('div');
  eventItemLeft.classList.add('events__item--left');
  eventsItem.appendChild(eventItemLeft);
  // Create eventName
  eventName = document.createElement('span');
  eventName.classList.add('events__name');
  eventItemLeft.appendChild(eventName);
  eventName.textContent = date;
  // Create eventDate
  eventDate = document.createElement('span');
  eventDate.classList.add('events__date');
  eventItemLeft.appendChild(eventDate);
  eventDate.textContent = time;
}

// Create an eventListener for every day.
function createEventsPerDay(y, m, mn) {
  let dim = daysInMonth(y, m);
  for (let d = 1; d < dim; d++) {
    dayNumber = document.getElementById(`${d}`);
    dayNumber.addEventListener(
      'click',
      function () {
        setCurrentDay(d, mn, y);
      },
      false
    );
  }
}

// SET currentDay
function setCurrentDay(d, mn, y) {
  if (selectedDay > 0) {
    let select = document.getElementsByClassName(`calendar-table__col ${selectedDay}`)[0];
    select.classList.remove('calendar-table__event');
    eventsContainer.innerHTML = ' ';
  }
  selectedDay = d;
  showTimeSlot(`${d} ${mn} ${y}`, '15:00', d);
}
