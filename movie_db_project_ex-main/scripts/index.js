//index.js
//Q: 어벤져스 DB 1개 li에 삽입하기
//기존 태그 선택 querySelect()
//기존 태그 복제 ClonsNode()
//새로운 태그 생성 createElement()
//생성한 대상을 붙여넣기 appendChild()
const movieWrap1 = document.querySelector('.movie_wrap1');  //선택 ul 대상

//Q: 어벤져스 DB 1개 li에 삽입하기
//const movieLi = document.querySelector('li'); //li 생성
// movieLi.textContent = '어벤져스';
//movieLi.textContent = moviesDB[0].title;
//movieLi.textContent += moviesDB[0].date; //+= 복합대입(기존값에 더해서 대입)
// movieLi.textContent = moviesDB[0].date; //= 대입(기존값을 제거하고 대입(기본 뜻))
//movieWrap1.appendChild(movieLi); //생성한 li 붙여넣기

//Q2: 영화 DB 1~2개 모두 출력하기
for(let i=0; i<9; i++){
    const movieLi = document.createElement('li');
    movieLi.innerHTML = `<h3>${moviesDB[i].title}</h3>`; 
    movieLi.innerHTML += `<P>${moviesDB[i].date}</P>`;
    movieLi.innerHTML += `<a href="#"><img src="${moviesDB[i].poster}" alt="${moviesDB[i].title}"></a>`;
    movieWrap1.appendChild(movieLi);
}

const animeWrap1 = document.querySelector('.anime_wrap1');

for(let i=0; i<9; i++){
    const movieLi = document.createElement('li');
    movieLi.innerHTML = `<h3>${animeDB[i].title}</h3>`; 
    movieLi.innerHTML += `<P>${animeDB[i].date}</P>`;
    movieLi.innerHTML += `<a href="#"><img src="${animeDB[i].poster}" alt="${animeDB[i].title}"></a>`;
    animeWrap1.appendChild(movieLi);
}

//------------------------------------------------------------26/9/4
//무비차트 + swiper
// swiper-slide 반복 생성해서 swiper-wrapper 붙여넣기
// swiper 플러그인 함수 연결은 swiper 최종 연결
const chart_swiper = document.querySelector('.chart_swiper');

const chart_swiper_func = new Swiper(chart_swiper, {//플러그인 연결
    slidesPerView:2,
    spaceBetween:10,
}); 

for(let i=0; i<5; i++){
    const chart_slide = document.createElement('div'); //생성
    chart_slide.classList.add('swiper-slide'); //클래스연결

    chart_slide.innerHTML = `<p class="num">${moviesDB[i].id}</p>`;
    chart_slide.innerHTML += `<h3">${moviesDB[i].title}</h3>`;
    chart_slide.innerHTML += `<p class="rating">${moviesDB[i].rating}</p>`;
    chart_slide.innerHTML += `<p class="story">${moviesDB[i].plot}</p>`;
    chart_slide.style.backgroundImage = `url(${moviesDB[i].poster})`;

    chart_swiper.children[0].appendChild(chart_slide); //붙여넣기
}

const anime_chart_swiper = document.querySelector('.anime_chart_swiper');

const anime_chart_swiper_func = new Swiper(anime_chart_swiper, {//플러그인 연결
    slidesPerView:2,
    spaceBetween:10,
}); 

for(let i=0; i<5; i++){
    const anime_chart_slide = document.createElement('div'); //생성
    anime_chart_slide.classList.add('swiper-slide'); //클래스연결

    anime_chart_slide.innerHTML = `<p class="num">${animeDB[i].id}</p>`;
    anime_chart_slide.innerHTML += `<h3">${animeDB[i].title}</h3>`;
    anime_chart_slide.innerHTML += `<p class="rating">${animeDB[i].rating}</p>`;
    anime_chart_slide.innerHTML += `<p class="story">${animeDB[i].plot}</p>`;
    anime_chart_slide.style.backgroundImage = `url(${animeDB[i].poster})`;

    anime_chart_swiper.children[0].appendChild(anime_chart_slide); //붙여넣기
}
