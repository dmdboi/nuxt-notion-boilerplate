const { Client } = require("@notionhq/client")

exports.handler = async (event, context) => {
  try {
    const notion = new Client({
      auth: process.env.CLIENT_TOKEN, // Authorisation Token from Notion Integration
    })

    const pageArray = await notion.databases.query({
      database_id: process.env.DATABASE_ID,
      filter: {
        property: "Slug",
        text: {
          contains: event.queryStringParameters.slug,
        },
      },
    })

    const page = pageArray.results[0]

    const newArticle = {
      id: page.id,
      author: page.properties.Author.rich_text[0]["plain_text"],
      created_at: page.created_time,
      cover: page.cover['external'].url || i.cover['file'].url,
      slug: page.properties.Slug.rich_text[0]["plain_text"],
      title: page.properties.Name.title[0]["plain_text"],
    }

    const pageContent = await notion.blocks.children.list({
      block_id: page.id,
      page_size: 50,
    });

    const response = {
      page: newArticle,
      content: pageContent
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
