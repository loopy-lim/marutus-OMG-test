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

type ExtractType<T> = T extends { type: infer U } ? U : never;
type ExtractBrand<T> = T extends { _brand: infer U } ? U : never;
type AnswerType = ExtractType<JP | EI | SN>;
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
];
