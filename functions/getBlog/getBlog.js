const { Client } = require("@notionhq/client")

exports.handler = async (event, context) => {
  try {
    const notion = new Client({
      auth: process.env.CLIENT_TOKEN
    })

    const myPage = await notion.databases.query({
      database_id: process.env.DATABASE_ID,
    })

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,GET"
      },
      body: JSON.stringify(myPage),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
