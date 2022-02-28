const { Client } = require("@notionhq/client")

exports.handler = async (event, context) => {
  try {
    const notion = new Client({
      auth: process.env.CLIENT_TOKEN
    })

    const articles = await notion.databases.query({
      database_id: process.env.DATABASE_ID,
    })

    const articlesArray = articles.results.map(i => {
      const newArticle = {
        id: i.id,
        author: i.properties.Author.rich_text[0]["plain_text"],
        created_at: i.created_time,
        cover: i.cover['external'].url || i.cover['file'].url,
        slug: i.properties.Slug.rich_text[0]["plain_text"],
        title: i.properties.Name.title[0]["plain_text"],
      }

      return newArticle
    })

    const response = {
      articles: articlesArray
    }

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,GET"
      },
      body: JSON.stringify(response),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
