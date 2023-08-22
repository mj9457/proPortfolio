import * as S from './Buttons.styles';

function Buttons() {
	return (
		<S.ButtonBox>
			<div>
				<S.Button>전체</S.Button>
				<S.Button>프론트엔드</S.Button>
				<S.Button>백엔드</S.Button>
				<S.Button>Android</S.Button>
				<S.Button>IOS</S.Button>
			</div>
			<div>
				<a href="/portfolio/apply">
					<S.WriteButton>작성하기</S.WriteButton>
				</a>
			</div>
		</S.ButtonBox>
	);
}

export default Buttons;
