exports.handler = async (event, context) => {
  try {
    const notion = new Client({
      auth: process.env.CLIENT_TOKEN, // Authorisation Token from Notion Integration
    })

    const myPage = await notion.databases.query({
      database_id: process.env.DATABASE_ID,
    })

    const myPage = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Slug",
        text: {
          contains: event.queryStringParameters.slug,
        },
      },
    })

    const pageContent = await notion.blocks.children.list({
      block_id: myPage.results[0].id,
      page_size: 50,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        name: myPage.results[0].properties.Name.title[0]["plain_text"],
        content: pageContent
      }),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
