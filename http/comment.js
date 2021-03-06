const http = require('http')
const querystring = require('querystring')

const postData = querystring.stringify({
  'content': 'hello world!',
  'cid': 348
})

const options = {
  hostname: 'www.imooc.com',
  port: 80,
  path: '/course/docomment',
  methods: 'POST',
  headers: {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Length': postData.length,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'imooc_uuid=5cd971d6-402b-473e-822c-dffc5f87d243; imooc_isnew_ct=1509609224; loginstate=1; apsid=M1YzE0NDVlYmEzYzJhZWU1MWY4ZjE1NTU0OGU2M2IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANTMwODgzMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0MDIyNzkwNzZAcXEuY29tAAAAAAAAAAAAAAAAAAAAADE2OWY3YmRjOWI1NDViMjIwOGU0Y2VkM2FmOTBjNDA1pDW2WqQ1tlo%3DZj; UM_distinctid=16267ddb4d410a-08b1130dd3a8e8-173b6d57-13c680-16267ddb4d59a9; CNZZDATA1261110065=64634813-1522160361-https%253A%252F%252Fwww.baidu.com%252F%7C1522160361; bdshare_firstime=1522165749826; PHPSESSID=75i66djv5asnrbeujsvqr1he96; mc_channel=banner; mc_marking=63c3be5b01f747b456271481ab7c6e5e; cninfo=banner-63c3be5b01f747b456271481ab7c6e5e; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1522161006,1522248384,1522332477,1522635227; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1522636725; imooc_isnew=2; cvde=5ac191d915aca-38',
    'Host': 'www.imooc.com',
    'Origin': 'https://www.imooc.com',
    'Pragma': 'no-cache',
    'Referer': 'https://www.imooc.com/comment/348',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36 X-Requested-With:XMLHttpRequest'

  }
}

const req = http.request(options, (res) => {
  console.log(res.statusCode)
  console.log(JSON.stringify(res.headers))

  res.on('data', (chunk) => {
    console.log(Buffer.isBuffer(chunk))
    console.log(typeof chunk)
  })

  res.on('end', () => {
    console.log('评论完毕')
  })
})

req.on('error', (e) => {
  console.log('error:' + e.message)
})

req.write(postData)

req.end()