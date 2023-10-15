import React, { useState, useContext, createContext } from 'react';
import * as S from './index.styles';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import CalendarInput from './CalendarInput';

function Calendar({ selectedCalendarDate, setSelectedCalendarDate }) {
	const [isOpen, setIsOpen] = useState(false);

	// 달력 아이콘 버튼
	const toggleCalendar = () => {
		setIsOpen(!isOpen);
	};

	const handleMonthChange = month => {
		setSelectedCalendarDate(month);
	};

	return (
		<S.Container>
			<CalendarInput
				selectedDate={selectedCalendarDate}
				toggleCalendar={toggleCalendar}
			/>

			{isOpen && (
				<S.CalendarContent>
					<CalendarHeader
						selectedDate={selectedCalendarDate}
						handleMonthChange={handleMonthChange}
					/>
					<CalendarBody
						selectedDate={selectedCalendarDate}
						setSelectedDate={setSelectedCalendarDate}
						setIsOpen={setIsOpen}
					/>
				</S.CalendarContent>
			)}
		</S.Container>
	);
}

export default Calendar;
