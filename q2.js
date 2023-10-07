/*
배열 나누기
함수 division은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다   const arr = Array.from({ length: 80 }, (b, i) => i + 1);

ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
    ex) [1...80] => [[1...5], [6...10], [11...15], ... , [76...80]]
*/

const arr = Array.from({ length: 80 }, (_, i) => i + 1);
//1~80[1,2,3,4,5,6]

function division(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 5) {
    console.log(arr.slice(i, i + 5)); //이해가 안가내 알아 봐야함
    // 3. 내가 의도한 데이터 [1~5], [6~10]이 나오는지 확인했어야했고, 왜 그렇게 나오는지 설명할 수 있어야한다

    result.push(arr.slice(i, i + 5));
  } // 로직은 정답
  return result; //를 사용하면 왜 console.log(division(arr))를 해야하는지 알아봐야함
}
console.log(division(arr)); // 2. dvistion의 return으로 작성해놓고 함수 실행을 안했음
// console.log(arr); -> 1. 선언하지도 않았기 떄문에 콘솔에 찍혔을리가 없다, 에러 발생
