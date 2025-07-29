import { google } from "googleapis"

const listFiles = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: './credentials.json',
    scopes: ['https://www.googleapis.com/auth/drive.readonly']
  })

  const drive = google.drive({ version: 'v3', auth })
  
  let files = []

  // Gets the folder called 'GG_Gallery' which should be the main parent folder (only declares its id)
  const mainFolder = await drive.files.list({
    q: "name='GG_Gallery'",
    fields: 'files(id, name)'
  })
  const mainFolderId = mainFolder.data.files[0].id
  
  // Returns a LIST of the subfolders in the main parent folder.
  const subfolders = await drive.files.list({
    q: `'${mainFolderId}' in parents and mimeType contains 'folder'`,
    fields: 'files(id, name)'
  })

  // Loops over each subfolder and puts all the images in each one in a list.
  for (const folder of subfolders.data.files) {
    const images = await drive.files.list({
      q: `'${folder.id}' in parents and mimeType contains 'image/'`,
      fields: 'files(id, name)'
    })
    const folderFiles = {
      folder_name: folder.name,
      images: images.data.files
    }
    files.push(folderFiles)
  }

  return files
}

listFiles()