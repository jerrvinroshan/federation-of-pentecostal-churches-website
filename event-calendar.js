//  Event Calendar
 const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysContainer = document.getElementById("calendar-days");
  const monthName = document.getElementById("month-name");
  const prevBtn = document.getElementById("prev-month");
  const nextBtn = document.getElementById("next-month");

  let currentDate = new Date();
  let selectedDate = new Date();

  function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    monthName.textContent = `${monthNames[month]} ${year}`;
    daysContainer.innerHTML = "";

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const totalDays = lastDayOfMonth.getDate();
    const startDay = (firstDayOfMonth.getDay() + 6) % 7;

    const prevMonthLastDay = new Date(year, month, 0).getDate();

    for (let i = startDay; i > 0; i--) {
      const day = document.createElement("a");
      day.href = "#";
      day.classList.add("calendar-day", "dimmed");
      day.textContent = prevMonthLastDay - i + 1;
      day.addEventListener("click", (e) => {
        e.preventDefault();
        currentDate.setMonth(month - 1);
        selectedDate = new Date(year, month - 1, parseInt(day.textContent));
        renderCalendar(currentDate);
      });
      daysContainer.appendChild(day);
    }

    for (let i = 1; i <= totalDays; i++) {
      const day = document.createElement("a");
      day.href = "#";
      day.classList.add("calendar-day");
      day.textContent = i;

      if (
        i === selectedDate.getDate() &&
        month === selectedDate.getMonth() &&
        year === selectedDate.getFullYear()
      ) {
        day.classList.add("active");
      }

      day.addEventListener("click", (e) => {
        e.preventDefault();
        selectedDate = new Date(year, month, i);
        renderCalendar(currentDate);
      });

      daysContainer.appendChild(day);
    }

    const totalCells = startDay + totalDays;
    const nextDays = 7 - (totalCells % 7);
    if (nextDays < 7) {
      for (let i = 1; i <= nextDays; i++) {
        const day = document.createElement("a");
        day.href = "#";
        day.classList.add("calendar-day", "dimmed");
        day.textContent = i;
        day.addEventListener("click", (e) => {
          e.preventDefault();
          currentDate.setMonth(month + 1);
          selectedDate = new Date(year, month + 1, i);
          renderCalendar(currentDate);
        });
        daysContainer.appendChild(day);
      }
    }
  }

  prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });

  nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });

  renderCalendar(currentDate);