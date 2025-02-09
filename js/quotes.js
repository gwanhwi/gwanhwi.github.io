const quotes = [
    { quote: "행동이 말보다 더 크게 울린다.", author: "래리 페이지 (Larry Page)" },
    { quote: "성공은 최선의 복수이다.", author: "프랭클린 D. 루스벨트 (Franklin D. Roosevelt)" },
    { quote: "삶은 자신을 찾는 것이 아니라, 자신을 만드는 것이다.", author: "조지 버나드 쇼 (George Bernard Shaw)" },
    { quote: "위대한 일이 이루어지는 것은 내가 아니라 다른 사람들이 내가 주도한 것으로 믿도록 만들 때이다.", author: "존 D. 록펠러 (John D. Rockefeller)" },
    { quote: "당신이 되고 싶은 변화가 되어라.", author: "마하트마 간디 (Mahatma Gandhi)" },
    { quote: "행복은 방향이지 목적지가 아니다.", author: "시몬느 드 보부아르 (Simone de Beauvoir)" },
    { quote: "실패는 성공으로 가는 첫 번째 단계이다.", author: "윌리엄 W. 휘트니 (William W. Whitney)" },
    { quote: "가장 큰 영광은 결코 실패하지 않는 것이 아니라, 실패할 때마다 다시 일어서는 것이다.", author: "넬슨 만델라 (Nelson Mandela)" },
    { quote: "시간은 금이다.", author: "벤자민 프랭클린 (Benjamin Franklin)" },
    { quote: "나는 실패한 적이 없다. 나는 단지 잘못된 방법 10,000개를 발견했을 뿐이다.", author: "토마스 에디슨 (Thomas Edison)" }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const random=Math.floor(Math.random()*quotes.length);
quote.innerText = quotes[random].quote;
author.innerText = quotes[random].author;