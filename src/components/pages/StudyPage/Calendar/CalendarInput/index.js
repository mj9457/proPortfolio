import React, { useState, useEffect } from 'react';
import * as S from './index.styles';
import { formatDate } from 'utils/date';

function CalendarInput({ selectedDate, toggleCalendar }) {
	const [formattedSelectedDate, setFormattedSelectedDate] = useState({
		year: selectedDate.getFullYear(),
		month: selectedDate.getMonth() + 1,
		date: selectedDate.getDate(),
	});

	// Input에 들어가는 날짜
	const [inputValue, setInputValue] = useState(
		formatDate(
			formattedSelectedDate.year,
			formattedSelectedDate.month,
			formattedSelectedDate.date,
		),
	);

	// 선택하는 날짜가 바뀔 때마다 Input에 들어가는 날짜의 형식 변환
	useEffect(() => {
		setInputValue(
			formatDate(
				formattedSelectedDate.year,
				formattedSelectedDate.month,
				formattedSelectedDate.date,
			),
		);
	}, [formattedSelectedDate, selectedDate]);

	// 선택하는 날짜가 바뀔 때마다 Input에 들어가는 날짜의 형식 변환
	useEffect(() => {
		setFormattedSelectedDate({
			year: selectedDate.getFullYear(),
			month: selectedDate.getMonth() + 1,
			date: selectedDate.getDate(),
		});
	}, [selectedDate]);

	const handleDateChange = date => {
		setInputValue(date);
		const [year, month, day] = date.split('-').map(Number);
		setFormattedSelectedDate({
			year,
			month,
			date: day,
		});
	};

	return (
		<S.Container>
			<span
				className="material-symbols-outlined"
				onClick={toggleCalendar}
			>
				calendar_month
			</span>
			<input
				type="text"
				readOnly
				value={inputValue}
				onChange={e => handleDateChange(e.target.value)}
			/>
		</S.Container>
	);
}

export default CalendarInput;
