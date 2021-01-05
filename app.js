//すべての問題を一括管理
const quiz=[
    {
        question:'飲むとおこられる飲み物ってなに？',
        hint:'怒ったときの声',
        answer:[
            '牛乳',
            'お茶',
            '水',
            'コーラ'
        ],
        correct:'コーラ'
    },
    {
        question:'ねずみが通っている学校ってどんな学校でしょう？',
        hint:'ねずみの鳴き声',
        answer:[
            '小学校',
            '中学校',
            '高校',
            '大学'
        ],
        correct:'中学校'
    },
    {
        question:'壊れている調味料ってなーんだ？',
        hint:'壊れているを言い換えると',
        answer:[
            '醤油',
            '味噌',
            '胡椒',
            '塩'
        ],
        correct:'胡椒'
    },
    {
        question:'空から降ってくるお菓子ってなーんだ？',
        hint:'〇〇で濡れちゃった',
        answer:[
            'チョコレート',
            '飴',
            'クッキー',
            '金平糖'
        ],
        correct:'飴'
    },
    {
        question:'ひっくり返ると軽くなる動物ってなーんだ？',
        hint:'かるくなる',
        answer:[
            'キリン',
            'ラクダ',
            'ゴリラ',
            'イルカ'
        ],
        correct:'イルカ'
    }
]


const $button=document.getElementsByTagName('button');
const buttonLength=$button.length;

//クイズの問題数と今どの問題なのかを管理
let quizIndex=0;
const quizLength=quiz.length;

//スコアをカウント
let score=0;


//HTMLに問題と解答を反映させる関数setupQuiz
const setupQuiz = () =>{
    //問題を反映
    document.getElementById('js-question').textContent=quiz[quizIndex].question;
    //ヒントを反映
    document.getElementById('js-hint').textContent=quiz[quizIndex].hint;

    document.getElementById('top').textContent=quizIndex+1;
    //解答を反映
    let buttonIndex=0;
    while(buttonIndex<buttonLength){
    $button[buttonIndex].textContent=quiz[quizIndex].answer[buttonIndex];
    buttonIndex++;
    }
}
const st=()=>{
    //window.alert('なぞなぞスタート！');
    swal("なぞなぞゲーム！", "準備はいい？", "info");
};

st();
setupQuiz();//setupQuiz();//クイズ画面を作る


//クリックされた場所がどこか、正解、不正解判定する.
//次の問題がある場合は次に行く
//スコアも管理する関数
const clickHandler=(e)=>{
    if(quiz[quizIndex].correct===e.target.textContent){
        // window.alert('正解！');
        swal("正解", "やったー", "success");
        
        score++
    }else{
        // window.alert('不正解')
        swal("ハズレ", "正解は"+quiz[quizIndex].correct+"だよ", "error");
    }

    quizIndex++;

    if(quizIndex<quizLength){
            setupQuiz();
    }else{
        //window.alert('終了！　正解数は'+score+'問です。');
        

        document.getElementById('title').textContent = '終了！あなたのスコアは' + score + '/' + quizLength + 'です';
        document.getElementById('js-items').style.visibility = 'hidden';

        document.getElementById('top').style.visibility = 'hidden';
        document.getElementById('foot').style.visibility = 'hidden';

        if(score===4){
            document.getElementById('js-question').textContent = '！満点！おめでとう！';
        }else{
            document.getElementById('js-question').textContent = '残念。満点を目指そう！';
        }
    }
};

//正誤判定
let handlerIndex=0;
while(handlerIndex<buttonLength){
    $button[handlerIndex].addEventListener('click',(e)=>{
        clickHandler(e);
    });
    handlerIndex++;
}


