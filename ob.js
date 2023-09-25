const Menwebtoons = [
  {
    title: "초인의 시대",
    rank: 1,
    nickname: "섭이",
    gender:"men",
  },
  {
    
    title: "싸움독학",
    rank: 2,
    nickname: "박태준 만화회사 / 김정현 스튜디오",
    gender:"men",
  },
  {
    
    title: "신혼일기",
    rank: 3,
    nickname: "자까",
    gender:"men",
  },
  {
    
    title: "입학용병",
    rank: 4,
    nickname: "YC / 락현",
    gender:"men",
  },
  {
    
    title: "가비지타임",
    rank: 5,
    nickname: "2사장",
    gender: "men",
  //맨과우먼을 비교 하려고 만들었습니다 처음에는 우먼앞에 const를 붙혀서 하니 빨간 줄이 있어서 없애니깐 맨과 우면이 비교가 되는듯 합니다
  }]
    const womanwebtoons = [
    {
      title: "신혼일기",
      rank: 6,
      nickname: "자까",
      gender:"woman",
      
    },
    {
      title: "자매전쟁",
      rank: 7,
      nickname: "기맹기",
      gender:"woman",
      
    },
    {
      title: "가비지타임",
      rank: 8,
      nickname: "2사장",
      gender:"woman",
      
    },
    {
      title: "청춘계시록",
      rank: 9,
      nickname: "한서",
      gender:"woman",
      
    },
    { 
      title: "작정명 순정",
      rank: 10,
      nickname: "꼬까리 / 들덤",
      gender:"woman", 
    },
  ]

// 만약에 맨과우먼웹툰에 마음에소리가 없으면 마음에소리를 넣어라 (추가)
  if ((!Menwebtoons, womanwebtoons.includes("마음에소리"))) {
  }
  Menwebtoons, womanwebtoons.push("마음에소리");
  console.log(Menwebtoons, womanwebtoons);


 if(score=1){
    rank="1";
  }else if(score=2){
   rank="2";
 }else if(score=3){
   rank="3";
 }else if(score=4){
   rank="4";
  }else{
    score="5";
  }
 console.log(`${Menwebtoons.title}님의 이번 순위는 ${rank}입니다.`);
 console.log(`${womanwebtoons.title}님의 이번 순위는 ${rank}입니다.`);
// 순위를 만들어봤느넫 이상하게 나오내요...어렵다




//객체 배열 오름차순
  Menwebtoons.sort((a,b)=>{
    return a.rank-b.rank
  });
  console.log(Menwebtoons);

  womanwebtoons.sort((a,b)=>{
    return a.rank-b.rank
  });
  console.log(womanwebtoons);


//객체 배열 내림차순-오름차순과는 다르게 내림차순 리턴값을 바꾸면된다.
 Menwebtoons.sort((a,b)=>{
   return b.rank-a.rank
 });
 console.log(Menwebtoons);

 womanwebtoons.sort((a,b)=>{
   return b.rank-a.rank
 });
 console.log(womanwebtoons);



// filter  중복된 이름 지우기


 const resultA = Menwebtoons.filter((val, idx) => {
   return Menwebtoons.indexOf(val) === idx; 

 });

 const resultB = womanwebtoons.filter((val, idx) => {
   return womanwebtoons.indexOf(val) === idx; 
 });


//두개 중복 배열 제거하기...내일 다시해보자 
const result = Menwebtoons.filter(중복1 => {
	return !womanwebtoons.some(중복2 => 중복2===중복1)
})
console.log((result) => [{name: 'title'}]);