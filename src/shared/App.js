import React, { useState } from "react";
import { Route } from "react-router-dom";
import {
  Home,
  Schedule,
  School,
  Community,
  Club,
  Write,
  SignIn,
  Join,
  Article,
} from "../pages";
import Nav from "../components/Nav.js";

function App() {
  const [data, setData] = useState({
    SW: [
      {
        name: "웹프론트반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "webfront",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "너튜브크리에이터반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "youtubecreator",
        articles: [
          {
            id: 1,
            title:
              "히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            count: 0,
            time: Date(),
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스dsfs afdasgsad엄청 맛있다",
            content: "진짜 맛있d음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "마인드스톰EV3코딩반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "ev3",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "슈즈디자인반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "shoes",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "젤예쁜손",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "jell",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "수공예반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "handicraft",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "디자인기초반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "basicdesign",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "쥬얼리반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "jewellery",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "실무디자인반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "practicaldesign",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
    ],
    Food: [
      {
        name: "조리미디어연구반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "cookmedia",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "골목식당반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "streetfood",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "설탕공예반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "sugar",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
    ],
    Finance: [
      {
        name: "경제탐구반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "exploereconomy",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "회계실무반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "practicalcommerce",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "금융마을 탐방반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "financetown",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "언더라이팅반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "underlighting",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
    ],
    Other: [
      {
        name: "응원반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "cheer",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "댄스반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "dance",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "방송반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "broadcase",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "홍보하늘반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "promotion1",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "홍보바람반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "promotion2",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "홍보별반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "promotion3",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "재능기부반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "talent",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "또바기반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "ddobagi",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "홍보영상제작반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "promotionvideo",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "퍼즐맞추기반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "puzzle",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "보드게임반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "boardgame",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "프라모델반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "plamodel",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "한양답사반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "hanyang",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "당구반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "billiards",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "달보드레반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "dalbodre",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "밴드반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "band",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "스크린셀러반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "screenseller",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "중구문화체험반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "jungguculture",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
      {
        name: "포트폴리오반",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        link: "portfolio",
        articles: [
          {
            id: 1,
            title: "히히",
            content: "<내가 웃는게 웃는게 아니다",
            name: "정다윗",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
          {
            id: 0,
            title: "핫식스 엄청 맛있다",
            content: "진짜 맛있음",
            name: "이성민",
            time: Date(),
            count: 0,
            views: 0,
            comments: [
              {
                id: 0,
                content:
                  "댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다. 댓글입니다.",
                name: "박민수",
                time: Date(),
              },
            ],
          },
        ],
      },
    ],
  });
  return (
    <div>
      <Nav />
      <Route path="/" component={Home} exact />
      <Route path="/Schedule" component={Schedule} />
      <Route path="/School" component={School} />
      <Route path="/r/:category" component={Club} exact />
      <Route path="/r/:category/:clubname" component={Community} exact />
      <Route path="/Write" component={Write} />
      <Route path="/Signin" component={SignIn} />
      <Route path="/Join" component={Join} />
      <Route path="/r/:category/:clubname/:id" component={Article} exact />
    </div>
  );
}

export default App;
