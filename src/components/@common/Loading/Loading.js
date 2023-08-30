const Loading = () => {
	return (
		<div
			style={{
				position: 'absolute',
				top: '40%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<div>
					<img
						src="/assets/img/icons/loading.gif"
						alt="로딩 아이콘"
					/>
				</div>
				<div
					style={{
						marginTop: '18px',
						fontSize: '24px',
						fontFamily: 'Pretendard-Medium',
					}}
				>
					로딩 중입니다. 잠시만 기다려 주세요.
				</div>
			</div>
		</div>
	);
};

export default Loading;
