// This method (Google Drive straight to database) is not viable :(

import { google } from "googleapis"

const auth = new google.auth.GoogleAuth({
  keyFile: './credentials.json',
  scopes: ['https://www.googleapis.com/auth/drive']
})

const drive = google.drive({ version: 'v3', auth })

const listFiles = async () => {
  let files = []

  // const setPublicLink = async (imagesResponse) => {
  //   for (const image of imagesResponse.data.files) {
  //     await drive.permissions.create({
  //       fileId: image.id,
  //       requestBody: {
  //         type: 'anyone',
  //         role: 'reader'
  //       }
  //     })
  //     const publicLink = `https://lh3.googleusercontent.com/d/${image.id}`
  //     image.publicLink = publicLink
  //   }
  // }

  // Gets the folder called 'GG_Gallery' which should be the main parent folder (only declares its id)
  const mainFolderResponse = await drive.files.list({
    q: "name='GG_Gallery'",
    fields: 'files(id, name)'
  })
  const mainFolderId = mainFolderResponse.data.files[0].id
  
  // Returns a LIST of the subfolders in the main parent folder.
  const subfoldersResponse = await drive.files.list({
    q: `'${mainFolderId}' in parents and mimeType contains 'folder'`,
    fields: 'files(id, name)'
  })

  // Loops over each subfolder and puts all the images in each one in a list.
  for (const folder of subfoldersResponse.data.files) {
    const imagesResponse = await drive.files.list({
      q: `'${folder.id}' in parents and mimeType contains 'image/'`,
      fields: 'files(id, name)'
    })
    // await setPublicLink(imagesResponse)
    const folderFiles = {
      folder_name: folder.name,
      images: imagesResponse.data.files,
    }
    files.push(folderFiles)
  }

  console.log(files)
  console.log(files[0].images)
  return files
}

listFiles()