const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public'));

app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})

app.get('/', function(요청, 응답) {
    응답.sendFile(__dirname + '/index.html')
  })