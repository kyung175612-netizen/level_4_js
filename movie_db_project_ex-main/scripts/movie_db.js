//영화 DB
//어벤져스, 스파이더맨, 오디세이, 토이스토리5, 악마를 프라다를 입는다2, 마이클, 슈퍼마리오갤럭시, 프로젝트 헤일메리, 폭풍의 언덕
const moviesDB = [
    {
        id: 1,
        title: '어벤져스',
        date: '2026-12-18',
        poster: 'poster/poster_avengersdoomsday.jpg',
        plot: '지구와 우주의 위협에 맞서기 위해 슈퍼히어로들이 다시 결집하여 펼치는 거대한 전투.',
        cast: ['로버트 다우니 주니어', '베네딕트 컴버배치', '톰 홀랜드'],
        rating: 9.2,
        director: '앤서니 루소, 조 루소',
        genre: ['액션', 'SF', '어드벤처']
    },
    {
        id: 2,
        title: '스파이더맨',
        date: '2026-07-24',
        poster: 'poster/poster_spidermanbrandnewday.jpg',
        plot: '새로운 위협에 맞서 정체성과 영웅으로서의 책임감 사이에서 고뇌하는 피터 파커의 이야기.',
        cast: ['톰 홀랜드', '젠데이아'],
        rating: 8.8,
        director: '데스틴 대니얼 크렛튼',
        genre: ['액션', 'SF', '어드벤처']
    },
    {
        id: 3,
        title: '오디세이',
        date: '2026-10-15',
        poster: 'poster/poster_theodyssey.jpg',
        plot: '트로이 전쟁이 끝난 후, 고향 이타카로 돌아가기 위한 오디세우스의 10년간의 험난한 여정.',
        cast: ['랄프 파인즈', '줄리엣 비노쉬'],
        rating: 8.5,
        director: '우베르토 파솔리니',
        genre: ['모험', '드라마', '역사']
    },
    {
        id: 4,
        title: '토이스토리5',
        date: '2026-06-19',
        poster: 'poster/poster_toystory5.jpg',
        plot: '스마트 기기와 전자제품의 시대에 밀려난 장난감들이 아이들의 관심을 되찾기 위해 벌이는 소동.',
        cast: ['톰 행크스', '팀 알렌'],
        rating: 8.9,
        director: '앤드류 스탠튼',
        genre: ['애니메이션', '모험', '코미디']
    },
    {
        id: 5,
        title: '악마는 프라다를 입는다2',
        date: '2026-11-06',
        poster: 'poster/poster_thedevilwearsprada2.jpg',
        plot: '쇠퇴해가는 잡지 미디어 시장에서 미란다 프리슬리와 대형 그룹 임원이 된 앤디가 다시 재회하며 벌어지는 이야기.',
        cast: ['메릴 스트립', '앤 해서웨이', '에밀리 블런트'],
        rating: 8.3,
        director: '데이비드 프랭클',
        genre: ['드라마', '코미디']
    },
    {
        id: 6,
        title: '마이클',
        date: '2025-04-18',
        poster: 'poster/poster_michael.jpg',
        plot: '팝의 황제 마이클 잭슨의 인간적인 삶과 화려했던 음악적 발자취를 다룬 전기 영화.',
        cast: ['자파 잭슨', '콜먼 도밍고', '니아 롱'],
        rating: 9.0,
        director: '안투안 후쿠아',
        genre: ['전기', '음악', '드라마']
    },
    {
        id: 7,
        title: '슈퍼마리오갤랙시',
        date: '2026-04-03',
        poster: 'poster/poster_thesupermariogalaxymovie.jpg',
        plot: '우주로 무대를 넓힌 마리오와 피치 공주, 그리고 친구들이 쿠파의 우주 정복 야욕을 막기 위해 떠나는 모험.',
        cast: ['크리스 프랫', '안야 테일러 조이', '잭 블랙'],
        rating: 8.7,
        director: '아론 호바스, 마이클 제레닉',
        genre: ['애니메이션', '모험', '판타지']
    },
    {
        id: 8,
        title: '프로젝트 헤일메리',
        date: '2026-03-20',
        poster: 'poster/poster_projecthailmary.jpg',
        plot: '기억을 잃은 채 우주선에서 깨어난 과학자가 인류 멸망의 위기를 막기 위해 홀로 임무를 수행하는 이야기.',
        cast: ['라이언 고슬링'],
        rating: 9.4,
        director: '필 로드, 크리스토퍼 밀러',
        genre: ['SF', '드라마']
    },
    {
        id: 9,
        title: '폭풍의 언덕',
        date: '2026-09-10',
        poster: 'poster/poster_wutheringheights.jpg',
        plot: '에밀리 브론테의 고전 소설을 바탕으로 한, 히스클리프와 캐서린의 강렬하고 격정적인 사랑과 복수의 비극.',
        cast: ['마고 로비', '제이콥 엘로디'],
        rating: 8.4,
        director: '에메랄드 페넬',
        genre: ['로맨스', '드라마']
    }
];