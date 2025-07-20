const PopulateCalendar = ({ eventDateStrings, changingMonth, year, dateTime }) => {
  const monthIndex = changingMonth.getMonth()
  const firstDay = new Date(year, monthIndex, 1)
  const firstDayWeekday = firstDay.getDay()
  const lastDay = new Date(year, monthIndex + 1, 0)

  let daysInMonth = []
  const i = new Date(firstDay)

  while (i <= lastDay) {
    daysInMonth.push(new Date(i))
    i.setDate(i.getDate() + 1)
  }

  const dateTimeString = dateTime.toLocaleString().split(',')[0]

  return (
    <div className='w-full px-2.5 gap-y-6 grid grid-cols-7'>
      {[...Array(firstDayWeekday)].map((_, index) => (
        <div key={`empty-${index}`} />
      ))}
      {daysInMonth.map(day => {
        const dayStringEST = day.toLocaleString().split(',')[0] // 7/20/25
        const dayStringUTC = day.toISOString().split('T')[0] // 2025-07-20
        const isToday = dateTimeString === dayStringEST
        const hasEvent = eventDateStrings.includes(dayStringUTC)

        return (
          <div
            key={dayStringEST}
            className={`
              font-display
              ${isToday ? 
                `${hasEvent ? 'bg-ggorange text-ggbg' : 'bg-ggwhite text-ggbg'} rounded-full mx-4` 
                : `${hasEvent ? 'text-ggorange' : 'text-ggwhite'}`}
            `}
          >
            {day.getDate()}
          </div>
        )
      })}
    </div>
  )
}

export default PopulateCalendar