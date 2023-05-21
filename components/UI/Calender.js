import React, { useState } from 'react';

function Calendar() {
  const [date, setDate] = useState(new Date());
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePrevMonth = () => {
    setDate(prevDate => {
      const prevMonth = prevDate.getMonth() - 1;
      const newDate = new Date(prevDate.getFullYear(), prevMonth, 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setDate(prevDate => {
      const nextMonth = prevDate.getMonth() + 1;
      const newDate = new Date(prevDate.getFullYear(), nextMonth, 1);
      return newDate;
    });
  };

  const handlePrevYear = () => {
    setDate(prevDate => {
      const prevYear = prevDate.getFullYear() - 1;
      const newDate = new Date(prevYear, prevDate.getMonth(), 1);
      return newDate;
    });
  };

  const handleNextYear = () => {
    setDate(prevDate => {
      const nextYear = prevDate.getFullYear() + 1;
      const newDate = new Date(nextYear, prevDate.getMonth(), 1);
      return newDate;
    });
  };

  const toggleYearPicker = () => {
    setShowYearPicker(prevState => !prevState);
  };

  const handleYearChange = year => {
    setDate(prevDate => {
      const newDate = new Date(year, prevDate.getMonth(), 1);
      return newDate;
    });
    setShowYearPicker(false);
  };

  const handleDateClick = clickedDate => {
    setSelectedDate(clickedDate);
  };

  const renderCalendarHeader = () => {
    const options = { month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);

    return (
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2>
          <span className="header-month">{formattedDate}</span>
          <button onClick={toggleYearPicker} className="header-year">
            {date.getFullYear()}
          </button>
        </h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
    );
  };


  const renderYearPicker = () => {
    const startYear = date.getFullYear() - 10;
    const endYear = date.getFullYear() + 10;
  
    const years = Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index);
  
    return (
      <div className="year-picker">
        <button className="year-picker-nav" onClick={handlePrevYear}>
          &lt;
        </button>
        {years.map((year) => (
          <button
            key={year}
            className={`${
              year === date.getFullYear() ? 'selected bg-custom' : ''
            }`}
            onClick={() => handleYearChange(year)}
          >
            {year}
          </button>
        ))}
        <button className="year-picker-nav" onClick={handleNextYear}>
          &gt;
        </button>
      </div>
    );
  };
  
//   const renderYearPicker = () => {
//     const startYear = date.getFullYear() - 10;
//     const endYear = date.getFullYear() + 10;
  
//     const years = Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index);
  
//     return (
//       <div className="year-picker">
//         {years.map((year) => (
//           <button
//             key={year}
//             className={`${
//               year === date.getFullYear() ? 'selected bg-custom' : ''
//             }`}
//             onClick={() => handleYearChange(year)}
//           >
//             {year}
//           </button>
//         ))}
//       </div>
//     );
//   };
  

  const renderMonthPicker = () => {
    const months = Array.from({ length: 12 }, (_, index) => {
      const monthDate = new Date(date.getFullYear(), index, 1);
      const options = { month: 'long' };
      return monthDate.toLocaleDateString(undefined, options);
    });
  
    return (
      <div className="month-picker">
        {months.map((month, index) => (
          <button
            key={index}
            className={`${
              index === date.getMonth() ? 'selected bg-custom' : ''
            }`}
            onClick={() => handleMonthChange(index)}
          >
            {month}
          </button>
        ))}
      </div>
    );
  };
  

  const handleMonthChange = month => {
    setDate(prevDate => {
      const newDate = new Date(prevDate.getFullYear(), month, 1);
      return newDate;
    });
  };

  const renderCalendarDates = () => {
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    const emptyDays = Array.from({ length: firstDayIndex }, (_, index) => (
      <div key={`empty-${index}`} className="calendar-date empty"></div>
    ));

    const calendarDays = days.map(day => {
      const currentDate = new Date(date.getFullYear(), date.getMonth(), day);

      let classNames = 'calendar-date';
      if (currentDate.toDateString() === new Date().toDateString()) {
        classNames += ' today bg-custom';
      }
      if (currentDate.toDateString() === (selectedDate && selectedDate.toDateString())) {
        classNames += ' selected bg-custom11';
      }

      return (
        <div key={`day-${day}`} className={classNames} onClick={() => handleDateClick(currentDate)}>
          {day}
        </div>
      );
    });

    return [...emptyDays, ...calendarDays];
  };

  return (
    <div className="calendar">
      {renderCalendarHeader()}
      {showYearPicker ? renderYearPicker() : renderMonthPicker()}
      {renderCalendarDates()}
    </div>
  );
}

export default Calendar;
