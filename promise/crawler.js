const https = require('https')
const Promise = require('promise')
const cheerio = require('cheerio')
const baseUrl = 'https://www.imooc.com/learn/'
const url = 'https://www.imooc.com/learn/348'

const fetchCourseArray = []

Promise
  .all(fetchCourseArray)
  .then((pages) => {
    const coursesData = []

    pages.forEach((html) => {
      const courses = filterHtml(html)
      coursesData.push(courses)
    })

    coursesData.sort((a, b) => a.number < b.number)
  })
  .catch(err => {

  })


const getPageAsync = (url) => {
  return new Promise((resolve, reject) => {
    console.log('正在爬取 ' + url)
    https.get(url, function (res) {
      let html = ''
      res.on('data', function (data) {
        // 将 http 的 IncomingStream 流读取的 StringBuffer 对象进行拼接，形成 html 字符串
        html += data
      })
      res.on('end', function () {
        resolve(html)
      })
    }).on('error', (e) => {
      reject(e)
    })
  })
}

/**
 * 将 html 字符串进行过滤，返回课程的对象
 * @param html
 * @returns {Array}
 */
function filterHtml (html) {
  const $ = cheerio.load(html)
  const chapters = $('.chapter')
  const title = $('#page_header .path span').text()
  const number = parseInt($('.info_num i').eq(0).text().trim(), 10)

  const courseData = {
    title: title,
    videos: [],
    number: number
  }

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

