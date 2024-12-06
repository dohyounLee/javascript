// 라이브러리 추가
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const morgan = require('morgan');
const path = require('path');

// 변수 정의
const app = express();
const db = new sqlite3.Database('./chinook.db');
const PORT = 3000;

// 미들웨어 추가
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));

// 라우트 정의
app.get('/', (req,res) => {
    res.sendFile(path.resolve('publc','index.html'));
});
app.get('/api/search', (req,res) => {
    const { Name } = req.query;
    db.all(`SELECT Name FROM artists WHERE Name LIKE '%${Name}%'`, (err,rows) => {
        if (err) {
            console.error(err);
            // res.status 해주기
        } else{
            res.send(rows); //배열 자동으로 JSON 형식으로 변환되어 클라이언트로 전달
        }
    });

});
 // 디비도 닫아야하는데?? 어디에?? 
app.listen(PORT, () => {
    console.log('서버 레디');
})