const PopulateCalendar = ({ dateTime, changingMonth, year }) => {
  const monthIndex = changingMonth.getMonth()
  const firstDay = new Date(year, monthIndex, 1) // Tue Jul 01 2025
  const firstDayWeekday = firstDay.getDay() // 2
  const lastDay = new Date(year, monthIndex + 1, 0)
  // use firstDayWeekday as a starting weekday for a for loop that spans lastDay times, populating a css grid.

  let daysInMonth = []
  const i = new Date(firstDay)

  while (i <= lastDay) {
    daysInMonth.push(new Date(i))
    i.setDate(i.getDate() + 1)
  }

  return (
    <div className='w-full px-2.5 gap-y-6 grid grid-cols-7'>
      {[...Array(firstDayWeekday)].map((_, index) => (
        <div key={`empty-${index}`} />
      ))}
      {daysInMonth.map(day => (
        <div className='font-display text-ggwhite'key={day.toISOString().split('T')[0]}>{day.getDate()}</div>
      ))}
    </div>
  )
}

export default PopulateCalendar