# nuxt-notion-boilerplate

This is a boilerplate for deploying a Notion blog using Nuxt to Netlify. 

## Notion Setup
Create a new database in Notion with the following columns:
- Name (Title property)
- Slug (Text property)
- Author (Text property)

Create a new integration by going to *Settings & Members* > *Integrations* > *Develop your own Integrations*  
You will need the Authorization Key to allow the Netlify functions to access your Notion database.  

## Netlify Setup
Go to Environment Variables in Netlify dashboard  
Add a new 'CLIENT_TOKEN' variable and set its value to the Authorization Key from the Notion Integration  
Add a new 'DATABASE_ID' and set its value to the ID of your database.  

**To deploy, either:**
- Connect the Netlify site to a Github repository for automatically deployments  
- Run ``npm run generate`` and ``netlify deploy`` using Netlify CLI  

**For more info**  
https://nuxtjs.org/deployments/netlify/  
https://www.better.dev/getting-started-with-the-notion-api  
https://developers.notion.com/  