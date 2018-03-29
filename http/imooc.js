const https = require('https')
const cheerio = require('cheerio')
const url = 'https://www.imooc.com/learn/348'

/**
 * 将 html 字符串进行过滤，返回课程的对象
 * @param html
 * @returns {Array}
 */
function filterHtml (html) {
  const $ = cheerio.load(html)
  const chapters = $('.chapter')

  const courseData = []

  chapters.each(function (item) {
    const chapter = $(this)
    const chapterTitle = chapter.find('strong').text()
    const videos = chapter.find('.video').children('li')

    const chapterData = {
      chapterTitle: chapterTitle,
      videos: []
    }

    videos.each(function () {
      const video = $(this).find('.J-media-item')
      const id = video.attr('href').split('video/')[1]
      const videoTitle = video.text()

      chapterData.videos.push({
        id: id,
        title: videoTitle
      })

      courseData.push(chapterData)
    })
  })

  return courseData
}

/**
 * 打印课程列表数据
 * @param courseData
 */
function printCourseInfo (courseData) {
  courseData.forEach((item) => {
    const chapterTitle = item.chapterTitle

    console.log(chapterTitle + '\r\n\t')

    item.videos.forEach((video) => {
      console.log(`[${video.id}] ${video.title} \r\n\t`)
    })
  })
}

/**
 * 网络爬虫请求
 */
https.get(url, function (res) {
  let html = ''
  res.on('data', function (data) {
    // 将 http 的 IncomingStream 流读取的 StringBuffer 对象进行拼接，形成 html 字符串
    html += data
  })
  res.on('end', function () {
    const courseData = filterHtml(html)
    printCourseInfo(courseData)
  })
})
