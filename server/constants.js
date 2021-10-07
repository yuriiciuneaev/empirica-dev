//the data as string .. was generated by the code below:

export const stepOneData = [
  {
    payoff: {
      A: { 101: 53, 102: 77, 103: 75, 104: 36, 105: 24 },
      B: { 101: 44, 102: 39, 103: 66, 104: 44, 105: 39 },
      C: { 101: 31, 102: 35, 103: 65, 104: 21, 105: 76 },
      D: { 101: 48, 102: 66, 103: 30, 104: 37, 105: 80 },
      E: { 101: 66, 102: 78, 103: 27, 104: 74, 105: 48 },
      F: { 101: 82, 102: 31, 103: 67, 104: 76, 105: 37 },
      G: { 101: 56, 102: 25, 103: 37, 104: 47, 105: 24 },
      H: { 101: 73, 102: 55, 103: 42, 104: 69, 105: 34 }
    },
    _id: "0",
    difficulty: "Training - Hard",
    students: ["A", "B", "C", "D", "E", "F", "G", "H"],
    rooms: [101, 102, 103, 104, 105],
    constraints: [
      {
        _id: 0,
        type: 1,
        pair: ["C", "D"],
        text: "can't live in the same room"
      },
      { _id: 1, type: 2, pair: ["D", "E"], text: "must be neighbors" },
      {
        _id: 2,
        type: 3,
        pair: ["E", "H"],
        text: "can't live in the same room or be neighbors"
      },
      {
        _id: 3,
        type: 1,
        pair: ["F", "H"],
        text: "can't live in the same room"
      }
    ],
    optimal: 567,
    computeTime: 2.99,
    usedIn: "step1",
    study: "pilot2"
  },
  {
    payoff: {
      A: { 101: 46, 102: 55, 103: 36, 104: 23 },
      B: { 101: 32, 102: 53, 103: 46, 104: 67 },
      C: { 101: 29, 102: 37, 103: 40, 104: 53 },
      D: { 101: 62, 102: 79, 103: 78, 104: 56 },
      E: { 101: 22, 102: 46, 103: 60, 104: 36 },
      F: { 101: 60, 102: 30, 103: 59, 104: 28 }
    },
    _id: "1",
    difficulty: "Easy",
    students: ["A", "B", "C", "D", "E", "F"],
    rooms: [101, 102, 103, 104],
    constraints: [
      {
        _id: 0,
        type: 0,
        pair: ["C", "F"],
        text: "must live in the same room"
      },
      {
        _id: 1,
        type: 3,
        pair: ["D", "E"],
        text: "can't live in the same room or be neighbors"
      }
    ],
    optimal: 343,
    computeTime: 2.07,
    usedIn: "step1",
    study: "pilot2"
  },
  {
    payoff: {
      A: { 101: 52, 102: 43, 103: 23, 104: 35, 105: 47, 106: 44 },
      B: { 101: 48, 102: 60, 103: 45, 104: 41, 105: 20, 106: 29 },
      C: { 101: 56, 102: 42, 103: 33, 104: 50, 105: 68, 106: 73 },
      D: { 101: 69, 102: 67, 103: 54, 104: 43, 105: 63, 106: 64 },
      E: { 101: 74, 102: 67, 103: 23, 104: 55, 105: 45, 106: 12 },
      F: { 101: 50, 102: 45, 103: 11, 104: 60, 105: 23, 106: 79 },
      G: { 101: 58, 102: 39, 103: 29, 104: 75, 105: 51, 106: 34 },
      H: { 101: 79, 102: 10, 103: 65, 104: 14, 105: 69, 106: 67 },
      I: { 101: 41, 102: 19, 103: 67, 104: 57, 105: 58, 106: 55 }
    },
    _id: "2",
    difficulty: "Hard",
    students: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
    rooms: [101, 102, 103, 104, 105, 106],
    constraints: [
      {
        _id: 0,
        type: 1,
        pair: ["A", "D"],
        text: "can't live in the same room"
      },
      {
        _id: 1,
        type: 3,
        pair: ["A", "G"],
        text: "can't live in the same room or be neighbors"
      },
      { _id: 2, type: 2, pair: ["B", "D"], text: "must be neighbors" },
      { _id: 3, type: 2, pair: ["B", "F"], text: "must be neighbors" },
      {
        _id: 4,
        type: 3,
        pair: ["B", "G"],
        text: "can't live in the same room or be neighbors"
      },
      {
        _id: 5,
        type: 1,
        pair: ["E", "F"],
        text: "can't live in the same room"
      },
      {
        _id: 6,
        type: 0,
        pair: ["E", "I"],
        text: "must live in the same room"
      },
      {
        _id: 7,
        type: 1,
        pair: ["F", "H"],
        text: "can't live in the same room"
      }
    ],
    optimal: 554,
    computeTime: 27.93,
    usedIn: "step1",
    study: "pilot2"
  },
  {
    payoff: {
      A: { 101: 26, 102: 40, 103: 61, 104: 37 },
      B: { 101: 21, 102: 67, 103: 56, 104: 41 },
      C: { 101: 40, 102: 54, 103: 19, 104: 31 },
      D: { 101: 55, 102: 43, 103: 34, 104: 27 },
      E: { 101: 31, 102: 61, 103: 19, 104: 52 },
      F: { 101: 36, 102: 24, 103: 29, 104: 43 }
    },
    _id: "3",
    difficulty: "Easy",
    students: ["A", "B", "C", "D", "E", "F"],
    rooms: [101, 102, 103, 104],
    constraints: [
      {
        _id: 0,
        type: 1,
        pair: ["B", "E"],
        text: "can't live in the same room"
      },
      { _id: 1, type: 2, pair: ["E", "F"], text: "must be neighbors" }
    ],
    optimal: 323,
    computeTime: 0.7,
    usedIn: "step1",
    study: "pilot2"
  },
  {
    payoff: {
      A: { 101: 82, 102: 13, 103: 68, 104: 17, 105: 72, 106: 70 },
      B: { 101: 57, 102: 52, 103: 18, 104: 67, 105: 30, 106: 86 },
      C: { 101: 74, 102: 67, 103: 23, 104: 55, 105: 45, 106: 12 },
      D: { 101: 54, 102: 66, 103: 51, 104: 47, 105: 26, 106: 35 },
      E: { 101: 56, 102: 42, 103: 33, 104: 50, 105: 68, 106: 73 },
      F: { 101: 63, 102: 61, 103: 48, 104: 37, 105: 57, 106: 58 },
      G: { 101: 59, 102: 40, 103: 30, 104: 76, 105: 52, 106: 35 },
      H: { 101: 52, 102: 43, 103: 23, 104: 35, 105: 47, 106: 44 },
      I: { 101: 40, 102: 18, 103: 66, 104: 56, 105: 57, 106: 54 }
    },
    _id: "4",
    difficulty: "Hard",
    students: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
    rooms: [101, 102, 103, 104, 105, 106],
    constraints: [
      {
        _id: 0,
        type: 1,
        pair: ["A", "B"],
        text: "can't live in the same room"
      },
      {
        _id: 1,
        type: 1,
        pair: ["B", "C"],
        text: "can't live in the same room"
      },
      { _id: 2, type: 2, pair: ["B", "D"], text: "must be neighbors" },
      {
        _id: 3,
        type: 0,
        pair: ["C", "I"],
        text: "must live in the same room"
      },
      { _id: 4, type: 2, pair: ["D", "F"], text: "must be neighbors" },
      {
        _id: 5,
        type: 3,
        pair: ["D", "G"],
        text: "can't live in the same room or be neighbors"
      },
      {
        _id: 6,
        type: 1,
        pair: ["F", "H"],
        text: "can't live in the same room"
      },
      {
        _id: 7,
        type: 3,
        pair: ["G", "H"],
        text: "can't live in the same room or be neighbors"
      }
    ],
    optimal: 564,
    computeTime: 26.14,
    usedIn: "step1",
    study: "pilot2"
  },
  {
    payoff: {
      A: { 101: 16, 102: 70, 103: 38, 104: 60 },
      B: { 101: 46, 102: 37, 103: 41, 104: 76 },
      C: { 101: 10, 102: 43, 103: 29, 104: 58 },
      D: { 101: 65, 102: 33, 103: 70, 104: 44 },
      E: { 101: 21, 102: 41, 103: 59, 104: 32 },
      F: { 101: 19, 102: 53, 103: 24, 104: 43 }
    },
    _id: "5",
    difficulty: "Easy",
    students: ["A", "B", "C", "D", "E", "F"],
    rooms: [101, 102, 103, 104],
    constraints: [
      {
        _id: 0,
        type: 0,
        pair: ["A", "D"],
        text: "must live in the same room"
      },
      { _id: 1, type: 2, pair: ["B", "C"], text: "must be neighbors" }
    ],
    optimal: 325,
    computeTime: 0.43,
    usedIn: "step1",
    study: "pilot2"
  }
];

export const stepTwoData = [
  {
    payoff: {
      A: { 101: 61, 102: 24, 103: 57, 104: 69, 105: 30, 106: 55 },
      B: { 101: 76, 102: 60, 103: 11, 104: 71, 105: 65, 106: 26 },
      C: { 101: 29, 102: 55, 103: 40, 104: 53, 105: 16, 106: 20 },
      D: { 101: 13, 102: 37, 103: 17, 104: 11, 105: 33, 106: 31 },
      E: { 101: 32, 102: 36, 103: 19, 104: 46, 105: 51, 106: 27 },
      F: { 101: 25, 102: 45, 103: 10, 104: 41, 105: 32, 106: 52 },
      G: { 101: 56, 102: 52, 103: 23, 104: 74, 105: 58, 106: 34 },
      H: { 101: 77, 102: 53, 103: 44, 104: 67, 105: 70, 106: 20 },
      I: { 101: 58, 102: 59, 103: 65, 104: 72, 105: 28, 106: 50 }
    },
    _id: "0",
    difficulty: "Training - Hard",
    students: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
    rooms: [101, 102, 103, 104, 105, 106],
    constraints: [
      {
        _id: 0,
        type: 3,
        pair: ["A", "I"],
        text: "can't live in the same room or be neighbors"
      },
      { _id: 1, type: 2, pair: ["B", "I"], text: "must be neighbors" },
      {
        _id: 2,
        type: 1,
        pair: ["C", "F"],
        text: "can't live in the same room"
      },
      { _id: 3, type: 2, pair: ["C", "G"], text: "must be neighbors" },
      { _id: 4, type: 2, pair: ["D", "G"], text: "must be neighbors" },
      {
        _id: 5,
        type: 3,
        pair: ["D", "I"],
        text: "can't live in the same room or be neighbors"
      },
      {
        _id: 6,
        type: 3,
        pair: ["E", "G"],
        text: "can't live in the same room or be neighbors"
      },
      {
        _id: 7,
        type: 0,
        pair: ["G", "H"],
        text: "must live in the same room"
      }
    ],
    optimal: 526,
    computeTime: 22.75,
    usedIn: "step2",
    study: "pilot2"
  }
];
