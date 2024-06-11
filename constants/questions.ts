import { ExtractBrand, ExtractType } from "@/lib/typeHelper";

interface JP {
  _brand: "JP";
  type: "J" | "P";
}
interface EI {
  _brand: "EI";
  type: "E" | "I";
}
interface SN {
  _brand: "SN";
  type: "S" | "N";
}

export type AnswerType = ExtractType<JP | EI | SN>;
type QuestionType = ExtractBrand<JP | EI | SN>;

export interface Question {
  question: string;
  type: QuestionType;
  answer: {
    a: string;
    type: AnswerType;
  }[];
}

export const QUESTIONS: Question[] = [
  {
    question:
      "두근 두근 수련회 전날 저녁이다. 설레는 맘으로 침대에 누웠는데 나는?",
    type: "JP",
    answer: [
      {
        a: "언능 자야지 빠른 취침이 가장 좋은 준비야! 체력을 위해서 바로 잔다.",
        type: "J",
      },
      {
        a: "조원들 만나서 어떤 말을 할지 걱정과 상상하며 잠을 잔다.",
        type: "J",
      },
      {
        a: "유튜브 숏츠로 시간 순삭이 되며 헉! 빨리 자야겠다.",
        type: "P",
      },
      {
        a: "교회가기 귀찮은ㄷ...",
        type: "P",
      },
    ],
  },
  {
    question: "당일날 일어나서 교회로 가려고 하는 상황에 나는?",
    type: "JP",
    answer: [
      {
        a: "일주일 전부터 미리 싸놓은 짐을 들고 룰루랄라 여유롭게 간다.",
        type: "J",
      },
      {
        a: "우선 다 집어 넣자 하면서 눈에 보이는 성경책과 챙길 물품을 넣는다.",
        type: "P",
      },
      {
        a: "필요한 것이 있나? 그냥 몸만 간다.",
        type: "P",
      },
      {
        a: "공지사항과 조장님의 알림 사항을 다시 한번 보면서 체크하면서 준비한다.",
        type: "J",
      },
    ],
  },
  {
    question:
      "조원들과 첫만남 다들 어색해서 아무말도 못하고 있는 상황이면 나는?",
    type: "EI",
    answer: [
      {
        a: "어색한 분위기가 싫어서 먼저 말을 걸어 어디 샘터인지 여쭤본다.",
        type: "E",
      },
      {
        a: "이럴줄 알고 바로 준비한 마이쮸를 꺼내면서 이야기를 해본다.",
        type: "E",
      },
      {
        a: "말을 걸어주세요 라는 눈빛으로 조원이나 조장을 쳐다본다.",
        type: "I",
      },
      {
        a: "먼저 말걸기가 어려워서 그냥 핸드폰만 하고 있는다.",
        type: "I",
      },
    ],
  },
  {
    question:
      "첫 예배를 끝내고 다같이 밥을 먹고 있는데 인증 사진을 찍고 인스타에 올린다고 하면 나의 태그는?",
    type: "SN",
    answer: [
      {
        a: "음식사진만 있는 사진 # 맛있는 식사 # 장로님들감사합니다",
        type: "S",
      },
      {
        a: "조장 조원들과 함께 있는 사진 # 좋은 사람들과 # 좋은 말씀",
        type: "N",
      },
    ],
  },
  {
    question:
      "조장님과 부조장님께서 자리를 비운 상황에서 조원들끼리 갈등이 발생하게 되었다면 나는?",
    type: "EI",
    answer: [
      {
        a: "눈치를 보며 조장님과 부조장님을 빨리 찾는다.",
        type: "I",
      },
      {
        a: "상황을 중재하기 위해 어떤 상황인지 물어본다.",
        type: "E",
      },
      {
        a: "이거는 다 같이 기도해야할 일이야 하며 손을 잡고 기도를 한다.",
        type: "E",
      },
      {
        a: "내가 뭐 할수 있는게 있나? 하며 그냥 가만히 두며 다른 곳을 바라 본다.",
        type: "I",
      },
    ],
  },
  {
    question:
      "원래 있던 수련회의 프로그램이나 조별 일정이 갑자기 바뀌게 되었다면 나는?",
    type: "JP",
    answer: [
      {
        a: "갑자기 일정이 바뀌었지? 불편함을 느낀다.",
        type: "J",
      },
      {
        a: "일정이 바뀌었다는 것을 듣고 앞으로의 상황과 반응을 생각하면서 참여한다.",
        type: "J",
      },
      {
        a: "내가 생각한 계획은 아니지만 뭐 어때 하면서 참여한다.",
        type: "P",
      },
      {
        a: "그래 이게 바로 수련회의 묘미지! 더 기대하며 참여한다.",
        type: "P",
      },
    ],
  },
  {
    question: "점심을 먹고 조원끼리 간식과 음료를 먹으려고 한다면 나의 선택은?",
    type: "SN",
    answer: [
      {
        a: "혈당스파이크가 나의 낙이지 아이스크림!",
        type: "N",
      },
      {
        a: "달달한게 최고지 난 젤리나 초콜릿",
        type: "N",
      },
      {
        a: "여름엔 수박이지! 시원한 수박이나 과일!",
        type: "S",
      },
      {
        a: "카페인이 너무 필요해! 아이스아메리카노",
        type: "S",
      },
    ],
  },
  {
    question: "수련회에서 나눔 활동을 할 때 나는?",
    type: "EI",
    answer: [
      {
        a: "개인적으로 1대 1로 하는 게 편해!(진솔한 대화를 나누는게 좋아)",
        type: "I",
      },
      {
        a: "여러 명이서 북적북적 거리면서 하나님을 나누는 게 좋아!",
        type: "E",
      },
      {
        a: "나 혼자만의 묵상을 할래!",
        type: "I",
      },
      {
        a: "나눔 자체가 어려워서 어떻게 말해야 할지 모르겠어!",
        type: "I",
      },
    ],
  },
  {
    question: "점심 먹은후 레크레이션을 한다고하면 내가  좋아하는 게임 종류는?",
    type: "SN",
    answer: [
      {
        a: "두뇌를 사용하는 퀴즈나 퍼즐같은 활동이 좋아!",
        type: "N",
      },
      {
        a: "여름 수련회의 꽃은 물놀이지! 뭐해! 장비 안챙기고~",
        type: "N",
      },
      {
        a: "레크레이션 활동에 크게 관심이 없어 난 응원으로 힘을 줄래!",
        type: "S",
      },
      {
        a: "아 몰라~ 그냥 1등이 목표다!",
        type: "S",
      },
    ],
  },
  {
    question:
      "찬양시간에 수련회의 주제곡인 oh my god이 나오면서 사람들이 일어서서 신나게 워십을 하고 있다면 나는?",
    type: "EI",
    answer: [
      {
        a: "당연히 이건 알고 있지! 신나게 워십을 따라하며 찬양한다.",
        type: "E",
      },
      {
        a: "워십을 따라하고 싶긴하지만 주변이 의식되어서 자신있게는 하지 못한다.",
        type: "I",
      },
      {
        a: "워십은 너무 어려운것 같아 주변이 의식이 되지는 않지만 어려워서 따라하지 못하여서 쉬운부분만 따라하려고 한다.",
        type: "E",
      },
      {
        a: "난 워십을 왜 하는지 모르겠어! 그냥 자리에 앉아 있는다.",
        type: "I",
      },
    ],
  },
  {
    question: "수련회에서 많은 말씀을 듣지만 가장 기대되는 말씀 시간은?",
    type: "SN",
    answer: [
      {
        a: "이번에 조지훈 목사님의 말씀이 너무 기대돼!",
        type: "S",
      },
      {
        a: "나는 밥 먹으면서 외우게 될 송구암송이 기대돼!",
        type: "N",
      },
      {
        a: "당연히 조원들과 함께 하는 GBS지! 얼마나 풍성한 나눔이 될까!!",
        type: "S",
      },
      {
        a: "OMG 수련회 주제 말씀!",
        type: "N",
      },
    ],
  },
  {
    question:
      "조원 들과 함께 홈스테이를 하며 도란도란 함께 이야기를 하게 되었다면 나는?",
    type: "JP",
    answer: [
      {
        a: "이게 하나님께서 주신 청춘이고 낭만이지 하며 새벽이 지날때 까지 이야기를 한다.",
        type: "P",
      },
      {
        a: "그전부터 물어보고 싶었던 것들을 물어보며 지식을 얻으려고한다.",
        type: "J",
      },
      {
        a: "우리는 이제부터 수련회다! 다 못했던 은혜 나눔을 하며 밤을 새운다.",
        type: "P",
      },
      {
        a: "그 다음날도 있으니 빨리자자~ 내일 예배를 위해 빨리 잔다.",
        type: "J",
      },
    ],
  },
  {
    question:
      "끝장기도회를 하고있는 상황 속에서 서로 모르는 사람(동성)과 기도제목을 나누게 된 상황이 되었다면  나는?",
    type: "EI",
    answer: [
      {
        a: "은혜로 뛰어넘는 어색함! 구체적으로 기도제목을 물어보며 서로 안아주며 기도한다.",
        type: "E",
      },
      {
        a: "인사를 하며 통설명 후 차분하게 기도제목을 나눈다.",
        type: "E",
      },
      {
        a: "인사를 나누고 간단하게 기도제목을 이야기 하지만 깊은 대화는 피한다.",
        type: "I",
      },
      {
        a: "부담 스러워서 가능한 한 말을 아끼고 기도제목도 간단히 공유한다.",
        type: "I",
      },
    ],
  },
  {
    question:
      "수련회가 끝나고 나서 내가 결단한 것을 삶속에서 살아내려고 할때 나는?",
    type: "JP",
    answer: [
      {
        a: "어떤걸 결단 하였는지 구체적으로 작성한뒤 어떻게 해야되는지 계획을 짜본다.",
        type: "J",
      },
      {
        a: "결단한 내용을 마음에 새기고, 일상 속에서 실천하려고 한다.",
        type: "P",
      },
      {
        a: "특별한 계획 없이 그때 그때 상황에 따라 결단을 실천한다.",
        type: "P",
      },
      {
        a: "결단한것을 실천할 방법을 찾으면서 강단있게 순종한다.",
        type: "J",
      },
    ],
  },
  {
    question: "내가 수련회를 통해서 하나님을 만나게 된다면?",
    type: "SN",
    answer: [
      {
        a: "나의 삶이 엄청나게 바뀌어서 주변사람들이 다 놀라게 될것이다.",
        type: "N",
      },
      {
        a: "하나님만을 위해 살아가는 내가 될것이다.(",
        type: "N",
      },
      {
        a: "엄청나게 바뀌는 것이 없더라도 계속 해서 거룩해지기 위해서 의지적으로 살것이다.",
        type: "S",
      },
      {
        a: "작은 변화부터 시작하여 일상 속에서 구체적으로 하나님을 경험하며 살아갈 것이다.",
        type: "S",
      },
    ],
  },
];
