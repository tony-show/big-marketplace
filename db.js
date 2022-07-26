module.exports = () => {
  const data = {
    projects: [],
  }

  const getImages = (id, count) => {
    const images = []
    for (let i = 1; i <= count; i++) {
      images.push(`https://picsum.photos/id/${id}${i}/1920/1080`)
    }
    return images
  }

  for (let i = 1; i <= 100; i++) {
    const contentImages = getImages(i, Math.floor(Math.random() * 5))
    const sliderImages = getImages(i + 1, Math.floor(Math.random() * 10))
    const coverImage = `https://picsum.photos/id/${i}/1920/1080`
    data.projects.push({
      id: i,
      cover: coverImage,
      title: `Project ${i}`,
      client: {
        name: 'Вася Пупкин',
        date: '14 июля 2022',
        country: 'Россия',
      },
      description: 'Текст описания',
      skills: ['Ecommerce', 'Web Development', 'UI Design'],
      content: {
        description: 'Полное описание проекта',
        images: contentImages,
      },
      slides: sliderImages,
      review: {
        text: 'Text review',
        author: 'Anatoly Ivashov',
        company: 'tonyshow',
      },
      site: 'https://tonyshow.ru',
    })
  }

  return data
}
