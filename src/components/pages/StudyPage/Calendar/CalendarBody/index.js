import React, { useMemo, useCallback } from 'react';
import * as S from './index.styles';

const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

function CalendarBody({ selectedDate, setSelectedDate, setIsOpen }) {
	const [year, month] = useMemo(
		() => [selectedDate.getFullYear(), selectedDate.getMonth()],
		[selectedDate],
	);

	const [daysInMonth, firstDayOfMonth] = useMemo(
		() => [
			new Date(year, month + 1, 0).getDate(),
			new Date(year, month, 1).getDay(),
		],
		[year, month],
	);

	const days = useMemo(
		() => Array.from({ length: daysInMonth }, (_, i) => i + 1),
		[daysInMonth],
	);

	const handleDateClick = useCallback(
		day => {
			const selectedDay = new Date(year, month, day);
			setSelectedDate(selectedDay);
			setIsOpen(false);
		},
		[year, month, setSelectedDate, setIsOpen],
	);

	// 달의 시작에서 앞에 빈칸
	const emptyCells = useMemo(
		() =>
			Array.from({ length: firstDayOfMonth }, (_, i) => (
				<S.CalendarCell key={`empty-${i}`} />
			)),
		[firstDayOfMonth],
	);

	// 날짜
	const dayCells = useMemo(
		() =>
			days.map((day, idx) => (
				<S.CalendarCell
					key={idx}
					onClick={() => handleDateClick(day)}
					$isSelected={selectedDate.getDate() === day}
				>
					{day}
				</S.CalendarCell>
			)),
		[days, handleDateClick, selectedDate],
	);

	// 빈칸과 날짜를 합쳐서 새로운 배열로 만든다. => 일주일 단위로 끊음
	const weekRows = useMemo(() => {
		const totalCells = emptyCells.concat(dayCells);
		const rows = [];
		for (let i = 0; i < totalCells.length; i += 7) {
			const week = totalCells.slice(i, i + 7);
			rows.push(<tr key={i}>{week}</tr>);
		}
		return rows;
	}, [emptyCells, dayCells]);

	// console.log(emptyCells, firstDayOfMonth);

	return (
		<S.Container>
			<S.CalendarTable>
				<S.CalendarTableHeader>
					<tr>
						{dayNames.map((dayName, index) => (
							<th key={index}>{dayName}</th>
						))}
					</tr>
				</S.CalendarTableHeader>
				<S.CalendarTableBody>{weekRows}</S.CalendarTableBody>
			</S.CalendarTable>
		</S.Container>
	);
}

export default CalendarBody;
