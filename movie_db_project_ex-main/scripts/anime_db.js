//애니메이션 DB
//마루 밑 아리에티, 체인소맨, 하울의 움직이는 성, 귀멸의 칼날, 포뇨, 센과 치히로, 스즈메의 문단속, 그대들은 어떻게 살것인가, 슬램덩크, 너의 이름은
const animeDB = [
    {
        id: 1,
        title: '마루 밑 아리에티',
        date: '2010-09-09',
        poster: 'poster_anime/poster_arrietty.jpg',
        plot: '인간 몰래 살아가는 10cm 소인 아리에티와 인간 소년 쇼우의 비밀스럽고 가슴 따뜻한 우정 이야기.',
        cast: ['시다 미라이', '카미키 류노스케'],
        rating: 8.5,
        director: '요네바야시 히로마사',
        genre: ['애니메이션', '판타지', '드라마']
    },
    {
        id: 2,
        title: '체인소 맨',
        date: '2025-01-15',
        poster: 'poster_anime/poster_chainsawmanreze.jpg',
        plot: '체인소 악마 포치타와의 계약을 통해 데빌 헌터로 거듭난 덴지의 잔혹하고 강렬한 사투를 그린 이야기.',
        cast: ['토야 키쿠노스케', '쿠스노키 토모리', '사카타 쇼고'],
        rating: 8.9,
        director: '나카조노 코헤이',
        genre: ['애니메이션', '액션', '다크 판타지']
    },
    {
        id: 3,
        title: '하울의 움직이는 성',
        date: '2004-12-23',
        poster: 'poster_anime/poster_howlsmovingcastle.jpg',
        plot: '마녀의 저주로 할머니가 된 소피가 마법사 하울의 움직이는 성에 머물게 되면서 벌어지는 판타지 로맨스.',
        cast: ['바이쇼 치에코', '기무라 타쿠야'],
        rating: 9.3,
        director: '미야자키 하야오',
        genre: ['애니메이션', '판타지', '로맨스']
    },
    {
        id: 4,
        title: '귀멸의 칼날',
        date: '2020-10-16',
        poster: 'poster_anime/poster_kimetsuinfinitycastle.jpg',
        plot: '혈귀가 된 여동생 네즈코를 인간으로 돌리기 위해 귀살대에 들어간 탄지로의 뜨거운 모험과 전투.',
        cast: ['하나에 나츠키', '키토 아카리', '시모노 히로'],
        rating: 9.1,
        director: '소토자키 하루오',
        genre: ['애니메이션', '액션', '시대극', '판타지']
    },
    {
        id: 5,
        title: '벼랑 위의 포뇨',
        date: '2008-12-17',
        poster: 'poster_anime/poster_ponyo.jpg',
        plot: '인간이 되고 싶은 물고기 소녀 포뇨와 5살 인간 소년 소스케의 동화 같은 만남과 모험.',
        cast: ['나라 유리아', '도이 히로키'],
        rating: 8.7,
        director: '미야자키 하야오',
        genre: ['애니메이션', '모험', '가족', '판타지']
    },
    {
        id: 6,
        title: '센과 치히로의 행방불명',
        date: '2002-06-28',
        poster: 'poster_anime/poster_spiritedaway.jpg',
        plot: '금지된 신들의 세계에 들어간 소녀 치히로가 돼지로 변한 부모님을 구하고 살아남기 위해 펼치는 모험.',
        cast: ['히라기 루미', '이리노 미유'],
        rating: 9.5,
        director: '미야자키 하야오',
        genre: ['애니메이션', '판타지', '모험']
    },
    {
        id: 7,
        title: '스즈메의 문단속',
        date: '2023-03-08',
        poster: 'poster_anime/poster_suzume.jpg',
        plot: '일본 각지의 문을 통해 찾아오는 재앙을 막기 위해 문을 닫아가는 소녀 스즈메의 여정.',
        cast: ['하라 나노카', '마츠무라 호쿠토'],
        rating: 8.9,
        director: '신카이 마코토',
        genre: ['애니메이션', '판타지', '드라마', '재난']
    },
    {
        id: 8,
        title: '그대들은 어떻게 살 것인가',
        date: '2023-10-25',
        poster: 'poster_anime/poster_theboyandtheheron.jpg',
        plot: '시공간을 초월한 신비로운 세계로 들어간 소년 마히토가 푸른 왜가리를 만나며 겪는 독창적인 자아 발견의 여정.',
        cast: ['산토키 소마', '스다 마사키'],
        rating: 8.2,
        director: '미야자키 하야오',
        genre: ['애니메이션', '판타지', '드라마']
    },
    {
        id: 9,
        title: '더 퍼스트 슬램덩크',
        date: '2023-01-04',
        poster: 'poster_anime/poster_thefirstslamdunk.jpg',
        plot: '전국제패를 꿈꾸는 북산고 농구부 5인방의 치열한 도전과 송태섭의 숨겨진 성장을 그린 스포츠 애니메이션.',
        cast: ['나카무라 슈고', '가사와 마사히로', '신요시 모토키'],
        rating: 9.4,
        director: '이노우에 타케히코',
        genre: ['애니메이션', '스포츠', '드라마']
    },
    {
        id: 10,
        title: '너의 이름은.',
        date: '2017-01-04',
        poster: 'poster_anime/poster_yourname.jpg',
        plot: '도쿄 소년 타키와 시골 소녀 미츠하가 서로 몸이 바뀌는 기적을 경험하며 재앙으로부터 서로를 구하려는 운명적인 이야기.',
        cast: ['카미키 류노스케', '카미시라이시 모네'],
        rating: 9.3,
        director: '신카이 마코토',
        genre: ['애니메이션', '판타지', '로맨스', '드라마']
    }
];