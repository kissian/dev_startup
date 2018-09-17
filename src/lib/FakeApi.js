const FakeApi = {

    user:{
        id:23,
        name:'Sebastien',
        avatar:'/assets/img/avatar3.png',
        AddFriend: 6,
        InBox: 64,
        Travel: 0,
        Favorites: 12
    },
    friendRequest:[
        {
            user:{
                id:21,
                name:'JaneDoe',
                phone:"010-2930-1023",
                avatar:'/assets/img/avatar6.png',
                message:[]
            },
            id:99

        },{
            user:{
                id:22,
                name:'Gilbert',
                phone:"010-2930-1023",
                avatar:'/assets/img/avatar3.png',
                message:[]
            },
            id:98
        },{
            user:{
                id:23,
                name:'Design',
                phone:"010-2930-1023",
                avatar:'/assets/img/avatar5.png',
                message:[]
            },
            id:97
        },{
            user:{
                id:24,
                name:'Labels',
                phone:"010-2930-1023",
                avatar:'/assets/img/avatar2.png',
                message:[]
            },
            id:96
        }
    ],

    pictures : [
        {
            url:"/assets/img/lights.jpg" 
        },
        {
            url:"/assets/img/nature.jpg"
        },
        {
            url:"/assets/img/forest.jpg"                        
        },
        {
            url:"/assets/img/fjords.jpg" 
        },
        {
            url:"/assets/img/mountains.jpg" 
        }
    ],

    tags:[
        "News",
        "W3Schools",
        "Labels",
        "Games",
        "Friends",
        "Games",
        "Friends",
        "Food",
        "Design",
        "Art",
        "Photos",
    ],

    notification:{
        title:"Hey!", 
        content:"People are looking at your profile. Find out who."
    },

    posts:[
        {
            id:1,
            date:"1 min",
            name:"John Doe",
            likes:9,
            title: 'All Day Event very long title',
            allDay: true,
            start: new Date(2018, 5, 0),
            end: new Date(2018, 5, 1),
            comments:[],
            author:{
                name:"John Doe",
                avatar:"/assets/img/avatar2.png"
            },
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            pictures:[
                {
                    url:"/assets/img/nature.jpg",
                    caption:"Nature" 
                },
                {
                    url:"/assets/img/lights.jpg",
                    caption:"Northern Lights" 
                }
            ]
        },
        {
            id:2,
            date:"12 min",
            name:"John Doe",
            likes:2,
            title: 'Long Event',
            start: new Date(2018, 5, 7),
            end: new Date(2018, 5, 10),
            comments:[],
            author:{
                id:1,
                name:"Richard Doyle",
                avatar:"/assets/img/avatar3.png"
            },
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            pictures:[],
            cover:{
                url:"/assets/img/nature.jpg",
                caption:"Nature" 
            }           

        },
        {
            id:3,
            date:"1 hour",
            name:"John Doe",
            likes:2,
            title: 'DTS STARTS',
            start: new Date(2018, 5, 13, 0, 0, 0),
            end: new Date(2018, 5, 20, 0, 0, 0),
            comments:[],
            author:{
                id:2,
                name:"Jane Doe",
                avatar:"/assets/img/avatar6.png"
            },
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            pictures:[]
        }
    ],

    comments : [
        {
            id:0,
            author:{
                id:2,
                name:"Jane Doe",
                avatar:"/assets/img/avatar6.png"
            },
            date:"1 min",
            content:"Abracadabra \n Here is my comment !"


        }
    ],

    InBox : [
        {
            id:0,
            name: "kims ian",
            title: "이번주 금요일날 저녁에 축구동호회 공지사항 전달해드립니다.",
            date: '2018-04-14',
            from: "seb",
            check: false,
            history:"http://www.kgnews.co.kr/news/photo/201210/320840_67798_4428.jpg"
        },
        {
            id:2,
            name: "seb",
            title: "이번주 정규적인 회의 시간안내",
            date: '2018-04-16',
            from: "Asmise",
            check: false,
            history:"http://www.visualsports.co.kr/sites/default/files/2017-06/main_02.jpg"
        },
        {
            id:3,
            name: "Asmise",
            title: "저번주 k리그와 s리그경이 하이라이트 사진과 영상입니다.",
            date: '2018-04-21',
            from: "k spone team",
            check: true,
            history:"http://ilyo.co.kr/contents/article/images/2016/0804/1470237986555027.jpg"
        },
        {
            id:4,
            name: "kims ian",
            title: "이번주 금요일날 저녁에 축구동호회 공지사항 전달해드립니다.",
            date: '2018-04-14',
            from: "seb",
            check: false,
            history:"http://heraldk.com/wp-content/uploads/2015/08/20150817000222_0.jpg"
        },
        {
            id:5,
            name: "seb",
            title: "이번주 정규적인 회의 시간안내",
            date: '2018-04-16',
            from: "Asmise",
            check: false,
            history:"http://www.dailyjn.com/news/photo/201609/38450_31586_462.png"
        },
        {
            id:6,
            name: "Asmise",
            title: "저번주 k리그와 s리그경이 하이라이트 사진과 영상입니다.",
            date: '2018-04-21',
            from: "k spone team",
            check: true,
            history:"http://img.yonhapnews.co.kr/etc/inner/KR/2016/04/15/AKR20160415151800007_01_i.jpg"
        },
        {
            id:7,
            name: "kims ian",
            title: "이번주 금요일날 저녁에 축구동호회 공지사항 전달해드립니다.",
            date: '2018-04-14',
            from: "seb",
            check: false,
            history:"http://img.asiatoday.co.kr/file/2017y/02m/17d/2017021701002025800112791.jpg"
        },
        {
            id:8,
            name: "seb",
            title: "이번주 정규적인 회의 시간안내",
            date: '2018-04-16',
            from: "Asmise",
            check: false,
            history:"http://cdn.pressian.com/data/photos/cdn/20180413/art_1522556521.jpg"
        },
        {
            id:9,
            name: "Asmise",
            title: "저번주 k리그와 s리그경이 하이라이트 사진과 영상입니다.",
            date: '2018-04-21',
            from: "k spone team",
            check: true,
            history:"http://image.hankookilbo.com/i.aspx?Guid=3e43911cd7de4dd8b1a3a88917bdc586&Month=201710&size=640"
        }
    ],
    userCard: [
        {
            id:0,
            SuperCard: "/assets/img/ses.png",
            name: "Super 실버"
        },
        {
            id:1,
            SuperCard: "/assets/img/ses.png",
            name: "Super 실버"
        },
        {
            id:2,
            SuperCard: "/assets/img/ses.png",
            name: "Super 실버"
        },
        {
            id:3,
            SuperCard: "/assets/img/ses.png",
            name: "Super 실버"
        },
        {
            id:4,
            SuperCard: "/assets/img/ses.png",
            name: "Super 실버"
        },
        {
            id:5,
            SuperCard: "/assets/img/ses.png",
            name: "Super 실버"
        },
        {
            id:6,
            SuperCard: "/assets/img/ses.png",
            name: "Super 실버"
        },
    ],
    team: {
        teams: [
            {
                id: 1,
                title: 'soccer team',
                signed: false,
                owner: false,
                logo_img: 'https://www.seeklogo.net/wp-content/uploads/2011/08/liverpool-logo-vector.png',
                main_img: 'https://talksport.com/sites/default/files/styles/just_scale/public/field/image/201708/pjimage_32.jpg?itok=OdMFfk9M',
                description: 'abcd',
                friends: [
                    {name: 'Sebastian Mesiliee1', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team2.png'},
                    {name: 'Sebastian Mesiliee2', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team2.png'},
                    {name: 'Sebastian Mesiliee3', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team2.png'},
                    {name: 'Sebastian Mesiliee4', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team2.png'},
                    {name: 'Sebastian Mesiliee5', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team2.png'},
                    {name: 'Sebastian Mesiliee6', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team2.png'},
                    {name: 'Sebastian Mesiliee7', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team2.png'},
                    {name: 'Sebastian Mesiliee8', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team2.png'},
                    {name: 'Sebastian Mesiliee9', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team2.png'},
                    {name: 'Sebastian Mesiliee10', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team2.png'},
                    {name: 'Sebastian Mesiliee11', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team2.png'},
                ],
            },
            {
                id: 2,
                title: 'basket ball team',
                signed: false,
                owner: false,
                logo_img: 'https://www.seeklogo.net/wp-content/uploads/2011/08/manchester-united-logo-vector.png',
                main_img: 'http://www.manutd.com/sitecore/shell/~/media/B9ED6374FEE143B8B9E484F6069C667F.ashx?w=1280&h=720&rgn=0,533,5004,3348',
                description: 'abcde',
                friends: [],
            },
            {
                id: 3,
                title: 'american football team',
                signed: false,
                owner: false,
                logo_img: 'https://www.seeklogo.net/wp-content/uploads/2011/08/chelsea-logo-vector.png',
                main_img: 'http://bi.gazeta.pl/im/9/11759/z11759359IE,Pilkarze-Chelsea-podczas-rzutow-karnych.jpg',
                description: '123',
                friends: [
                    {name: 'John kang1', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team1.png'},
                    {name: 'John kang2', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team1.png'},
                    {name: 'John kang3', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team1.png'},
                    {name: 'John kang4', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team1.png'},
                    {name: 'John kang5', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team1.png'},
                    {name: 'John kang6', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team1.png'},
                    {name: 'John kang7', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team1.png'},
                    {name: 'John kang8', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team1.png'},
                    {name: 'John kang9', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team1.png'},
                ],
            },
            {
                id: 4,
                title: 'ski team',
                signed: false,
                owner: false,
                logo_img: 'https://www.seeklogo.net/wp-content/uploads/2014/09/Arsenal-vector-logo-download.jpg',
                main_img: 'http://chano8.com/wp-content/uploads/2018/02/skysports-arsenal-tottenham-celebrate_4159318.jpg',
                description: 'dfdf',
                friends: [
                    {name: 'Shalom kim1', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team4.png'},
                    {name: 'Shalom kim2', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team4.png'},
                    {name: 'Shalom kim3', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team4.png'},
                    {name: 'Shalom kim4', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team4.png'},
                ],
            },
            {
                id: 5,
                title: 'boxing team',
                signed: false,
                owner: false,
                logo_img: 'https://www.seeklogo.net/wp-content/uploads/2017/05/manchester-city-logo.png',
                main_img: 'https://si.wsj.net/public/resources/images/BN-VZ574_3hIk7_OR_20171106125714.jpg?width=620&height=413',
                description: 'zzxcvzx',
                friends: [
                    {name: 'Philip kim1', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team3.png'},
                    {name: 'Philip kim2', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team3.png'},
                    {name: 'Philip kim3', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team3.png'},
                    {name: 'Philip kim4', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team3.png'},
                    {name: 'Philip kim5', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team3.png'},
                    {name: 'Philip kim6', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team3.png'},
                    {name: 'Philip kim7', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team3.png'},
                ],
            },
            {
                id: 6,
                title: 'health training',
                signed: false,
                owner: false,
                logo_img: 'https://www.seeklogo.net/wp-content/uploads/2012/02/tottenham-hotspur-fc-logo-vector.jpg',
                main_img: 'https://talksport.com/sites/default/files/styles/just_scale/public/field/image/201704/thfc1.jpg?itok=h_IbZWss',
                description: 'qwerwqer',
                friends: [
                    {name: 'Shalom kim1', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team4.png'},
                    {name: 'Shalom kim2', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team4.png'},
                    {name: 'Shalom kim3', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team4.png'},
                    {name: 'Shalom kim4', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team4.png'},
                    {name: 'Shalom kim5', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team4.png'},
                    {name: 'Shalom kim6', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team4.png'},
                    {name: 'Shalom kim7', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team4.png'},
                    {name: 'Shalom kim8', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team4.png'},
                    {name: 'Shalom kim9', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team4.png'},
                ],
            },
        ],

        friends: [
            {name: 'Sebastian Mesiliee', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team2.png'},
            {name: 'John Kang', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team1.png'},
            {name: 'Shalom Kim', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team4.png'},
            {name: 'Philip Kim', img: 'https://ico.sponb.io/wp-content/uploads/2018/05/team3.png'},
        ],

        boards: [
            {id: 1, team_id: 1, title: 'abcdefg', writer: 'John Kang', content: 'abcdefdfdfasdfasdfasdfasdf'},
            {id: 2, team_id: 1, title: 'dfefdaf', writer: 'Philip Kim', content: '123213123123123123123123'},
            {id: 3, team_id: 1, title: 'dfdfdf', writer: 'Shalom Kim', content: 'lppopopudpsfipisekfdkf'},
            {id: 4, team_id: 1, title: 'dfasfsadf', writer: 'John Kang', content: 'cmcmmsdkskdsksdksdkdsk'},
            {id: 5, team_id: 2, title: 'abcdefg', writer: 'John Kang', content: 'abcdefdfdfasdfasdfasdfasdf'},
            {id: 6, team_id: 2, title: 'dfefdaf', writer: 'Philip Kim', content: '123213123123123123123123'},
            {id: 7, team_id: 2, title: 'dfdfdf', writer: 'Shalom Kim', content: 'lppopopudpsfipisekfdkf'},
            {id: 8, team_id: 2, title: 'dfasfsadf', writer: 'John Kang', content: 'cmcmmsdkskdsksdksdkdsk'},
            {id: 9, team_id: 3, title: 'abcdefg', writer: 'John Kang', content: 'abcdefdfdfasdfasdfasdfasdf'},
            {id: 10, team_id: 3, title: 'dfefdaf', writer: 'Philip Kim', content: '123213123123123123123123'},
            {id: 11, team_id: 3, title: 'dfdfdf', writer: 'Shalom Kim', content: 'lppopopudpsfipisekfdkf'},
            {id: 12, team_id: 3, title: 'dfasfsadf', writer: 'John Kang', content: 'cmcmmsdkskdsksdksdkdsk'},
            {id: 13, team_id: 4, title: 'abcdefg', writer: 'John Kang', content: 'abcdefdfdfasdfasdfasdfasdf'},
            {id: 14, team_id: 4, title: 'dfefdaf', writer: 'Philip Kim', content: '123213123123123123123123'},
            {id: 15, team_id: 4, title: 'dfdfdf', writer: 'Shalom Kim', content: 'lppopopudpsfipisekfdkf'},
            {id: 16, team_id: 4, title: 'dfasfsadf', writer: 'John Kang', content: 'cmcmmsdkskdsksdksdkdsk'},
            {id: 17, team_id: 5, title: 'abcdefg', writer: 'John Kang', content: 'abcdefdfdfasdfasdfasdfasdf'},
            {id: 18, team_id: 5, title: 'dfefdaf', writer: 'Philip Kim', content: '123213123123123123123123'},
            {id: 19, team_id: 5, title: 'dfdfdf', writer: 'Shalom Kim', content: 'lppopopudpsfipisekfdkf'},
            {id: 20, team_id: 5, title: 'dfasfsadf', writer: 'John Kang', content: 'cmcmmsdkskdsksdksdkdsk'},
        ]
    }
}

export default FakeApi
