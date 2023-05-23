import React, { useState } from "react";
import classNames from "classnames";
import Image from "next/image";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const appointmentTime = [
    "8:00 am",
    "9:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 pm",
    "1:00 pm",
    "2:00 pm",
  ];

  const handleDateClick = (date, index) => {
    if (date.getMonth() < currentMonth.getMonth()) {
      setCurrentMonth(new Date(date.getFullYear(), date.getMonth(), 1));
    } else {
      setSelectedDate(date);
    }

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString(undefined, options);

    console.log(`Selected Date: ${formattedDate}`);
  };

  const handleMonthChange = (event) => {
    const selectedMonth = parseInt(event.target.value);
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        selectedMonth,
        currentMonth.getDate()
      )
    );
  };

  const handleYearChange = (event) => {
    const selectedYear = parseInt(event.target.value);
    setCurrentMonth(
      new Date(selectedYear, currentMonth.getMonth(), currentMonth.getDate())
    );
  };

  const renderHeader = () => {
    const monthOptions = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = monthOptions[currentMonth.getMonth()];
    const year = currentMonth.getFullYear();

    return (
      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl font-normal">
          {month} {year}
        </div>
        <div>
          <button
            className="font-bold py-2 px-4 rounded"
            onClick={() =>
              setCurrentMonth(
                new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth() - 1
                )
              )
            }
          >
            <Image
              src="/images/icon/angle-left-gray.svg"
              alt="angle-right-gray-icon"
              className="w-auto h-auto"
              width={9}
              height={16.5}
            />
          </button>
          <button
            className="font-bold py-2 px-4 rounded"
            onClick={() =>
              setCurrentMonth(
                new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth() + 1
                )
              )
            }
          >
            <Image
              src="/images/icon/angle-right-gray.svg"
              alt="angle-right-right-icon"
              className="w-auto h-auto"
              width={9}
              height={16.5}
            />
          </button>{" "}
        </div>
      </div>
    );
  };

  const renderYearPicker = () => {
    const startYear = 1900;
    const endYear = new Date().getFullYear() + 10;
    const years = [];

    for (let year = startYear; year <= endYear; year++) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }

    return (
      <select
        className="py-2 rounded cursor-pointer"
        value={currentMonth.getFullYear()}
        onChange={handleYearChange}
      >
        {years}
      </select>
    );
  };

  const renderMonthPicker = () => {
    const monthOptions = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return (
      <select
        className="py-2 rounded cursor-pointer"
        value={currentMonth.getMonth()}
        onChange={handleMonthChange}
        style={{ width: 60 }}
      >
        {monthOptions.map((month, index) => (
          <option key={index} value={index}>
            {month}
          </option>
        ))}
      </select>
    );
  };

  const Weekdays = () => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
      <div className="grid grid-cols-7 gap-1">
        {weekdays.map((weekday) => (
          <div key={weekday} className="text-center text-sm font-medium  w-9">
            {weekday}
          </div>
        ))}
      </div>
    );
  };

  const renderDays = () => {
    const firstDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );
    const numDaysInMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate();
    const days = [];

    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
      const previousMonth = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        0
      );
      const day = previousMonth.getDate() - firstDayOfMonth.getDay() + i + 1;
      const date = new Date(
        previousMonth.getFullYear(),
        previousMonth.getMonth(),
        day
      );
      const isToday = date.toDateString() === new Date().toDateString();

      const dayClass = classNames(
        "text-center rounded-full py-2 cursor-pointer",
        {
          "text-ash text-sm w-9": !isToday,
          "text-black": isToday,
        }
      );

      days.push(
        <div
          key={`empty-${i}`}
          className={dayClass}
          onClick={() => handleDateClick(date, i)}
        >
          {day}
        </div>
      );
    }

    for (let day = 1; day <= numDaysInMonth; day++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      );
      const isToday = date.toDateString() === new Date().toDateString();
      const isSelected =
        selectedDate && date.toDateString() === selectedDate.toDateString();

      const dayClass = classNames(
        "text-center rounded-full py-2 cursor-pointer w-9 text-sm font-medium",
        {
          "text-gray-700": !isSelected && !isToday,
          "bg-custom text-custom1": isSelected && !isToday,
          "text-white bg-green-500": isSelected && isToday,
          "bg-custom-r text-custom1": isToday,
          "text-red-500": isSelected && !isToday,
        }
      );

      days.push(
        <div
          key={day}
          className={dayClass}
          onClick={() => handleDateClick(date, day - 1)}
        >
          {day}
        </div>
      );
    }

    return <div className="grid grid-cols-7 gap-1">{days}</div>;
  };

  return (
    <>
      <div className="border border-ash3 rounded-tr-lg rounded-tl-lg p-8">
        {renderHeader()}
        <div className="flex justify-between mb-4">
          <div>
            <span className="font-semibold">Year:</span>
            {renderYearPicker()}
          </div>
          <div>
            <span className="font-semibold">Month:</span>
            {renderMonthPicker()}
          </div>
        </div>
        <Weekdays />
        {renderDays()}
      </div>

      <div className="border border-ash3 rounded-bl-lg rounded-br-lg pl-5">
        <p className="mb-4">Today</p>
        <div className="flex">
          <div className="h-84 flex flex-col justify-between w-24 mr-3">
            {appointmentTime.map((time, index) => {
              let color = index === 3 ? "text-custom-r" : "text-ash";
              return <p className={`font-semibold ${color} text-sm`} key={index}>
                {time}
              </p>
            })}
          </div>
          <div className="text-sm">
            <div className="bg-custom-g2 p-6 rounded-2xl mt-2">
              Appointment with Dr Fred
            </div>
            <div className="bg-custom-r-shade p-6 rounded-2xl mt-14">
              Appointment with Dr Ubong
            </div>
            <div className="bg-custom-g2 p-6 rounded-2xl mt-4">
              Appointment with Dr Simi
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
