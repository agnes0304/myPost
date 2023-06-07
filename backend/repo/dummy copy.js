// 아래 코드는 newPostController와는 아무 상관이 없으.

// const createDOMPurify = require('dompurify');
// const { JSDOM } = require('jsdom');

// const window = new JSDOM('').window;
// const DOMPurify = createDOMPurify(window);

// module.exports.dummy = [
//   {
//     id: 44,
//     createdAt: "2022-05-15T23:57:43Z",
//     updatedAt: "2022-05-15T23:57:43Z",
//     body:
//       "반복되는 문자 리턴 문제에서 ' '(공백하나인 문자열)입력시 오류가 발생합니다.",
//     author: "JoeunNAL",
//     answer: null,
//     avatarUrl:
//       "https://avatars.githubusercontent.com/u/90553688?s=64&u=3c4e4dc2053d4977ac12b9cfc2667582f986d3d8&v=4",
//   },
// ].map(discussion => {
//   if (discussion.answer) {
//     return {
//       ...discussion,
//       bodyHTML: DOMPurify.sanitize(discussion.bodyHTML),
//       answer: {
//         ...discussion.answer,
//         bodyHTML: DOMPurify.sanitize(discussion.answer.bodyHTML)
//       }
//     }
//   }

//   return {
//     ...discussion,
//     bodyHTML: DOMPurify.sanitize(discussion.bodyHTML)
//   }
// })

module.exports.dummy = [
  {
    id: 44,
    createdAt: "2022-05-15T23:57:43Z",
    updatedAt: "2022-05-15T23:57:43Z",
    body:
      "반복되는 문자 리턴 문제에서 ' '(공백하나인 문자열)입력시 오류가 발생합니다.",
    author: "JoeunNAL",
    answer: null,
    avatarUrl:
      "https://avatars.githubusercontent.com/u/90553688?s=64&u=3c4e4dc2053d4977ac12b9cfc2667582f986d3d8&v=4",
  },
]