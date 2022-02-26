// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    const notion = new Client({
      auth: process.env.CLIENT_TOKEN, // Authorisation Token from Notion Integration
    })

    const myPage = await notion.databases.query({
      database_id: process.env.DATABASE_ID,
    })

    return {
      statusCode: 200,
      body: JSON.stringify(myPage),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
